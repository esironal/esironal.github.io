angular.module('templates-app', ['gist/addFile.tpl.html', 'gist/create.tpl.html', 'gist/edit.tpl.html', 'gist/gist-pane.tpl.html', 'gist/gist-tab.tpl.html', 'login/login.tpl.html']);

angular.module("gist/addFile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("gist/addFile.tpl.html",
    "<div id=\"add-file-{{gist.id}}\" class=\"add-box fade none\" ng-class=\"{in: gist.addFile, disp: gist.addFile}\">\n" +
    "    <div class=\"add add-left\">\n" +
    "        <h4>Add file</h4>\n" +
    "        <small>File will be added with a default content</small>\n" +
    "        <form class=\"form-horizontal\" role=\"form\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"sr-only\" for=\"filename\">File name</label>\n" +
    "                <input id=\"filename\" class=\"form-control\" type=\"text\" ng-model=\"filename\"\n" +
    "                       placeholder=\"file name\"/>\n" +
    "            </div>\n" +
    "            <div class=\"pull-right\">\n" +
    "                <button class=\"btn pink-button\" ng-click=\"addFile()\">Save</button>\n" +
    "                <button class=\"btn default\" ng-click=\"gist.addFile = false\">Cancel</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("gist/create.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("gist/create.tpl.html",
    "<div class=\"add-box fade none\" ng-class=\"{in: display, disp: display}\">\n" +
    "    <div class=\"add\">\n" +
    "        <h4>Create new gist</h4>\n" +
    "        <small>Gist will be created with a default content</small>\n" +
    "        <form class=\"form-horizontal\" role=\"form\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"sr-only\" for=\"description\">Description</label>\n" +
    "                <input id=\"description\" class=\"form-control\" type=\"text\" ng-model=\"gist.description\"\n" +
    "                       placeholder=\"description\"/>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"sr-only\" for=\"filename\">File name</label>\n" +
    "                <input id=\"filename\" class=\"form-control\" type=\"text\" ng-model=\"gist.filename\"\n" +
    "                       placeholder=\"first file name\"/>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"checkbox\">\n" +
    "                <label>\n" +
    "                    <input type=\"checkbox\" ng-model=\"gist.public\"/> Public\n" +
    "                </label>\n" +
    "            </div>\n" +
    "            <div class=\"pull-right\">\n" +
    "                <button class=\"btn pink-button\" ng-click=\"create()\">Save</button>\n" +
    "                <button class=\"btn default\" ng-click=\"cancelNew()\">Cancel</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("gist/edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("gist/edit.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-8 col-md-8 user-info\">\n" +
    "        <div class=\"avatar pull-left\">\n" +
    "            <img class=\"img-responsive\" ng-src=\"{{user.useravatar}}\" alt=\"User avatar\"/>\n" +
    "        </div>\n" +
    "        <div class=\"pull-left\">\n" +
    "            <ul>\n" +
    "                <li class=\"pink upper\">{{user.username}}</li>\n" +
    "                <li>{{user.fullname}}</li>\n" +
    "                <li>\n" +
    "                    <a href=\"\" ng-click=\"logout()\">Log out</a>\n" +
    "                </li>\n" +
    "                <li ng-show=\"user.username == data.username\">\n" +
    "                    <a href=\"\" ng-click=\"data.addGist = true\">New gist</a>\n" +
    "                </li>\n" +
    "                <hs-create-gist gist=\"data.newGist\" create=\"create()\" cancel-new=\"cancelNew()\"\n" +
    "                            display=\"data.addGist\"></hs-create-gist>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-4 col-md-4\">\n" +
    "        <div class=\"input-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" ng-model=\"data.username\">\n" +
    "                <span class=\"input-group-btn\">\n" +
    "                  <button class=\"btn pink-button\" type=\"button\" ng-click=\"browse()\">Get gists</button>\n" +
    "                </span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"alert alert-danger col-sm-12 col-md-12\" ng-show=\"data.error\" ng-bind=\"data.error\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"gist-wrapper col-sm-12 col-md-12\" ng-repeat=\"gist in data.gists\">\n" +
    "    <h4>{{gist.description | notEmpty}}\n" +
    "        <div class=\"pull-right\" style=\"display: inline-block\">\n" +
    "            <i class=\"fa fa-star action pink\" ng-show=\"user.id != gist.user.id\" ng-click=\"star(gist.id)\"\n" +
    "               title=\"Star gist\"></i>\n" +
    "            <i class=\"fa fa-plus-circle action pink\" ng-show=\"user.id == gist.user.id\" title=\"Add file\" ng-click=\"gist.addFile = true\"></i>\n" +
    "            <i class=\"fa fa-trash-o action pink\" ng-show=\"user.id == gist.user.id\" ng-click=\"deleteGist(gist.id)\"\n" +
    "               title=\"Delete gist\"></i>\n" +
    "            <hs-add-file gist=\"gist\" update=\"update(gist)\"></hs-add-file>\n" +
    "        </div>\n" +
    "\n" +
    "    </h4>\n" +
    "    <hs-gist id=\"gist.id\" user=\"data.username\">\n" +
    "        <div ng-repeat=\"f in gist.files\">\n" +
    "\n" +
    "            <hs-gist-file-pane title=\"f.filename\">\n" +
    "                <textarea class=\"editor\" hs-gist-content=\"\" ng-model=\"f.content\" ng-blur=\"update(gist)\"></textarea>\n" +
    "            </hs-gist-file-pane>\n" +
    "        </div>\n" +
    "    </hs-gist>\n" +
    "</div>");
}]);

angular.module("gist/gist-pane.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("gist/gist-pane.tpl.html",
    "<div class=\"tab-pane\" ng-show=\"selected\" ng-transclude></div>");
}]);

angular.module("gist/gist-tab.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("gist/gist-tab.tpl.html",
    "<div class=\"tabbable\">\n" +
    "    <div class=\"tab-content\" ng-transclude></div>\n" +
    "    <ul class=\"nav nav-tabs\">\n" +
    "        <li ng-repeat=\"pane in panes\" ng-class=\"{active:pane.selected}\">\n" +
    "            <a href=\"\" ng-click=\"select(pane)\">{{pane.title}}</a>\n" +
    "        </li>\n" +
    "        <li class=\"git-link\"><a ng-href=\"https://gist.github.com/{{user}}/{{id}}\">View in GitHub</a></li>\n" +
    "    </ul>\n" +
    "</div>");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div id=\"login-screen col-sm-12\">\n" +
    "    <div class=\"login col-sm-12 col-md-4 col-md-offset-4\">\n" +
    "        <div class=\"text-center\">\n" +
    "            <i class=\"fa fa-github\"></i>\n" +
    "        </div>\n" +
    "\n" +
    "        <div>\n" +
    "            <form role=\"form\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <input class=\"form-control\" type=\"text\" ng-model=\"credentials.id\" placeholder=\"username\" ng-required=\"required\"/>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <input class=\"form-control\" type=\"password\" ng-model=\"credentials.sec\" placeholder=\"password\" ng-required=\"required\"/>\n" +
    "                </div>\n" +
    "                <div class=\"alert alert-danger\" ng-show=\"error\" ng-bind=\"error\"></div>\n" +
    "                <button class=\"btn btn-block pink-button\" ng-click=\"auth()\">login</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
