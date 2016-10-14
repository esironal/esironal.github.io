var $ = require('jquery-browserify');
var _ = require('underscore');
var Backbone = require('backbone');

var User = require('./models/user');
var Users = require('./collections/users');
var Orgs = require('./collections/orgs');

var Repo = require('./models/repo');
var File = require('./models/file');

var AppView = require('./views/app');
var NotificationView = require('./views/notification');
var StartView = require('./views/start');
var ProfileView = require('./views/profile');
var SearchView = require('./views/search');
var ReposView = require('./views/repos');
var RepoView = require('./views/repo');
var FileView = require('./views/file');
var DocumentationView = require('./views/documentation');
var ChooseLanguageView = require('./views/chooselanguage');

var templates = require('../dist/templates');
var util = require('./util');
var auth = require('./config');
var cookie = require('./cookie');

// Set scope
auth.scope = cookie.get('scope') || 'repo';

// Find the proper repo.
// Handles users with access to a repo *and* it's fork,
// depending on the login.
function findUserRepo(user, repoName) {
  var login = user.get('login');
  var repo;
  // If user has access to repos with the same name,
  // use the repo that matches the login/url, if available.
  // https://github.com/prose/prose/issues/939
  var repos = user.repos.filter(function (model) {
    return model.get('name') === repoName;
  });
  if (repos.length === 1) {
    repo = repos[0];
  } else if (repos.length > 1) {
    // Returns false if there isn't a repo with a matching login.
    // We're fine with that since _.isUndefined(false) === true
    repo = _.find(repos, function (model) {
      return model.get('owner').login === login;
    });
  }
  return repo;
}

function newRepo(user, repoName) {
  return new Repo({
    name: repoName,
    owner: {
      login: user.get('login')
    }
  });
}

module.exports = Backbone.Router.extend({

  routes: {
    'about(/)': 'about',
    'chooselanguage(/)': 'chooseLanguage',
    ':user(/)': 'profile',
    ':user/:repo(/)': 'repo',
    ':user/:repo/*path(/)': 'path',
    '*default': 'start'
  },

  initialize: function(options) {
    options = _.clone(options) || {};

    this.users = new Users();

    if (options.user) {
      this.user = options.user;
      this.users.add(this.user);
    }

    // Load up the main layout
    this.app = new AppView({
      el: '#prose',
      model: {},
      user: this.user
    });

    this.app.render();
    this.app.loader.done();
  },

  chooseLanguage: function() {
    if (this.view) this.view.remove();

    this.app.loader.start(t('loading.file'));
    this.app.nav.mode('');

    this.view = new ChooseLanguageView();
    this.app.$el.find('#main').html(this.view.render().el);

    this.app.loader.done();
  },

  about: function() {
    if (this.view) this.view.remove();

    this.app.loader.start(t('loading.file'));
    this.app.nav.mode('');

    this.view = new DocumentationView();
    this.app.$el.find('#main').html(this.view.render().el);

    this.app.loader.done();
  },

  // #example-user
  // #example-organization
  profile: function(login) {
    if (this.view) this.view.remove();

    this.app.loader.start(t('loading.repos'));
    this.app.nav.mode('repos');

    util.documentTitle(login);

    var user = this.users.findWhere({ login: login });
    if (_.isUndefined(user)) {
      user = new User({ login: login });
      this.users.add(user);
    }

    var search = new SearchView({
      model: user.repos,
      mode: 'repos'
    });

    var repos = new ReposView({
      model: user.repos,
      search: search
    });

    var content = new ProfileView({
      auth: this.user,
      search: search,
      sidebar: this.app.sidebar,
      repos: repos,
      router: this,
      user: user
    });

    user.fetch({
      success: (function(model, res, options) {
        this.view = content;
        this.app.$el.find('#main').html(this.view.render().el);

        model.repos.fetch({
          success: repos.render,
          error: (function(model, xhr, options) {
            this.error(xhr);
          }).bind(this),
          complete: this.app.loader.done
        });
      }).bind(this),
      error: (function(model, xhr, options) {
        this.error(xhr);
      }).bind(this)
    });
  },

  // #example-user/example-repo
  // #example-user/example-repo/tree/example-branch/example-path
  repo: function(login, repoName, branch, path) {
    if (this.view instanceof RepoView &&
      this.view.model.get('owner').login === login &&
      this.view.model.get('name') === repoName &&
      (this.view.branch === branch ||
        (_.isUndefined(branch) &&
        this.view.branch === this.view.model.get('default_branch'))
      )) {
      this.view.files.path = path || '';
      return this.view.files.render();
    } else if (this.view) this.view.remove();

    this.app.loader.start(t('loading.repo'));
    this.app.nav.mode('repo');

    var title = repoName;
    if (branch) title = repoName + ': /' + path + ' at ' + branch;
    util.documentTitle(title);

    var user = this.users.findWhere({ login: login });
    if (_.isUndefined(user)) {
      user = new User({ login: login });
      this.users.add(user);
    }

    var repo = findUserRepo(user, repoName);
    if (_.isUndefined(repo)) {
      repo = newRepo(user, repoName);
      user.repos.add(repo);
    }

    repo.fetch({
      success: (function(model, res, options) {
        var content = new RepoView({
          app: this.app,
          branch: branch,
          model: repo,
          nav: this.app.nav,
          path: path,
          router: this,
          sidebar: this.app.sidebar
        });

        this.view = content;
        this.app.$el.find('#main').html(this.view.render().el);
      }).bind(this),
      error: (function(model, xhr, options) {
        this.error(xhr);
      }).bind(this),
      complete: this.app.loader.done
    });
  },

  path: function(login, repoName, path) {
    var url = util.extractURL(path);

    switch(url.mode) {
      case 'tree':
        this.repo(login, repoName, url.branch, url.path);
        break;
      case 'new':
      case 'blob':
      case 'edit':
      case 'preview':
        this.post(login, repoName, url.mode, url.branch, url.path);
        break;
      default:
        throw url.mode;
    }
  },

  post: function(login, repoName, mode, branch, path) {
    if (this.view) this.view.remove();

    this.app.nav.mode('file');

    switch(mode) {
      case 'new':
        this.app.loader.start(t('loading.creating'));
        break;
      case 'edit':
        this.app.loader.start(t('loading.file'));
        break;
      case 'preview':
        this.app.loader.start(t('loading.preview'));
        break;
    }

    var user = this.users.findWhere({ login: login });
    if (_.isUndefined(user)) {
      user = new User({ login: login });
      this.users.add(user);
    }

    var repo = findUserRepo(user, repoName);
    if (_.isUndefined(repo)) {
      repo = newRepo(user, repoName);
      user.repos.add(repo);
    }

    var file = {
      app: this.app,
      branch: branch,
      branches: repo.branches,
      mode: mode,
      nav: this.app.nav,
      name: util.extractFilename(path)[1],
      path: path,
      repo: repo,
      router: this,
      sidebar: this.app.sidebar
    };

    // TODO: defer this success function until both user and repo have been fetched
    // in paralell rather than in series
    user.fetch({
      success: (function(model, res, options) {
        repo.fetch({
          success: (function(model, res, options) {
            this.view = new FileView(file);
            this.app.$el.find('#main').html(this.view.el);
          }).bind(this),
          error: (function(model, xhr, options) {
            this.error(xhr);
          }).bind(this),
          complete: this.app.loader.done
        });
      }).bind(this),
      error: (function(model, xhr, options) {
        this.error(xhr);
      }).bind(this)
    });
  },

  preview: function(login, repoName, mode, branch, path) {
    if (this.view) this.view.remove();

    this.app.loader.start(t('loading.preview'));

    var user = this.users.findWhere({ login: login });
    if (_.isUndefined(user)) {
      user = new User({ login: login });
      this.users.add(user);
    }

    var repo = findUserRepo(user, repoName);
    if (_.isUndefined(repo)) {
      repo = newRepo(user, repoName);
      user.repos.add(repo);
    }

    var file = {
      branch: branch,
      branches: repo.branches,
      mode: mode,
      nav: this.app.nav,
      name: util.extractFilename(path)[1],
      path: path,
      repo: repo,
      router: this,
      sidebar: this.app.sidebar
    };

    repo.fetch({
      success: (function(model, res, options) {
        // TODO: should this still pass through File view?
        this.view = new Preview(file);
        this.app.$el.find('#main').html(this.view.el);
      }).bind(this),
      error: (function(model, xhr, options) {
        this.error(xhr);
      }).bind(this),
      complete: this.app.loader.done
    });
  },

  start: function() {
    if (this.view) this.view.remove();

    // If user has authenticated
    if (this.user) {
      router.navigate(this.user.get('login'), {
        trigger: true,
        replace: true
      });
    } else {
      this.app.nav.mode('start');
      this.view = new StartView();
      this.app.$el.find('#main').html(this.view.render().el);
    }
  },

  notify: function(message, error, options) {
    if (this.view) this.view.remove();

    this.view = new NotificationView({
      'message': message,
      'error': error,
      'options': options
    });

    this.app.$el.find('#main').html(this.view.render().el);
    this.app.loader.stop();
  },

  error: function(xhr) {
    var message = [
      xhr.status,
      xhr.statusText
    ].join(' ');

    var error = util.xhrErrorMessage(xhr);

    var options = [
      {
        'title': t('notification.home'),
        'link': '/'
      }
    ];

    if (xhr.status === 404 && !this.user) {
      error = t('notification.404');
      options.unshift({
        'title': t('login'),
        'link': auth.site + '/login/oauth/authorize?client_id=' +
          auth.id + '&scope=' + auth.scope + '&redirect_uri=' +
          encodeURIComponent(window.location.href)
      });
    }

    this.notify(message, error, options);
  }
});
