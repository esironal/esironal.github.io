"use strict";
(function ($, Apperyio, undefined) {

    /**
     * A module that provides social login
     */

    /**
     * @member {Object.<String, Object.<String, String>>} sessionTokens  - Obtained session tokens from Appery.io.
     *                                                                     Key - database id, value - object with structure:
     *                                                                     {"token": <token>, "userId": <userId>, "status": <status>}
     * @member {string}                  defaultDB                       - Default database id for login actions.
     * @member {Object.<String, String>} params                          - Current page params.
     * @member {string}                  host                            - Appery.io host.
     * @member {string}                  dbBaseUrl                       - Base Appery.io database URL.
     * @member {string}                  oauthUrl                        - Base URL for social login actions.
     * @member {string}                  oauthLoginUrl                   - URL for exchanging social tokens to Appery.io database tokens.
     * @member {string}                  oauthTokenUrl                   - URL for obtaining request token(Oauth 1.0 providers).
     * @member {string}                  oauthLogout                     - URL for removing social connection from Appery.io database.
     * @member {string}                  usersUrl                        - Base URL for Appery.io database users actions.
     * @member {string}                  loginUrl                        - URL for Appery.io database users login.
     * @member {string}                  logoutUrl                       - URL for Appery.io database users logout.
     * @member {string}                  checkLoginUrl                   - URL for testing Appery.io database token.
     * @member {string}                  updateUserUrl                   - URL for updating Appery.io database user.
     * @member {Object.<String, Object.<String, String>>} providers      - Information about supported social providers.
     * @member {object}                  statusNames                     - Names of available login process statusNames.
     * @member {object}                  eventNames                      - Names of events.
     */
    var sessionTokens = {},
        defaultDB,
        params = extractParams(window.location.href),
        host = "appery.io",
        dbBaseUrl = "https://api." + host + "/rest/1/db/",
        oauthUrl = dbBaseUrl + "oauth/",
        oauthLoginUrl = oauthUrl + "login/",
        oauthTokenUrl = oauthUrl + "token/",
        oauthLogout = oauthUrl + "logout?provider=<provider>",
        usersUrl = dbBaseUrl + "users/",
        loginUrl = dbBaseUrl + "login/",
        logoutUrl = dbBaseUrl + "logout/",
        checkLoginUrl = usersUrl + "me/",
        updateUserUrl = usersUrl + "<user_id>",
        providers = {
            twitter: {
                id: "twitter",
                baseUrl: "https://api.twitter.com/oauth/authenticate"
            },
            facebook: {
                id: "facebook",
                baseUrl: "https://www.facebook.com/dialog/oauth"
            },
            google: {
                id: "google",
                baseUrl: "https://accounts.google.com/o/oauth2/auth"
            }
        },
        statusNames = {
            unauthorized: "unauthorized",
            inProgress: "inProgress",
            authorized: "authorized",
            error: "error"
        },
        eventNames = {
            dbLoginStart: "dbloginstart",
            dbLoginEnd: "dbloginend"
        };

    /**
     * Obtaining Appery.io database token after user grants the access request(Oauth 2.0).
     * @see {@link https://tools.ietf.org/html/rfc6749#section-4.1.2}
     * It's used only for non PhoneGap apps.
     */
    if (!isPhoneGapApp() && params["code"]) {
        sessionTokens = retrieveSavedSessionTokens();
        externalLogin(null, params["code"], null,
            localStorage.getItem('Apperyio.sociallogin.dbId'),
            localStorage.getItem('Apperyio.sociallogin.clientId'),
            localStorage.getItem('Apperyio.sociallogin.socialnetwork'),
            localStorage.getItem('Apperyio.sociallogin.callback'));
    }

    /**
     * Obtaining Appery.io database token after user grants permission for consumer access(Oauth 1.0a).
     * @see {@link http://oauth.net/core/1.0a/#auth_step2}
     * It's used only for non PhoneGap apps.
     */
    if (!isPhoneGapApp() && params["oauth_token"] && params["oauth_verifier"]) {
        sessionTokens = retrieveSavedSessionTokens();
        externalLogin(null, params["oauth_verifier"], params["oauth_token"],
            localStorage.getItem('Apperyio.sociallogin.dbId'),
            localStorage.getItem('Apperyio.sociallogin.clientId'),
            localStorage.getItem('Apperyio.sociallogin.socialnetwork'),
            localStorage.getItem('Apperyio.sociallogin.callback'));
    }

    /**
     * Fires event
     * @param eventName
     */
    function fireEvent(eventName) {
        var event = document.createEvent('Event');
        event.initEvent(eventName, true, true);
        document.dispatchEvent(event);
    }

    /**
     * Sets current login progress status
     * @param {string} dbId - Database Id. Optional if default database id is set.
     * @param {string} status - Current login progress status.
     */
    function setStatus(dbId, status) {
        dbId = getDB(dbId);
        if (!dbId) {
            return;
        }
        if (sessionTokens[dbId]) {
            sessionTokens[dbId].status = status;
        } else {
            sessionTokens[dbId] = {
                status: status
            };
        }
    }

    /**
     * Returns current login progress status.
     * @param {string} dbId - Database Id. Optional if default database id is set.
     * @returns {string}
     */
    function getStatus(dbId) {
        dbId = getDB(dbId);
        if (sessionTokens[dbId]) {
            return sessionTokens[dbId].status;
        }
        return statusNames.unauthorized;
    }

    /**
     * Returns Appery.io database token.
     * @param {string} dbId - Database Id. Optional if default database id is set.
     * @returns {string|null}
     */
    function getToken(dbId) {
        dbId = getDB(dbId);
        if (sessionTokens[dbId]) {
            return sessionTokens[dbId].token;
        }
        return null;
    }

    /**
     * Returns Appery.io database User Id.
     * @param {string} dbId - Database Id. Optional if default database id is set.
     * @returns {string|null}
     */
    function getUserId(dbId) {
        dbId = getDB(dbId);
        if (sessionTokens[dbId]) {
            return sessionTokens[dbId].userId;
        }
        return null;
    }

    /**
     * Retrieves saved session token from sessionStorage. It should be used only on Appery.io preview.
     * @returns {object}
     */
    function retrieveSavedSessionTokens() {
        if (window.location.host === host) {
            sessionTokens = JSON.parse(sessionStorage.getItem("Apperyio.sociallogin.tokens"));
            sessionStorage.removeItem("Apperyio.sociallogin.tokens");
        }
        if (Object.prototype.toString.call(sessionTokens) === "[object Object]") {
            return sessionTokens;
        } else {
            return {};
        }
    }

    /**
     * Extracts parameters from URL.
     * @see {@link http://tools.ietf.org/html/rfc3986#section-3.4}
     * @param {string} url
     * @returns {Object.<String, String>}
     */
    function extractParams(url) {
        var params = {},
            search;
        if (url.indexOf("?") === -1) {
            return params;
        }
        if (url.indexOf("#") > -1) {
            search = url.slice(url.indexOf("?"), url.indexOf("#"));
        } else {
            search = url.slice(url.indexOf("?"));
        }

        if (search.length > 1) {
            for (var pairIndex = 0, pairs = search.substr(1).split("&"); pairIndex < pairs.length; pairIndex++) {
                var pair = pairs[pairIndex].split("=");
                params[pair[0]] = pair[1];
            }
        }
        return params;
    }

    /**
     * Creates deferred.
     * @returns {object}
     */
    function getDeferred() {
        return $.Deferred();
    }

    /**
     * If dbId is specified then returns dbId, if not then returns default database id.
     * @param {string} dbId - Database id. Optional if default database id is set.
     * @returns {string}
     */
    function getDB(dbId) {
        if (dbId) {
            return dbId;
        } else {
            return defaultDB;
        }
    }

    /**
     * Adds required Appery.io headers and sends rest.
     * @param {string}                         dbId            - Database id. Optional if default database id is set.
     * @param {string}                         url             - Request URL.
     * @param {string}                         method          - Request method.
     * @param {string|Object.<String, String>} data            - Request body or params.
     * @param {boolean}                        [withoutToken]  - Is token header should be omitted. Optional.
     * @param {function}                       [callback]      - Function that should be called after successful response. Optional.
     * @returns {object}
     */
    function sendRest(dbId, url, method, data, withoutToken, callback) {
        dbId = getDB(dbId);

        var headers = {
            "X-Appery-Database-Id": dbId,
            "Content-Type": "application/json"
        };
        if (!withoutToken && getToken(dbId)) {
            headers["X-Appery-Session-Token"] = getToken(dbId);
        }

        var deferred = getDeferred();
        $.ajax({
            url: url,
            headers: headers,
            data: data,
            method: method
        }).then(function (data) {
                if (callback) {
                    callback(data, dbId, deferred);
                } else {
                    deferred.resolve(data);
                }
            },
            function (jqXHR) {
                deferred.reject(jqXHR);
            });
        return deferred.promise();
    }

    /**
     * Exchanges oauth provider token and verifier to Appery.io token.
     * @param {object} deferred       - Deferred.
     * @param {string} verifier       - Oauth 1.0 verifier or Oauth 2.0 code.
     * @param {string} token          - Oauth 1.0 request token.
     * @param {string} dbId           - Database id. Optional if default database id is set.
     * @param {string} clientId       - Social provider client id.
     * @param {string} socialnetwork  - Social provider id.
     * @param {string} [callback]     - Callback URL. Only for OAuth 2.0.
     */
    function externalLogin(deferred, verifier, token, dbId, clientId, socialnetwork, callback) {
        fireEvent(eventNames.dbLoginStart);
        setStatus(dbId, statusNames.inProgress);
        var data = {
            "verifier": verifier,
            "token": token,
            "provider": socialnetwork,
            "appId": clientId,
            "callback": callback
        };

        sendRest(dbId, oauthLoginUrl, "POST", JSON.stringify(data), false, extractToken).then(function (sessionToken) {
            if (deferred) {
                deferred.resolve(sessionToken);
            }
        }, function (error) {
            fireEvent(eventNames.dbLoginEnd);
            setStatus(dbId, statusNames.error);
            if (deferred) {
                deferred.reject(error);
            }
        });
    }

    /**
     * Determines if the app runs on device.
     * @returns {boolean}
     */
    function isPhoneGapApp() {
        return (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);
    }

    /**
     * Extracts Appery.io database token from response
     * @param {Object.<String, String>} data     - Parsed response body.
     * @param {string}                  dbId     - Database id.
     * @param {object}                  deferred - Deferred.
     */
    function extractToken(data, dbId, deferred) {
        sessionTokens[dbId] = {
            token: data.sessionToken,
            userId: data["_id"],
            status: statusNames.authorized
        };
        fireEvent(eventNames.dbLoginEnd);
        deferred.resolve(data.sessionToken);
    }

    /**
     * Social login via OAuth 2.0 Authorization Framework
     * @see {@link https://tools.ietf.org/html/rfc6749}
     * @param {string} dbId           - Database id. Optional if default database id is set.
     * @param {string} clientId       - Social provider client id.
     * @param {string} baseUrl        - Social provider authorization URL.
     * @param {string} callbackUrl    - URL for redirecting after user grants access.
     * @param {string} socialnetwork  - Social provider id.
     * @param {string} scope          - Set of permissions that the application requests.
     * @returns {object}
     */
    function loginOauth2_0(dbId, clientId, baseUrl, callbackUrl, socialnetwork, scope) {
        var url = baseUrl + "?client_id=" + clientId +
            "&redirect_uri=" + callbackUrl + "&scope=" + scope + "&response_type=code";
        var deferred = getDeferred();
        var ref;

        if (isPhoneGapApp()) {
            ref = window.open(url, '_blank', 'location=yes');
            ref.addEventListener("loadstart", getAccessToken);
        } else {
            if (window.location.host === host) {
                sessionStorage.setItem("Apperyio.sociallogin.tokens", JSON.stringify(sessionTokens));
            }
            localStorage.setItem('Apperyio.sociallogin.socialnetwork', socialnetwork);
            localStorage.setItem('Apperyio.sociallogin.clientId', clientId);
            localStorage.setItem('Apperyio.sociallogin.callback', callbackUrl);
            localStorage.setItem('Apperyio.sociallogin.dbId', dbId = getDB(dbId));
            window.open(url, "_self");
        }

        function getAccessToken(event) {
            if (event.url.indexOf(callbackUrl) !== 0) {
                return;
            }
            params = extractParams(event.url);
            if (params['code']) {
                externalLogin(deferred, params['code'], "", dbId, clientId, socialnetwork, callbackUrl);
                ref.close();
            } else {
                deferred.reject("Access not granted");
                ref.close();
            }
        }

        return deferred.promise();
    }

    /**
     * Social login via OAuth 1.0a Authorization Framework
     * @see {@link http://oauth.net/core/1.0a}
     * @param {string} dbId           - Database id. Optional if default database id is set.
     * @param {string} clientId       - Social provider client id.
     * @param {string} baseUrl        - Social provider authorization URL.
     * @param {string} callbackUrl    - URL for redirecting after user grants access.
     * @param {string} socialnetwork  - Social provider id.
     * @returns {*}
     */
    function loginOauth1_0a(dbId, clientId, baseUrl, callbackUrl, socialnetwork) {
        var deferred = getDeferred();
        var ref;

        var params = {
            provider: socialnetwork,
            appId: clientId,
            callback: callbackUrl
        };

        sendRest(dbId, oauthTokenUrl, "GET", params, true, extractToken);

        function extractToken(success) {
            var token = success.token;
            var url = baseUrl + "?oauth_token=" + token;
            if (isPhoneGapApp()) {
                ref = window.open(url, '_blank', 'location=yes');
                ref.addEventListener("loadstart", getVerifier);
            } else {
                if (window.location.host === host) {
                    sessionStorage.setItem("Apperyio.sociallogin.tokens", JSON.stringify(sessionTokens));
                }
                localStorage.setItem('Apperyio.sociallogin.socialnetwork', socialnetwork);
                localStorage.setItem('Apperyio.sociallogin.clientId', clientId);
                localStorage.setItem('Apperyio.sociallogin.dbId', dbId = getDB(dbId));
                window.open(url, "_self");
            }
        }

        function getVerifier(event) {
            if (event.url.indexOf(callbackUrl) !== 0) {
                return;
            }
            params = extractParams(event.url);
            if (params['oauth_token'] && params['oauth_verifier']) {
                externalLogin(deferred, params['oauth_verifier'], params['oauth_token'], dbId, clientId, socialnetwork);
                ref.close();
            } else {
                deferred.reject("Access not granted");
                ref.close();
            }
        }

        return deferred.promise();
    }

    Apperyio.User = {
        /**
         * Returns Appery.io database token.
         * @param {string} dbId - Database Id. Optional if default database id is set.
         * @returns {string|null}
         */
        getToken: getToken,

        /**
         * Returns Appery.io database User Id.
         * @param {string} dbId - Database Id. Optional if default database id is set.
         * @returns {string|null}
         */
        getUserId: getUserId,

        /**
         * Returns login progress status.
         * @param {string} dbId - Database Id. Optional if default database id is set.
         * @returns {string}
         */
        getStatus: getStatus,

        /**
         * Sets default Database Id.
         * @param {string} dbId - Database Id.
         */
        setDefaultDB: function (dbId) {
            defaultDB = dbId;
        },

        /**
         * Creates user in Appery.io database.
         * @see {@link https://devcenter.appery.io/documentation/backendservices/database/#Signing_up}
         * @param {Object.<String, String>} options - Request data. Should contain at least "username" and "password" fields.
         * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
         * @returns {Object}
         */
        createUser: function (options, dbId) {
            fireEvent(eventNames.dbLoginStart);
            setStatus(dbId, statusNames.inProgress);
            return sendRest(dbId, usersUrl, "POST", JSON.stringify(options), true, extractToken);
        },

        /**
         * Receives Appery.io database token.
         * @see {@link https://devcenter.appery.io/documentation/backendservices/database/#Signing_in_login}
         * @param {Object.<String, String>} options - Request parameters. Should contain "username" and "password" fields.
         * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
         * @returns {Object}
         */
        login: function (options, dbId) {
            fireEvent(eventNames.dbLoginStart);
            setStatus(dbId, statusNames.inProgress);
            return sendRest(dbId, loginUrl, "GET", options, true, extractToken);
        },

        /**
         * Invalidates token in Appery.io database.
         * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
         * @returns {Object}
         */
        logout: function (dbId) {
            var self = this;

            function logoutSuccess(data, dbId, deferred) {
                self.invalidate(dbId);
                deferred.resolve();
            }

            return sendRest(dbId, logoutUrl, "GET", {}, false, logoutSuccess);
        },

        /**
         * Returns list of users in Appery.io database.
         * @see {@link https://devcenter.appery.io/documentation/backendservices/database/#User_queries}
         * @param {Object.<String, String>} options - Request parameters.
         * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
         * @returns {Object}
         */
        findUsers: function (options, dbId) {
            return sendRest(dbId, usersUrl, "GET", options);
        },

        /**
         * Checks if Appery.io database token is valid.
         * @param {Object.<String, String>} options - Request parameters.
         * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
         * @returns {Object}
         */
        isLogged: function (options, dbId) {
            return sendRest(dbId, checkLoginUrl, "GET", options);
        },

        /**
         * Updates Appery.io database user.
         * @see {@link https://devcenter.appery.io/documentation/backendservices/database/#Updating_users}
         * @param {Object.<String, String>} options - Request parameters.
         * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
         * @returns {Object}
         */
        updateUser: function (options, dbId) {
            return sendRest(dbId, updateUserUrl.replace("<user_id>", this.getUserId(dbId)), "PUT", JSON.stringify(options));
        },

        /**
         * Deletes Appery.io database token. It doesn't invalidate token in Appery.io database.
         * Returns true if token existed.
         * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
         * @returns {boolean}
         */
        invalidate: function (dbId) {
            dbId = getDB(dbId);
            if (sessionTokens[dbId]) {
                sessionTokens[dbId] = undefined;
                return true;
            }
            return false;
        },

        /**
         * Removes social id from Appery.io database.
         * @param {string}                  provider - Provider Id.
         * @param {string}                  [dbId]   - Database Id. Optional if default database id is set.
         * @returns {Object}
         */
        logoutOauth: function (provider, dbId) {
            dbId = getDB(dbId);
            return sendRest(dbId, oauthLogout.replace("<provider>", provider), "DELETE", {});
        },

        /**
         * Social login via twitter oauth provider.
         * @param {string} clientId       - Social provider client id.
         * @param {string} callbackUrl    - URL for redirecting after user grants access.
         * @param {string} [dbId]         - Database Id. Optional if default database id is set.
         * @returns {object}
         */
        loginTwitter: function (clientId, callbackUrl, dbId) {
            return loginOauth1_0a(dbId, clientId, providers.twitter.baseUrl, callbackUrl, providers.twitter.id);
        },

        /**
         * Social login via facebook oauth provider.
         * @param {string} clientId       - Social provider client id.
         * @param {string} callbackUrl    - URL for redirecting after user grants access.
         * @param {string} [dbId]         - Database Id. Optional if default database id is set.
         * @returns {Object}
         */
        loginFB: function (clientId, callbackUrl, dbId) {
            return loginOauth2_0(dbId, clientId, providers.facebook.baseUrl, callbackUrl, providers.facebook.id, "");
        },

        /**
         * Social login via google oauth provider.
         * @param {string} clientId       - Social provider client id.
         * @param {string} callbackUrl    - URL for redirecting after user grants access.
         * @param {string} [dbId]         - Database Id. Optional if default database id is set.
         * @returns {Object}
         */
        loginGoogle: function (clientId, callbackUrl, dbId) {
            return loginOauth2_0(dbId, clientId, providers.google.baseUrl, callbackUrl, providers.google.id, "profile");
        }
    };

})(jQuery, Apperyio);