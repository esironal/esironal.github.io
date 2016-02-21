var convertId = function (id) {
    if (typeof n2id != 'undefined' && n2id[id]) {
        return n2id[id];
    }

    return id;
};

var isJSON = function (xhr) {
    var contentType = xhr.getResponseHeader('Content-Type');
    return contentType.indexOf('javascript') >= 0 || contentType.indexOf('json') >= 0;
};

var tokenize = function (s) {
    var split = s.split(/_|-|(?=[A-Z])/);
    return jQuery(split).map(function (idx, elt) {
        return elt.toLowerCase();
    });
};

var tokenizeHash = function (h) {
    var result = new Array();

    for (var name in h) {
        result.push({
            nameTokens: tokenize(name).sort(),
            value: h[name]
        });
    }

    return result;
};

var findExactMatch = function (tokenized, list) {
    var listString = list.join('_');
    for (var i = 0; i < tokenized.length; i++) {
        var token = tokenized[i];

        //exact match
        if (token.nameTokens.join('_') == listString) {
            return token.value;
        }
    }
};

var matchAllInArray = function (haystack, needles) {
    for (var i = 0; i < needles.length; i++) {
        var needle = needles[i];

        if (jQuery.inArray(needle, haystack) < 0) {
            return false;
        }
    }

    return needles.length > 0;
};

var findMatch = function (tokenized, matcher) {
    for (var i = 0; i < tokenized.length; i++) {
        var token = tokenized[i];

        if (matcher(token.nameTokens)) {
            return token.value;
        }
    }

    return null;
};

var extractToken = function (hash) {
    //exact match against OAuth spec
    var token = hash['oauth_token'];
    var tokenSecret = hash['oauth_token_secret'];

    if (!token && !tokenSecret) {
        var tokenized = tokenizeHash(hash);

        token = findMatch(tokenized, function (haystack, needles) {
            //filter anything that has 'secret' in name
            if (jQuery.inArray('secret', haystack) >= 0) {
                return false;
            }

            return matchAllInArray(haystack, ['token']);
        });

        tokenSecret = findMatch(tokenized, function (haystack, needles) {
            return matchAllInArray(haystack, ['secret', 'token']);
        });

        if (!tokenSecret) {
            tokenSecret = findMatch(tokenized, function (haystack, needles) {
                return matchAllInArray(haystack, ['secret']);
            });
        }
    }

    return {
        token: token,
        tokenSecret: tokenSecret
    };
};

var appendParamsToUrl = function (url, data, traditional) {
    var paramString = jQuery.param(data, traditional);

    if (!paramString) {
        return url;
    }

    return url.replace(/(\?)|#|$/, function (group) {
        if (group == '?') {
            return group + paramString + '&';
        } else {
            return '?' + paramString + (group || "");
        }
    });
};

var createClass = (function () {

    var subclass = function () {
    };

    return function (parent, handlers) {

        var klass = function () {
            this.init.apply(this, arguments);
        };

        klass.$super = parent;

        if (parent) {
            subclass.prototype = parent.prototype;
            klass.prototype = new subclass;
        }

        if (handlers) {
            jQuery.extend(klass.prototype, handlers);
        }

        if (!klass.prototype.init) {
            klass.prototype.init = jQuery.noop;
        }

        klass.prototype.constructor = klass;
        return klass;
    };
}());

__ajaxBeforeSend = function (jqXHR, settings) {
    var headers = settings.headers;

    for (var name in headers) {
        jqXHR.setRequestHeader(name, headers[name]);
    }
};

var SecurityContext = createClass(null, {
    init: function (settings) {
        this.settings = settings;
        this.name = settings.name;
    },

    __fireEvent: function (type) {
        var handlerName = 'on' + type.charAt(0).toUpperCase() + type.slice(1);

        var handler = this.settings[handlerName];

        if (handler) {
            var args = jQuery.makeArray(arguments);

            //remove type argument
            args = args.slice(1);

            handler.apply(this, args);
        }
    },

    __errorHandler: function (xhr, textStatus, errorThrown) {
        this.__fireEvent('loginError', xhr, textStatus, errorThrown);
    },

    __isAuthorizationError: function (xhr) {
        return jQuery.inArray(xhr.status, this.settings.authorizationErrorStatusCodes || []) >= 0;
    },

    isLoggedIn: function () {
        return false;
    },

    login: function () {
    },

    invoke: function (service, settings) {
        var dsErrorHandler = settings.error;

        var that = this;

        settings.error = function (xhr, textStatus, errorThrown) {
            try {
                if (that.__isAuthorizationError(xhr)) {
                    that.__fireEvent('authorizationError', xhr, textStatus, errorThrown);
                } else if (dsErrorHandler) {
                    dsErrorHandler.apply(this, arguments);
                }
            } finally {
                that = null;
            }
        };

        service.execute(settings);
    },

    getUrl: function (requestOptions) {
        return requestOptions.url;
    }
});

var SimpleSecurityContext = createClass(SecurityContext, {

    __getStorageKeyNameBase: function () {
        return this.name;
    },

    __getLoginStorageKeyName: function () {
        return this.__getStorageKeyNameBase() + ':login';
    },

    __getPasswordStorageKeyName: function () {
        return this.__getStorageKeyNameBase() + ':password';
    },

    isLoggedIn: function () {
        return !!localStorage.getItem(this.__getLoginStorageKeyName());
    },

    login: function (params) {
        var login = params.login;
        var password = params.password;

        localStorage.setItem(this.__getLoginStorageKeyName(), login);
        localStorage.setItem(this.__getPasswordStorageKeyName(), password);
    },

    logout: function () {
        localStorage.setItem(this.__getLoginStorageKeyName(), '');
        localStorage.setItem(this.__getPasswordStorageKeyName(), '');
    },

    invoke: function (service, settings) {
        var login = localStorage.getItem(this.__getLoginStorageKeyName());
        var password = localStorage.getItem(this.__getPasswordStorageKeyName());

        if (login) {
            var authorizationHeader = 'Basic ' + jQuery.base64Encode(login + ':' + password);
            settings.headers = jQuery.extend({}, {Authorization: authorizationHeader}, settings.headers || {});
        }

        SimpleSecurityContext.$super.prototype.invoke.call(this, service, settings);
    }
});

var OAuthSecurityContext = createClass(SecurityContext, {

    __authorizeTokenHandler: function (data) {
        var results = OAuth.getParameterMap(data);
        var token = extractToken(results);

        this.__saveToken(token);
        this.__fireEvent('loginSuccess', results);
    },

    __authorizeToken: function (token, pin) {
        var requestSettings = {
            url: this.settings.serviceProvider.accessTokenURL,
            type: this.settings.serviceProvider.requestType || 'post',
            dataType: 'text',
            success: jQuery.proxy(this.__authorizeTokenHandler, this),
            error: jQuery.proxy(this.__errorHandler, this)
        };

        var protocolParams;
        if (pin) {
            protocolParams = {
                'oauth_verifier': pin
            };
        }

        this.__oAuthAjaxRequest(requestSettings, protocolParams, token);
    },

    __accessToken: function (token) {
        var accessUrl = appendParamsToUrl(this.settings.serviceProvider.userAuthorizationURL, {
            //TODO - does spec require this to be added?
            //oauth_consumer_key: this.settings.consumerKey,
            oauth_token: token.token
        }, true);

        var newWindow = window.open(accessUrl);

        var validatePinButton = jQuery('#' + convertId(this.settings.components.validatePin));
        var initialButtonDisabledState = validatePinButton.attr('disabled');
        validatePinButton.attr('disabled', false);

        validatePinButton.one('click', jQuery.proxy(function (event) {
            validatePinButton.attr('disabled', initialButtonDisabledState);

            var pinInput = jQuery('#' + convertId(this.settings.components.pinInput));

            if (newWindow) {
                try {
                    newWindow.close();
                } finally {
                    newWindow = null;
                }
            }

            this.__authorizeToken(token, pinInput.val());
        }, this));
    },

    __requestTokenHandler: function (data) {
        var results = OAuth.getParameterMap(data);
        var token = extractToken(results);

        this.__accessToken(token);
    },

    __requestToken: function () {
        this.__oAuthAjaxRequest({
            url: this.settings.serviceProvider.requestTokenURL,
            type: this.settings.serviceProvider.requestType || 'post',
            data: jQuery.extend({}, this.settings.requestTokenData, {oauth_token_callback: 'oob'}),
            dataType: 'text',
            success: jQuery.proxy(this.__requestTokenHandler, this),
            error: jQuery.proxy(this.__errorHandler, this)
        });
    },

    __getOAuthAjaxRequestSettings: function (reqSettings, protocolParams, token, useRequestParams) {
        var paramsList = OAuth.getParameterList(reqSettings.data || {});

        var protocolParamsList = OAuth.getParameterList(protocolParams || {});

        var mergedParamsList = jQuery.merge(jQuery.merge([], paramsList), protocolParamsList);

        var message = {
            action: reqSettings.url,
            method: reqSettings.type || 'get',
            parameters: mergedParamsList
        };

        var paramsCount = paramsList.length;

        var accessor = token ? jQuery.extend({}, this.settings, token) : this.settings;

        OAuth.completeRequest(message, accessor);

        var ajaxParams = jQuery.extend({}, reqSettings);

        if (!useRequestParams) {

            var authorizationHeader = OAuth.getAuthorizationHeader('', mergedParamsList.slice(paramsCount));

            var oAuthHeaders = {
                'Authorization': authorizationHeader,
                'Content-Type': 'application/x-www-form-urlencoded'
            };

            if (ajaxParams.headers) {
                ajaxParams.headers = jQuery.extend({}, ajaxParams.headers, oAuthHeaders);
            } else {
                ajaxParams.headers = oAuthHeaders;
            }

            ajaxParams.beforeSend = __ajaxBeforeSend;
        } else {
            ajaxParams.data = OAuth.getParameterMap(mergedParamsList);
        }

        return ajaxParams;
    },

    __oAuthAjaxRequest: function (reqSettings, protocolParams, token) {
        var oAuthRequestSettings = this.__getOAuthAjaxRequestSettings(reqSettings, protocolParams, token, false);

        jQuery.ajax(oAuthRequestSettings);
    },

    getToken: function () {
        var token = localStorage.getItem(this.__getTokenStorageKeyName());
        var tokenSecret = localStorage.getItem(this.__getTokenSecretStorageKeyName());

        if (token && tokenSecret) {
            return {
                token: token,
                tokenSecret: tokenSecret
            };
        }

        return null;
    },

    __getStorageKeyNameBase: function () {
        return this.settings.serviceProvider.requestTokenURL;
    },

    __getTokenStorageKeyName: function () {
        return this.__getStorageKeyNameBase() + ':token';
    },

    __getTokenSecretStorageKeyName: function () {
        return this.__getStorageKeyNameBase() + ':tokenSecret';
    },

    __saveToken: function (token) {
        localStorage.setItem(this.__getTokenStorageKeyName(), token.token);
        localStorage.setItem(this.__getTokenSecretStorageKeyName(), token.tokenSecret);
    },

    clearToken: function () {
        this.__saveToken({});
    },

    isLoggedIn: function () {
        return !jQuery.isEmptyObject(this.getToken());
    },

    __login: function () {
        this.__requestToken.apply(this, arguments);
    },

    login: function () {
        //TODO - alternative case when user is logged in?
        this.clearToken();
        this.__login.apply(this, arguments);
    },

    getUrl: function (requestSettings) {
        var data = requestSettings.data;
        if (!data) {
            data = requestSettings.data = {};
        }

        if (this.isLoggedIn()) {
            requestSettings = this.__getOAuthAjaxRequestSettings(requestSettings, {}, this.getToken(), true);
        }

        return appendParamsToUrl(requestSettings.url, requestSettings.data, requestSettings.traditional);
    },

    invoke: function (service, settings) {
        var oAuthSettings = this.__getOAuthAjaxRequestSettings(settings, {}, this.getToken());

        OAuthSecurityContext.$super.prototype.invoke.call(this, service, oAuthSettings);
    }

});

var XAuthSecurityContext = createClass(OAuthSecurityContext, {

    __successHandler: function (data, textStatus, jqXHR) {
        var dataHash;
        if (isJSON(jqXHR)) {
            dataHash = (jQuery.type(data) === 'object') ? data : jQuery.parseJSON(data);
        } else {
            dataHash = OAuth.getParameterMap(data);
        }

        var token = extractToken(dataHash);
        this.__saveToken(token);
        this.__fireEvent('loginSuccess', dataHash);
    },

    __requestToken: function (params) {
        var data = {};

        if (typeof params == 'function') {
            params = params.call(this);
        }

        var requestSettings = {
            type: this.settings.serviceProvider.requestType || 'post',
            dataType: this.settings.serviceProvider.responseDataType || 'text',
            url: this.settings.serviceProvider.requestTokenURL,
            success: jQuery.proxy(this.__successHandler, this),
            error: jQuery.proxy(this.__errorHandler, this),
            data: params
        };

        jQuery.ajax(this.__getOAuthAjaxRequestSettings(requestSettings));
    }
});

var OAuth2UsernamePasswordSecurityContext = createClass(SecurityContext, {

    __getStorageKeyNameBase: function () {
        return this.settings.requestTokenURL;
    },

    __getAccessTokenStorageKeyName: function () {
        return this.__getStorageKeyNameBase() + ':accessToken';
    },

    __getTokenInstanceUrlStorageKeyName: function () {
        return this.__getStorageKeyNameBase() + ':instanceUrl';
    },

    __saveToken: function (token) {
        localStorage.setItem(this.__getAccessTokenStorageKeyName(), token.accessToken);
        localStorage.setItem(this.__getTokenInstanceUrlStorageKeyName(), token.instanceUrl);
    },

    __requestTokenHandler: function (data) {
        this.__saveToken({
            accessToken: data.access_token,
            instanceUrl: data.instance_url
        });

        this.__fireEvent('loginSuccess', data);
    },

    clearToken: function () {
        this.__saveToken({});
    },

    getToken: function () {
        var accessToken = localStorage.getItem(this.__getAccessTokenStorageKeyName());
        var instanceUrl = localStorage.getItem(this.__getTokenInstanceUrlStorageKeyName());

        if (accessToken && instanceUrl) {
            return {
                accessToken: accessToken,
                instanceUrl: instanceUrl
            };
        }

        return null;
    },

    isLoggedIn: function () {
        return !!this.getToken();
    },

    login: function () {
        var parameters = this.settings.requestParameters || {};

        if (typeof parameters == 'function') {
            parameters = parameters.call(this);
        }

        var data = {
            grant_type: 'password',
            client_id: this.settings.clientId,
            client_secret: this.settings.clientSecret
        };

        jQuery.extend(data, parameters);

        jQuery.ajax({
            type: 'post',
            dataType: 'json',
            data: data,
            url: this.settings.requestTokenURL,
            success: jQuery.proxy(this.__requestTokenHandler, this),
            error: jQuery.proxy(this.__errorHandler, this)
        });
    },

    invoke: function (service, origSettings) {
        var ajaxParams = jQuery.extend({}, origSettings);
        var token = this.getToken();

        if (token) {
            ajaxParams.url = ajaxParams.url.replace(/^https?\:\/\/[^\/]+/, token.instanceUrl);
            ajaxParams.headers = jQuery.extend({}, ajaxParams.headers, {
                Authorization: 'OAuth ' + token.accessToken
            });

            ajaxParams.beforeSend = __ajaxBeforeSend;
        }

        OAuth2UsernamePasswordSecurityContext.$super.prototype.invoke.call(this, service, ajaxParams);
    }
});
