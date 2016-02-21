var Helpers = {
    folderStack: [],
    activeSearchTab: undefined,
    navbar: {
        "myReposTab": "",
        "myGistsTab": "",
        "myFollowersTab": "", 
        "myFollowingTab": "",
        "usersTab": "",
        "reposTab": "",
        "gistsTab": ""
    },
    
    initNavBar: function() {
        for (var key in Helpers.navbar) {
            Appery(key).removeClass("ui-btn-icon-top");
            $("<div class='navbar-icon'>" + Helpers.navbar[key] + "</div>").prependTo(Appery(key));
        }
    },
    
    openRepoItem: function(element) {
        var $element = $(element);
        
        var currentSHA = $element.find(".shaLabel").text();
        localStorage.setItem("currentSHA", currentSHA);
        
        if ($element.attr("type") == "tree") {
            Helpers.folderStack.push(currentSHA);
            getRepoTreeServ.execute({});
        } else {
            var fileName = $element.find(".pathLabel").text();
            var fileExt = fileName.match(/\.\w\w\w/);
            
            localStorage.setItem("currentFileName", fileName);
            
            if (fileExt == ".jpg" || fileExt == ".png" || fileExt == ".gif" || fileExt == ".jpe") {
                Appery.navigateTo('GitHub_Img', {
                    transition: 'slide',
                    reverse: false
                });
            } else {
                Appery.navigateTo('GitHub_File', {
                    transition: 'slide',
                    reverse: false
                });
            }
        }
    },
    
    toUpperFolder: function() {
        Helpers.folderStack.pop();
        localStorage.setItem("currentSHA", Helpers.folderStack[Helpers.folderStack.length - 1]);
        getRepoTreeServ.execute({});
    },
    
    getFileContent: function(value) {
        return "<pre class='fileContent'><code>" + this.escapeHtml(Helpers.base64_decode(value)) + "</code></pre>";
    },
    
    base64_decode: function(data) {
        
        data = this.removeHiddenChars(data);
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
            enc = '';
        
        do {
            h1 = b64.indexOf(data.charAt(i++));
            h2 = b64.indexOf(data.charAt(i++));
            h3 = b64.indexOf(data.charAt(i++));
            h4 = b64.indexOf(data.charAt(i++));
            
            bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
            
            o1 = bits >> 16 & 0xff;
            o2 = bits >> 8 & 0xff;
            o3 = bits & 0xff;
            
            if (h3 == 64) enc += String.fromCharCode(o1);
            else if (h4 == 64) enc += String.fromCharCode(o1, o2);
                else enc += String.fromCharCode(o1, o2, o3);
        } while (i < data.length);
        
        return enc;
    },
    
    removeHiddenChars: function(wstring) {
        var pos = 0;
        var data = "";
        while (true) {
            var foundPos = wstring.indexOf("\n", pos);
            if (foundPos == -1) break;
            
            data += wstring.slice(pos, foundPos);
            pos = foundPos + 1;
        }
        return data;
    },
    
    isPhonegapApp: function() {
        return (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);
    },
    
    searchPageShowHandler: function() {
        Appery("authorizeButton").hide();
        Appery("searchNavBar").hide();
        Appery("logoutButton").hide();
        Appery("myGitButton").hide();
        $(".searchGrid").hide();
        
        var access_token = localStorage.getItem("access_token");
        if (access_token) {
            Helpers.searchPageInit();
        } else {
            if (!Helpers.isPhonegapApp()) {
                var code = Helpers.getAuthorizationCode(window.location.href);
                
                if (code) {
                    getAccessTokenServ.execute({
                        data: {
                            "code": code
                        }
                    });
                } else {
                    Appery("authorizeButton").show();
                    Appery("searchHeader").text("GitHub Login");
                    $("div[name=searchHeader]").removeClass("searchHeader").addClass("welcomeHeader");
                }
            } else {
                Appery("authorizeButton").show();
                Appery("searchHeader").text("GitHub Login");
                $("div[name=searchHeader]").removeClass("searchHeader").addClass("welcomeHeader");
            }
        }
    },
    
    searchPageHideHandler: function() {
        Helpers.activeSearchTab = $("div[dsid=searchNavBar]").find("a.ui-btn-active").attr("name");
    },
    
    searchPageInit: function() {
        Appery("searchNavBar").show();
        Appery("logoutButton").show();
        Appery("myGitButton").show();
        
        $("#GitHub_Search").css("padding-top", 0);
        
        Appery("authorizeButton").hide();
        Appery("searchHeader").text("GitHub Search");
        $("div[name=searchHeader]").removeClass("welcomeHeader").addClass("searchHeader");
        
        if (Helpers.activeSearchTab === undefined) {
            Helpers.activeSearchTab = "usersTab";
        }
        
        $("div[dsid=searchNavBar]").find("a").removeClass('ui-btn-active');
        $("div[dsid=searchNavBar]").find("a[name=" + Helpers.activeSearchTab + "]").addClass('ui-btn-active');
        
        switch (Helpers.activeSearchTab) {
            case "usersTab":
                Appery("usersGrid").show();
                Helpers.searchFix("user", Appery("userSearch").val());
                break;
            case "reposTab":
                Appery("repoGrid").show();
                Helpers.searchFix("repo", Appery("repoSearch").val());
                break;
            case "gistsTab":
                Appery("gistsGrid").show();
                Helpers.searchFix("gist", Appery("searchUserGists").val());
                break;
        }
    },
    
    authorize: function() {
        var url = "https://github.com/login/oauth/authorize?client_id=" + GitHub_settings.client_id;
        if (Helpers.isPhonegapApp()) {
            var ref = window.open(url, '_blank', 'location=no');
            ref.addEventListener('loadstart', function(event) {
                var code;
                if (event.url.indexOf("code") > 0) {
                    code = Helpers.getAuthorizationCode(event.url);
                }
                if (code) {
                    getAccessTokenServ.execute({
                        data: {
                            "code": code
                        }
                    });
                    ref.close();
                }
            });
        } else {
            window.location.href = url;
        }
    },
    
    logout: function() {
        if (Helpers.isPhonegapApp()) {
            var url = "https://github.com/logout";
            var ref = window.open(url, '_blank', 'location=no');
            ref.addEventListener('loadstart', function(event) {
                if (event.url == "https://github.com/") {
                    localStorage.clear();
                    Appery("searchNavBar").hide();
                    Appery("logoutButton").hide();
                    Appery("myGitButton").hide();
                    $(".searchGrid").hide();
                    
                    Appery("authorizeButton").show();
                    Appery("searchHeader").text("GitHub Login");
                    $("div[name=searchHeader]").removeClass("searchHeader").addClass("welcomeHeader");
                    
                    ref.close();
                }
            });
        } else {
            localStorage.clear();
            
            window.location.href = "https://github.com/logout";
        }
    },
    
    getAuthorizationCode: function(url) {
        if (url.indexOf("code") >= 0) {
            
            var query_string = {};
            while (url.indexOf("code") > 0 && url.indexOf("code=") < 0) {
                url = decodeURIComponent(url);
            }
            var query = url;
            
            var tmpVars = query.split("?");
            
            if (tmpVars.length > 1) {
                
                var vars = tmpVars[tmpVars.length - 1].split("&");
                
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split("=");
                    
                    if (typeof query_string[pair[0]] === "undefined") {
                        query_string[pair[0]] = pair[1];
                    } else if (typeof query_string[pair[0]] === "string") {
                        var arr = [query_string[pair[0]], pair[1]];
                        query_string[pair[0]] = arr;
                    } else {
                        query_string[pair[0]].push(pair[1]);
                    }
                }
            }
            return query_string.code;
        }
    },
    
    fillGist: function(value) {
        var html = "";
        for (var key in value) {
            var codeType = "";
            html += "<div class='filename'>" + value[key].filename + "</div>";
            if (value[key].filename.match(/\.\w\w\w/) == ".htm" || value[key].filename.match(/\.\w\w\w/) == ".html" || value[key].filename.match(/\.\w\w\w/) == ".xml") {
                codeType = "xml";
            }
            html += "<pre class='gistContent'><code class='" + codeType + "'>" + this.escapeHtml(value[key].content) + "</code></pre>";
            html += "<hr>";
        }
        return html;
    },
    
    escapeHtml: function(text) {
        return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    },
    
    searchFix: function(type, query) {
        switch (type) {
            case "user":
                if (query === "") {
                    getUsersServ.execute();
                } else {
                    searchUsersServ.execute();
                }
                break;
            case "repo":
                if (query === "") {
                    getReposServ.execute();
                } else {
                    searchReposServ.execute();
                }
                break;
            case "gist":
                if (query === "") {
                    getPublicGistsServ.execute();
                } else {
                    getUserGistsServ.execute();
                }
                break;
        }
    },
    
    resizeTextArea: function() {
        $('.filePanel').height($(window).height() - 80);
    },
    
    updateHeader: function(login) {
        $(".myGrid").hide();
        if (login) {
            Appery('userHeader').text(login);
        }
    }
};