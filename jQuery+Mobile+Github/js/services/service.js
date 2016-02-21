/*
 * Service settings
 */
var GitHub_settings = {
    "client_id": "886e39767db5e2df9414",
    "client_secret": "855d750309b27094e0842a9ff7453a282df2e06b"
}

/*
 * Services
 */

var GitHub_getUserRepos = new Apperyio.RestService({
    'url': 'https://api.github.com/users/{user}/repos',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_getUserGists = new Apperyio.RestService({
    'url': 'https://api.github.com/users/{user}/gists',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_getRepos = new Apperyio.RestService({
    'url': 'https://api.github.com/repositories',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_getUsers = new Apperyio.RestService({
    'url': 'https://api.github.com/users',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_searchUsers = new Apperyio.RestService({
    'url': 'https://api.github.com/legacy/user/search/{keyword}',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_getAccessToken = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': 'https://github.com/login/oauth/access_token',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1455671287857',
        'appery-rest': 'e17661b0-3d87-44e5-81f4-9e8908403fe2'
    },
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': GitHub_settings
});

var GitHub_searchRepos = new Apperyio.RestService({
    'url': 'https://api.github.com/legacy/repos/search/{keyword}',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_getGistComments = new Apperyio.RestService({
    'url': 'https://api.github.com/gists/{gist_id}/comments',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_searchGists = new Apperyio.RestService({
    'url': 'https://api.github.com/gists/{params}',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_getBlob = new Apperyio.RestService({
    'url': 'https://api.github.com/repos/{user_login}/{repo_id}/git/blobs/{sha}',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_getCurrentUser = new Apperyio.RestService({
    'url': 'https://api.github.com/user',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_getGist = new Apperyio.RestService({
    'url': 'https://api.github.com/gists/{id}',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_getUserFollowers = new Apperyio.RestService({
    'url': 'https://api.github.com/users/{user}/followers',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_getUserFollowing = new Apperyio.RestService({
    'url': 'https://api.github.com/users/{user}/following',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_getRepoTree = new Apperyio.RestService({
    'url': 'https://api.github.com/repos/{user_login}/{repo_id}/git/trees/{sha}',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_getCommits = new Apperyio.RestService({
    'url': 'https://api.github.com/repos/{user_login}/{repo_id}/commits',
    'dataType': 'json',
    'type': 'get',
});