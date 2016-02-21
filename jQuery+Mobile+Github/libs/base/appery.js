(function ($) {
    "use strict";
    var components = {};

    var apperyFunction = function () {
        var id;
        var context;
        var elem;
        var screenCtxt = $("#" + Apperyio.CurrentScreen);

        if (arguments.length === 1) {
            id = arguments[0];
            if (components[id]) {
                return components[id].__element;
            } else {
                elem = $('[dsid="' + id + '"]:eq(0)', screenCtxt);
                if (elem.length === 0) {
                    if (screenCtxt.attr('dsid') === id) {
                        elem = screenCtxt;
                    }
                } else {
                    // R14 backward compatibility case
                    if (elem.is("[data-appery-tpl='true']") || elem.closest("[data-appery-tpl='true']").length > 0) {
                        // It's hidden template component
                        var generated = $('[dsrefid="' + id + '"]:eq(0)', screenCtxt);
                        if (generated.length > 0) {
                            elem = generated;
                        }
                    }
                }

                return elem;
            }
        } else {
            for (var i = 0; i < arguments.length - 1; i++) {
                id ? id += "_" + arguments[i] : id = arguments[i];
            }

            if (typeof arguments[arguments.length - 1] === 'string') {
                id += "_" + arguments[arguments.length - 1];
                if (components[id]) {
                    return $(components[id].__element);
                } else {
                    elem = $('[dsid="' + id + '"]:eq(0)', screenCtxt);
                    if (elem.length === 0 && screenCtxt.attr('dsid') === id)
                        elem = screenCtxt;
                    return elem;
                }
            } else {
                var ctx = $(arguments[arguments.length - 1]);
                elem = ctx.closest('[apperytype="mobiletemplate"]');
                if (elem.length !== 0) {
                    var ccname = elem.eq(0).attr('dsid') + "_" + arguments[0];
                    elem = $('[dsid="' + ccname + '"]:eq(0)', screenCtxt);
                    return elem;
                } else {
                    while (elem.size() === 0) {
                        ctx = ctx.parent().closest('[dsrefid]').eq(0);
                        if (ctx.size() === 0) return $();
                        elem = ctx.find('[dsid=' + id + ']').filter('[_idx]').eq(0);
                    }
                    return elem.eq(0);
                }
            }
        }
    };

    apperyFunction.__registerComponent = function (id, component) {
        components[id] = component;
    };

    apperyFunction.__unregisterComponent = function (id) {
        delete components[id];
    };

    apperyFunction.__deleteAllComponents = function () {
        for (var o in components) delete components[o];
    };

    apperyFunction.__URLEncodeSpecial = function (input) {
        if (typeof input == 'string') {
            return encodeURIComponent(input)
                .replace(/%20/g, "+")       // %20
                .replace(/\*/g, '%2A')     // *
                .replace(/~/g, '%7E')      // ~
                .replace(/!/g, '%21')      // !
                .replace(/\(/g, '%28')     // (
                .replace(/\)/g, '%29');    // )
        }
        return undefined;
    };

    var Apperyio;

    Apperyio = window.Apperyio = window.$a = apperyFunction;

    // Backward compatibility
    window.$t = window.Appery = window.Tiggzi = window.Tiggr = apperyFunction;

    function linkPrototypes(parent, child) {
        var F = function () {
        };
        F.prototype = parent.prototype;
        child.prototype = new F();
        child.prototype.constructor = child;
        child.$super = parent.prototype;

        return child;
    }

    Apperyio.createClass = function (base, methods, properties) {
        base = base || Object;
        methods = methods || {};
        properties = properties || {};

        var derived = function () {
            if (this.init) {
                this.init.apply(this, $.makeArray(arguments));
            }
        };
        linkPrototypes(base, derived);
        $.extend(derived.prototype, methods);

        Object.defineProperties(derived.prototype, properties);

        return derived;
    };

    Apperyio.BaseComponent = $a.createClass(null, {

        init: function (options) {
            this.options = options;
            this.__element = $('[dsid="' + options.id + '"]:eq(0)', options.context);

            this.attachToDOM();
        },

        __registerComponent: function () {
            this.__componentRegistered = true;
            $a.__registerComponent(this.id, this);
            return this;
        },

        destroy: function () {
            if (this.__componentRegistered) {
                $a.__unregisterComponent(this.id);
            }
            this.__element = $();
        },

        __getUnknownAttribute: function (name) {
            return this.element().attr(name);
        },

        __getAttribute: function (name) {
            if (this.hasOwnProperty(name)) {
                return this[name];
            } else {
                return this.__getUnknownAttribute(name);
            }
        },

        __setUnknownAttribute: function (name, value) {
            this.element().attr(name, value);
        },

        __setAttribute: function (name, value) {
            if (this.hasOwnProperty(name)) {
                this[name] = value;
            } else {
                this.__setUnknownAttribute(name, value);
            }
        },

        getId: function () {
            return this.id;
        },

        element: function () {
            return this.__element;
        },

        attachToDOM: function () {
            this.element().data('Apperyio.component', this);
        },

        attr: function () {
            if (arguments.length == 1) {
                return this.__getAttribute(arguments[0]);
            } else {
                this.__setAttribute(arguments[0], arguments[1]);
                return this;
            }
        }

    }, {
        id: {
            get: function () {
                return this.options.id;
            },
            configurable: false
        }
    });

    var eventHandlerDelegates = ['bind', 'unbind', 'one', 'live', 'die', 'trigger', 'on', 'off'];
    $.each(eventHandlerDelegates, function (idx, methodName) {
        $a.BaseComponent.prototype[methodName] = function () {
            var elts = this.element();
            return elts[methodName].apply(elts, $.makeArray(arguments));
        };
    });

    var commonEvents = ['mouseup', 'mousedown', 'mouseover', 'mouseout', 'mousemove', 'keypress', 'keyup', 'keydown', 'dblclick', 'click'];
    $.each(commonEvents, function (idx, type) {
        $a.BaseComponent.prototype[type] = function () {
            if (arguments.length == 0) {
                return this.trigger(type);
            } else {
                return this.bind.apply(this, $.makeArray(arguments));
            }
        };
    });

    Apperyio.ConsoleLogger = $a.createClass(null, {

        __formatMessage: function (message, params) {
            var params = $.makeArray(arguments);
            params.shift();

            return message.replace(/\{(\d+)\}/g, function (str, p1, offset, s) {
                var num = parseInt(p1, 10);
                return params[num - 1];
            });
        },

        error: function (message, params) {
            if (this.isLevelEnabled($a.Logger.Levels.ERROR)) {
                console.error(this.__formatMessage(message, params));
            }
        },

        warn: function (message, params) {
            if (this.isLevelEnabled($a.Logger.Levels.WARN)) {
                console.warn(this.__formatMessage(message, params));
            }
        },

        info: function (message, params) {
            if (this.isLevelEnabled($a.Logger.Levels.INFO)) {
                console.info(this.__formatMessage(message, params));
            }
        },

        debug: function (message, params) {
            if (this.isLevelEnabled($a.Logger.Levels.DEBUG)) {
                console.log(this.__formatMessage(message, params));
            }
        },

        clear: function () {
            console.clear();
        },

        dir: function (o) {
            console.dir(o);
        },

        setLevel: function (level) {
            this.level = level;
        },

        getLevel: function () {
            return this.level || $a.Logger.Levels.DEBUG;
        },

        isLevelEnabled: function (level) {
            return this.getLevel() <= level;
        }
    });


    Apperyio.DataSource = $a.createClass(null, {

            init: function (service, options) {
                this.service = service;
                this.options = options;
                this.request = {};
                this.response = {};
                this.service.serviceLoaderOptions = options.serviceLoaderOptions;
                this.__requestOptions = $.extend({}, this.requestDefaults, options);
            },

            execute: function (settings) {
                settings = this.__buildInitialRequestSettings(settings);
                settings.beforeSendNoTrigger(settings);
                this.service.process(settings);
            },

            __buildInitialRequestSettings: function (settings) {
                var handlers = {
                    // Success, Error, Complete handlers are triggered by Service
                    "success": $.proxy(this.__successHandler, this),
                    "error": $.proxy(this.__errorHandler, this),
                    "complete": $.proxy(this.__completeHandler, this),
                    "beforeSend": Function(), //  A stub function added for backward compatibility
                    "beforeSendNoTrigger": $.proxy(this.__beforeSendHandler, this)
                }, defaults = {
                    "response": {},
                    "request": {},
                    "datasource": this
                };

                return $.extend(handlers, defaults, this.service.__requestOptions, settings || {});
            },

            __beforeSendHandler: function (settings) {
                var dataSource = this;
                var handlerArguments = arguments;
                if (dataSource.options.onBeforeSend) {
                    dataSource.options.onBeforeSend.apply(dataSource, $.merge([], handlerArguments));
                }

                this.__fillRequestSettingsWithData(settings);

                showSpinner(this.service.serviceLoaderOptions);
            },

            __fillRequestSettingsWithData : function(settings) {
				function buildSettings(settingsInfo, requestInfo) {
					if (requestInfo && settingsInfo) {
						if ((requestInfo instanceof Array) && (settingsInfo instanceof Array)) {
							return _.union(requestInfo,	settingsInfo);
						} else {
							return _.extend({}, requestInfo, settingsInfo);
						}
					} else {
						return requestInfo || settingsInfo || {};
					}
				}
				if (this.service instanceof Apperyio.RestService) {
					settings.headers = _.extend({},	this.request.headers || {},	settings.headers || {});
					settings.parameters = _.extend({},	this.request.parameters || {}, settings.parameters || {});
					if (typeof FormData === "undefined"	|| !(settings.body instanceof FormData)) {
						settings.body = buildSettings(settings.body, this.request.body);
					}
				} else {
					settings.data = buildSettings(settings.data, this.request.data);
				}
			},

            __successHandler: function (data, status, xhr) {
                var argumentsTransport = $.merge([], arguments),
                    resultField = this.service instanceof Apperyio.RestService ? "body" : "data";

                if (_.isString(data) && (this.service.__requestOptions.dataType === "json"
                    || this.service.__requestOptions.dataType === "jsonp"
                    || this.service.__requestOptions.dataType === "")) {
                    this.response[resultField] = argumentsTransport[0] = JSON.parse(data);
                } else if (this.service.__requestOptions.dataType === "xml") {
                    this.response[resultField] = argumentsTransport[0] = $.xml2json(data);
                } else {
                    this.response[resultField] = data;
                }

                if (xhr !== undefined) {
                    var headersRaw = xhr.getAllResponseHeaders();
                    this.response.headers = this.__parseHeadersString(headersRaw);
                }

                this.response.status = status;
                if (this.options.onSuccess) {
                    this.options.onSuccess.apply(this, argumentsTransport);
                }
            },

            __parseHeadersString: function (raw) {
                if (!raw) return {};

                var result = {};
                var tokens = raw.split(/[\r\n]+/);
                for (var i = 0, j = tokens.length; i < j; i++) {
                    var keyValue = tokens[i].split(":", 2);
                    if (keyValue.length > 0) {
                        var key = keyValue[0].trim();
                        var value = keyValue.length > 1 ? keyValue[1].trim() : "";

                        if (/[a-zA-Z0-9-]+/.test(key)) {
                            if (result[key]) {
                                result[key] = result[key] + ", " + value;
                            } else {
                                result[key] = value;
                            }
                        }
                    }
                }

                return result;
            },

            __errorHandler: function (xhr, status) {
                if (this.options.onError) {
                    this.options.onError.apply(this, $.merge([], arguments));
                }
            },

            __completeHandler: function () {
                var dataSource = this;
                var handlerArguments = arguments;
                var actualCompleteHandler = function () {
                    if (dataSource.options.onComplete) {
                        dataSource.options.onComplete.apply(dataSource, $.merge([], handlerArguments));
                    }
                    hideSpinner();
                };
                actualCompleteHandler();
            }
        },
        {}
    );

    Apperyio.GenericService = $a.createClass(null, {

        init: function (requestOptions) {
            this.__requestOptions = $.extend({}, requestOptions);
        },

        process: function (settings) {
            if (this.__requestOptions.echo) {
                settings.success(this.__requestOptions.echo);
            } else {
                console.log('Default implementation is used. Please define your own.');
                settings.success({});
            }
            settings.complete('success');
        }

    });

    Apperyio.RestService = $a.createClass(null, {

        PARAM_PATTERN: /\{([^{\}"':]+?)\}/g,

        requestDefaults: {
            cache: true,
            crossDomain: true,
            timeout: 20000,
            traditional: true
        },

        init: function (requestOptions) {
            if (navigator.userAgent.toLowerCase().indexOf('msie') !== -1) {
                jQuery.support.cors = true;
            }
            this.__requestOptions = $.extend({}, this.requestDefaults, requestOptions);
        },

        process: function (settings) {
            if (this.__requestOptions.echo) {
                settings.success(this.__requestOptions.echo.replace(/(\r\n|\n|\r)/gm, ""));
                settings.complete("success");
            } else {

                this.processSubstitutions(settings);

                if (this.__requestOptions.securityContext) {
                    this.__requestOptions.securityContext.invoke({execute: $.ajax}, settings);
                } else {
                    $.ajax(settings);
                }
            }
        },

        processSubstitutions: function (settings) {
            var s = settings;
            s.ssc_data = {};
            if (this.__requestOptions.securityContext && this.__requestOptions.securityContext.settings) {
                $.extend(s.ssc_data, this.__requestOptions.securityContext.settings);
            }

            s.service_settings_data = {};
            if (this.__requestOptions.serviceSettings) {
                $.extend(s.service_settings_data, this.__requestOptions.serviceSettings);
            }

            s.substitutedQueryParams = [];
            s.substitutedBodyParams = [];


            this.__performParametersSubstitutions(s);
            this.__performBodySubstitutions(s);
            this.__performHeaderParametersSubstitutions(s);
            this.__performURLSubstitutions(s);


            // Clean up temporary fields
            delete s.ssc_data;
            delete s.service_settings_data;

            for (var i = 0; i < s.substitutedQueryParams.length; i++) {
                if (s.substitutedQueryParams[i]) {
                    delete s.parameters[s.substitutedQueryParams[i]];
                }
            }
            delete s.substitutedQueryParams;

            for (var i = 0; i < s.substitutedBodyParams.length; i++) {
                if (s.substitutedBodyParams[i]) {
                    delete s.body[s.substitutedBodyParams[i]];
                }
            }
            delete s.substitutedBodyParams;

            // Handling data field
            if (!/^(?:GET|HEAD|DELETE)$/.test(this.__requestOptions.type.toUpperCase())) {
                // Preparing body
                s.data = _.extend(s.body, s.data);
                delete s.body;

                if (s.contentType) {
                    if (s.contentType.indexOf('json') !== -1) {
                        s.data = JSON.stringify(s.data);
                    } else if (s.contentType.indexOf('xml') !== -1) {
                        s.data = this.dataToXml(s.data);
                    }
                } else {
                    // It's the case when Content-Type is set to "data"

                    // If there are only one key "data" - we are sending it as is
                    if (_.isEqual(Object.keys(s.data), ["data"])) {
                        s.data = s.data.data;
                    }

                    s.processData = false;

                    // Hack for unknown issue from support
                    // I'm not sure but it can be connected with file uploading
                    if (s.data instanceof Object) {
                        if (typeof FormData !== 'undefined') {
                            if (!(s.data instanceof FormData)) {
                                s.processData = true;
                            }
                        } else {
                            s.processData = true;
                        }
                    }
                }
            } else {
                // Merging data field value into parameters
                if (s.data && !$.isEmptyObject(s.data)) {
                    s.parameters = _.extend(s.parameters, s.data);
                    delete s.data;
                }
            }

            // Serializing query parameters and adding it to url
            if (s.parameters && !$.isEmptyObject(s.parameters)) {
                for (var key in s.parameters) {
                    if (_.isObject(s.parameters[key])) {
                        s.parameters[key] = JSON.stringify(s.parameters[key]);
                    }
                }
                s.url = (s.url += (/\?/.test(s.url) ? "&" : "?" ) + $.param(s.parameters));
                delete s.parameters;
            }
        },

        __performParametersSubstitutions: function (settings) {
            var s = settings;
            if (_.isTrueObject(s.parameters)) {
                var obj = s.parameters;
                for (var param in obj) {
                    var value = __convertValueToString(obj[param]);

                    var newParam = param.replace(this.PARAM_PATTERN, __performParametersSubstitution);
                    var newValue = value && value.replace(this.PARAM_PATTERN, __performParametersSubstitution);

                    delete obj[param];
                    obj[newParam] = newValue;
                }
            }

            function __performParametersSubstitution(str, param) {
                return (s.service_settings_data[param] || '{' + param + '}');
            }
            /* "val" could be: null, undefined, String, Number, Boolean, Array, plain Object, native Object.
             * All these types should be converted to String.
             * Exception: "null" and "undefined" should be left unchanged.
             */
            function __convertValueToString(val) {
                if (!_.isString(val)) {
                    if (_.isTrueObject(val)) {
                        return JSON.stringify(val);
                    }
                    if (val !== null && val !== undefined) {
                        return "" + val; //Convert Boolean, Number, Array to String
                    }
                }
                return val;
            }
        },

        __performBodySubstitutions: function (settings) {
            var s = settings,
                that = this;

            if (s.body) {
                s.body = __performBodySubstitutionRecursively(s.body);
            }

            function __performBodySubstitutionRecursively(obj) {
                var param, value, newParam, newValue;

                if (_.isString(obj)) {
                    obj = obj.replace(that.PARAM_PATTERN, __performBodySubstitution);
                } else if (_.isTrueObject(obj)) {
                    for (param in obj) {
                        value = obj[param];

                        newParam = __performBodySubstitutionRecursively(param);
                        newValue = __performBodySubstitutionRecursively(value);

                        delete obj[param];
                        obj[newParam] = newValue;
                    }
                }

                return obj;
            }

            function __performBodySubstitution(str, param) {
                return (s.service_settings_data[param] || '{' + param + '}');
            }
        },

        __performHeaderParametersSubstitutions: function (settings) {
            var s = settings;
            var that = this,
                proxyHeadersNames = ["appery-key", "appery-rest", "appery-proxy-url", "appery-transformation"],
                param,
                value,
                newParam,
                newValue;


            if (!$.isEmptyObject(s.headers)) {
                for (param in s.headers) {
                    // Skip our appery header parameters
                    if (proxyHeadersNames.indexOf(param) !== -1) continue;

                    value = s.headers[param] || value;

                    newParam = param.replace(this.PARAM_PATTERN, __performHeaderParametersSubstitution);
                    newValue = value.replace(this.PARAM_PATTERN, __performHeaderParametersSubstitution);

                    delete s.headers[param];
                    s.headers[newParam] = newValue;
                }
            }

            for (param in s.proxyHeaders) {
                s.headers[param] = s.proxyHeaders[param];
            }

            function __performHeaderParametersSubstitution(str, param) {
                var paramValue;

                if (s.parameters[param]) {
                    paramValue = s.parameters[param];
                    if (s.substitutedQueryParams.indexOf(param) === -1) s.substitutedQueryParams.push(param);
                } else if (s.body[param]) {
                    paramValue = s.body[param];
                    if (s.substitutedBodyParams.indexOf(param) === -1) s.substitutedBodyParams.push(param);
                } else if (s.service_settings_data[param]) {
                    paramValue = s.service_settings_data[param];
                } else {
                    return str;
                }

                return that.__serializeContainer(paramValue, s.contentType);
            }
        },

        __performURLSubstitutions: function (settings) {
            var s = settings;
            var that = this,
                urlBuffer;

            if (s.headers && "appery-proxy-url" in s.headers) {
                urlBuffer = s.headers["appery-proxy-url"];
            } else if (s.url) {
                urlBuffer = s.url;
            }

            if (urlBuffer) {
                var urlPart = urlBuffer.indexOf('?') !== -1 ? urlBuffer.substr(0, urlBuffer.indexOf('?')) : urlBuffer;
                var queryParamsPart = urlBuffer.indexOf('?') !== -1 ? urlBuffer.substr(urlBuffer.indexOf('?'), urlBuffer.length) : undefined;

                urlPart = urlPart.replace(this.PARAM_PATTERN, __performURLSubstitution);
                queryParamsPart = queryParamsPart && queryParamsPart.replace(this.PARAM_PATTERN, __performQueryParamSubstitution);

                urlBuffer = urlPart + (queryParamsPart ? queryParamsPart : "");

                if (s.headers && "appery-proxy-url" in s.headers) {
                    s.headers["appery-proxy-url"] = urlBuffer;
                } else if (s.url) {
                    s.url = urlBuffer;
                }
            }

            function __performURLSubstitution(str, param) {
                var paramValue;

                if (s.parameters[param]) {
                    paramValue = s.parameters[param];
                    if (s.substitutedQueryParams.indexOf(param) === -1) s.substitutedQueryParams.push(param);
                } else if (s.body[param]) {
                    paramValue = s.body[param];
                    if (s.substitutedBodyParams.indexOf(param) === -1) s.substitutedBodyParams.push(param);
                } else if (s.ssc_data[param]) {
                    paramValue = s.ssc_data[param];
                } else if (s.service_settings_data[param]) {
                    paramValue = s.service_settings_data[param];
                } else {
                    return "{" + param + "}";
                }

                return that.__serializeContainer(paramValue, s.contentType);
            }

            function __performQueryParamSubstitution(str, param) {
                var paramValue;

                if (s.parameters[param]) {
                    paramValue = s.parameters[param];
                    if (s.substitutedQueryParams.indexOf(param) === -1) s.substitutedQueryParams.push(param);
                } else if (s.body[param]) {
                    paramValue = s.body[param];
                    if (s.substitutedBodyParams.indexOf(param) === -1) s.substitutedBodyParams.push(param);
                } else if (s.ssc_data[param]) {
                    paramValue = s.ssc_data[param];
                } else if (s.service_settings_data[param]) {
                    paramValue = s.service_settings_data[param];
                } else {
                    return str;
                }

                return encodeURIComponent(that.__serializeContainer(paramValue, s.contentType));
            }
        },

        __serializeContainer: function (data, format) {
            if (_.isArray(data) || _.isTrueObject(data)) {
                try {
                    if (format === "xml") {
                        return this.dataToXml(data);
                    } else {
                        return JSON.stringify(data);
                    }
                } catch (e) {
                    console.error(e.name + ' ' + e.message);
                    return data;
                }
            }
            return data;
        },

        dataToXml: function (data) {
            var result = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
            if (Object.keys(data).length > 1) {
                result = result + "<inputParameters>";
                result += this.objectToXml(data) + "</inputParameters>";
            } else {
                result += this.objectToXml(data);
            }
            return result;
        },

        objectToXml: function (data) {
            var encodedData = "";
            var key;
            for (key in data) {
                if (data.hasOwnProperty(key)) {
                    var value = data[key];
                    if (typeof value !== "string") {
                        value = this.objectToXml(value);
                    }
                    encodedData += "<" + key + ">" + value + "</" + key + ">";
                }
            }
            return encodedData;
        }
    });


    Apperyio.GeolocationService = $a.createClass(null, {
        watchIDSet: [],
        requestDefaults: {
            frequency: 3000
        },

        init: function (requestOptions) {
            this.__requestOptions = $.extend({}, requestOptions);
        },

        process: function (settings) {
            var that = this;
            if (this.__requestOptions.echo) {
                showSpinner();
                settings.success(this.__requestOptions.echo);
                settings.complete('success');
                hideSpinner();
            } else {
                showSpinner();
                var options = settings.data.options;

                // "/^true$/i" is accepting both boolean true and string "true"
                if (options.watchPosition && (/^true$/i).test(options.watchPosition)) {
                    /* Watch Position */
                    if (settings.datasource.watchID && this.watchIDSet.indexOf(settings.datasource.watchID) !== -1) {
                        // This datasource is already watching positions
                        hideSpinner();
                        return;
                    } else {
                        options.frequency = options.frequency || this.requestDefaults.frequency;
                        var watchID = navigator.geolocation.watchPosition(
                            function (position) {
                                settings.success(that.convertPositionObject(position));
                                settings.complete('success');
                                hideSpinner();
                            },
                            function (error) {
                                settings.error(null, error.message, error);
                                settings.complete('error');
                                hideSpinner();
                            },
                            settings.data.options);

                        settings.datasource.watchID = watchID;
                        this.watchIDSet.push(watchID);
                    }
                } else {
                    /* Get Current Position */
                    navigator.geolocation.getCurrentPosition(
                        function (position) {
                            settings.success(that.convertPositionObject(position));
                            settings.complete('success');
                            hideSpinner();
                        },
                        function (error) {
                            settings.error(null, error.message, error);
                            settings.complete('error');
                            hideSpinner();
                        },
                        settings.data.options);
                }
            }
        },

        stop: function (watchID) {
            if (this.watchIDSet.length === 0) return;
            if (watchID !== undefined) {
                navigator.geolocation.clearWatch(watchID);
                delete this.watchIDSet[this.watchIDSet.indexOf(watchID)];
            } else {
                for (var i = 0; i < this.watchIDSet.length; i++) {
                    if (this.watchIDSet[i] !== undefined) {
                        navigator.geolocation.clearWatch(this.watchIDSet[i]);
                    }
                }
                this.watchIDSet = [];
            }
        },

        convertPositionObject: function (position) {
            var positionObj = {"coords": {}};
            if (position) {
                // Mozilla and IE save position property in object's prototype and we can't get them
                // with JSON.stringify later in the code. So we have to copy all of them to the new object.
                positionObj.coords.latitude = position.coords.latitude;
                positionObj.coords.longitude = position.coords.longitude;
                positionObj.coords.altitude = position.coords.altitude;
                positionObj.coords.accuracy = position.coords.accuracy;
                positionObj.coords.altitudeAccuracy = position.coords.altitudeAccuracy;
                positionObj.coords.heading = position.coords.heading;
                positionObj.coords.speed = position.coords.speed;
                positionObj.timestamp = position.timestamp;
                if (position.coords.timestamp) {
                    // Mozilla browser position object
                    positionObj.timestamp = position.coords.timestamp;
                }
                return positionObj;
            } else {
                console.error("Apperyio.GeolocationService.convertPositionObject: Attempt to convert undefined position!");
                return;
            }
        }

    });

    Apperyio.ContactsService = $a.createClass(null, {

        init: function (requestOptions) {
            this.__requestOptions = $.extend({}, requestOptions);
        },

        process: function (settings) {
            if (this.__requestOptions.echo) {
                showSpinner();
                settings.success(this.__requestOptions.echo);
                settings.complete('success');
                hideSpinner();
            } else {
                if (!navigator.contacts) {
                    console.warn("ContactsService can't process request because navigator.contacts is undefined.");
                    hideSpinner();
                    return;
                }

                showSpinner();
                settings.data.options.multiple = Boolean(settings.data.options.multiple);
                navigator.contacts.find(settings.data.params.fields.split(' '),
                    function (contacts) {
                        settings.success(contacts);
                        settings.complete('success');
                        hideSpinner();
                    },
                    function (error) {
                        settings.error(null, error.code, error);
                        settings.complete('error');
                        hideSpinner();
                    },
                    settings.data.options);
            }
        }
    });


    Apperyio.BarCodeService = $a.createClass(null, {

        init: function (requestOptions) {
            this.__requestOptions = $.extend({}, requestOptions);
        },

        process: function (settings) {
            if (this.__requestOptions.echo) {
                settings.success(this.__requestOptions.echo);
                settings.complete('success');
            } else {
                if (!window.cordova == undefined || window.cordova.plugins == undefined || window.cordova.plugins.barcodeScanner == undefined) {
                    console.warn("BarCodeService can't process request because BarcodeScanner is undefined.");
                    hideSpinner();
                    return;
                }

                cordova.plugins.barcodeScanner.scan(function (result) {
                        settings.success(result);
                        settings.complete('success');
                    }, function (error) {
                        settings.error(null, null, error);
                        settings.complete('error');
                    }
                );
            }
        }

    });

    Apperyio.CameraService = $a.createClass(null, {

        init: function () {
            this.__requestOptions = {};
        },

        /*
         * Note: "ENCODING_TYPES", "DESTINATION_TYPES", "SOURCE_TYPES" are constants
         * But it's impossible to move this object outside of function scope
         * because class Camera is not defined when appery.js is parsed.
         */
        getEncodingType: function (strType) {
            var ENCODING_TYPES = {
                "JPEG": Camera.EncodingType.JPEG,
                "PNG": Camera.EncodingType.PNG
            };

            return (strType in ENCODING_TYPES) ? ENCODING_TYPES[strType] : Camera.EncodingType.JPEG;
        },

        getDestinationType: function (strType) {
            var DESTINATION_TYPES = {
                "Data URL": Camera.DestinationType.DATA_URL,
                "File URI": Camera.DestinationType.FILE_URI,
                "Native URI": Camera.DestinationType.NATIVE_URI
            };

            return (strType in DESTINATION_TYPES) ? DESTINATION_TYPES[strType] : Camera.DestinationType.DATA_URL;
        },

        getSourceType: function (strType) {
            var SOURCE_TYPES = {
                "Photolibrary": Camera.PictureSourceType.PHOTOLIBRARY,
                "Camera": Camera.PictureSourceType.CAMERA,
                "Saved photo album": Camera.PictureSourceType.SAVEDPHOTOALBUM
            };

            return (strType in SOURCE_TYPES) ? SOURCE_TYPES[strType] : Camera.PictureSourceType.CAMERA;
        },

        // This method parses options received by camera service.
        // Options are converted from string to a proper type.
        getCameraOptions: function (settings) {
            var d = settings.data || {};
            return {
                "quality": +d.quality || 80,
                "encodingType": this.getEncodingType(d.encodingType),
                "destinationType": this.getDestinationType(d.destinationType),
                "sourceType": this.getSourceType(d.sourceType),
                "allowEdit": (d.allowedit === "true"),
                "correctOrientation": true,
                "targetWidth": +d.targetWidth || 1024,
                "targetHeight": +d.targetHeight || 768
            };
        },

        process: function (settings) {
            if (settings.echo) {
                settings.success(settings.echo);
                settings.complete("success");
            } else {
                if (!navigator.camera) {
                    console.warn("CameraService can't process request because navigator.camera is undefined.");
                    hideSpinner();
                    return;
                }

                var cameraOptions = this.getCameraOptions(settings);
                navigator.camera.getPicture(
                    function (imageData) {
                        if (cameraOptions.destinationType === Camera.DestinationType.DATA_URL) {
                            settings.success({ 'imageDataBase64': "data:image/jpeg;base64," + imageData });
                        } else {
                            settings.success({ 'imageURI': imageData });
                        }
                        settings.complete("success");
                    },
                    function (errorMessage) {
                        settings.error(null, errorMessage);
                        settings.complete("error");
                    },
                    cameraOptions);
            }
        }

    });

    Apperyio.ApperyWrapper = $a.TiggziWrapper = $a.TiggrWrapper =
        $a.createClass(null, {

            init: function (componentId, options) {
                this.__element = $("#" + Apperyio.CurrentScreen).find('[dsid="' + componentId + '"]:eq(0)');
                this.__element.options = options;
            },
            setProperty: function (name, value) {
                if (this.__element.hasOwnProperty(name)) {
                    this.__element[name] = value;
                    return;
                }
                if (this.__element.hasOwnProperty("setProperty")) {
                    this.setProperty(name, value);
                    return;
                }
                this.__element.attr(name, value);
            },
            refresh: function () {
                if (this.__element.hasOwnProperty("refresh")) {
                    this.__element.refresh();
                }
            }
        });

    Apperyio.ApperyMapComponent = $a.TiggziMapComponent = $a.TiggrMapComponent =
        $a.createClass($a.ApperyWrapper, {

            init: function (componentId, options) {
                try {
                    this.geocoder = new google.maps.Geocoder();
                } catch (e) {
                    return;
                }
                this.constructor.$super.init(componentId, options);
                this.isInitialized = false;
                this.options = options;
                this.options.mapElement = this.constructor.$super.__element;
                this.__element = this;
                this.specifiedLocMarker = null;
                this.delayOptions = null;
                this.DOM_ELEMENT_ATTRIBUTES = ['id'];
                this.supportedMarkerEvents = ["animation_changed",
                    "click",
                    "clickable_changed",
                    "cursor_changed",
                    "dblclick",
                    "drag",
                    "dragend",
                    "draggable_changed",
                    "dragstart",
                    "flat_changed",
                    "icon_changed",
                    "mousedown",
                    "mouseout",
                    "mouseover",
                    "mouseup",
                    "position_changed",
                    "rightclick",
                    "shadow_changed",
                    "shape_changed",
                    "title_changed",
                    "visible_changed",
                    "zindex_changed"];

                this.mapDomElementEvents = {
                    "blur": true,
                    "focus": true,
                    "keydown": true,
                    "keypress": true,
                    "keyup": true,
                    "swipe": true,
                    "swipeleft": true,
                    "swiperight": true,
                    "tap": true,
                    "taphold": true};

                this.mapAPIEvents = {"bounds_changed": true,
                    "center_changed": true,
                    "click": true,
                    "dblclick": true,
                    "drag": true,
                    "dragend": true,
                    "dragstart": true,
                    "heading_changed": true,
                    "idle": true,
                    "maptypeid_changed": true,
                    "mousemove": true,
                    "mouseout": true,
                    "mouseover": true,
                    "projection_changed": true,
                    "resize": true,
                    "rightclick": true,
                    "tilesloaded": true,
                    "tilt_changed": true,
                    "zoom_changed": true};
                this.renderMap();
            },
            renderMap: function () {
                var _that = this;
                if (this.options.address != "") {
                    // Evaluate center coordinates from address
                    this.geocoder.geocode({ 'address': this.options.address}, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            _that.options.latitude = results[0].geometry.location.lat();
                            _that.options.longitude = results[0].geometry.location.lng();
                        } else if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
                            console.error("Can't find location with address : '" + _that.options.address + "'");
                        } else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
                            setTimeout(function () {
                                _that.renderMap();
                            }, 200);
                            return;
                        } else {
                            console.error("Geocode was not successful for the following reason: " + status);
                        }
                        _that.initializeMapComponent();
                    });
                    return;
                }
                this.initializeMapComponent();
            },
            initializeMapComponent: function () {
                this.isInitialized = false;
                var _that = this,
                    mapCenter = new google.maps.LatLng(this.options.latitude, this.options.longitude);
                this.options.mapElement.gmap({
                    'center': mapCenter,
                    'zoom': this.options.zoom
                }).bind('init', function (evt, map) {
                    _that.gmap = map;
                    _that.isInitialized = true;
                    //_that.bindListeners.call(_that);

                    if (_that.delayOptions != null) {
                        $.extend(_that.options, _that.delayOptions);
                        _that.delayOptions = null;
                    } 
                    _that.refresh();
                });
            },
            renderSpecifiedLocationMarker: function () {
                //Setting specified location marker if enabled
                if (this.isInitialized) {
                    if (this.options.showLocationMarker) {
                        if (typeof(this.options.showLocationMarker) == "string") {
                            switch (this.options.showLocationMarker.toLowerCase()) {
                                case "true":
                                case "yes":
                                case "1":
                                    this.options.showLocationMarker = true;
                                    break;
                                default:
                                    this.options.showLocationMarker = false;
                            }
                        }
                        if (this.options.showLocationMarker) {
                            var specifiedLoc = new google.maps.LatLng(this.options.latitude, this.options.longitude);
                            this.specifiedLocMarker = new google.maps.Marker({
                                'position': specifiedLoc,
                                'title': "Specified location"
                            });
                            this.options.mapElement.gmap('addMarker', this.specifiedLocMarker);
                        }
                    }
                } else {
                    console.log("Is not initialized yet, please try again later");
                }
            },
            renderMarkers: function () {
                if (this.isInitialized) {
                    var _that = this;
                    this.options.mapElement.gmap("clear", "markers");
                    this.renderSpecifiedLocationMarker();

                    $("#" + Apperyio.CurrentScreen).find("[dsid='" + this.options.markerSourceName + "'] li").each(function (index) {
                        var isRenderedmarker = $(this).attr("rendered") ? $(this).attr("rendered") : "true";
                        var isTemplate = $(this).attr("_tmpl") ? $(this).attr("_tmpl") : "false";

                        if (isRenderedmarker == "true" && isTemplate != "true") {
                            var markerDomElemId = $(this).attr("id");
                            var lat = $(this).attr("latitude") ? $(this).attr("latitude") : $(this).find("[req]").attr("latitude");
                            var longt = $(this).attr("longitude") ? $(this).attr("longitude") : $(this).find("[req]").attr("longitude");
                            var title = $(this).attr("text") ? $(this).attr("text") : $(this).find("[req]").attr("text");
                            var address = $(this).attr("address") ? $(this).attr("address") : $(this).find("[req]").attr("address");
                            var showInfoWindow = $(this).attr("show_info") ? $(this).attr("show_info") : $(this).find("[req]").attr("show_info");
                            var markerName = $(this).attr("name");
                            var marker = new google.maps.Marker({
                                map: _that.gmap,
                                title: title
                            });
                            if (showInfoWindow == "true") {
                                var infoWindowContent = "";
                                // Rendering info window
                                var tagName = $(this).get(0).tagName;
                                if ((tagName == "LI") || (tagName == "OI")) {
                                    //$(this).wrapInner("<div style='display:block'/>");
                                    infoWindowContent = $(this).html();
                                } else {
                                    if ($(this).parent().children().size() > 1) {
                                        $(this).wrap("<div/>");
                                    }
                                    $(this).css('display', 'block');
                                    infoWindowContent = $(this).parent().html();
                                    $(this).css('display', 'none');
                                }

                                var iw = new google.maps.InfoWindow({
                                    content: infoWindowContent
                                });
                                google.maps.event.addListener(marker, "click", function (e) {
                                    iw.open(_that.gmap, this);

                                });
                                iw.apperyMarkerName = markerName;
                                /*
                                 google.maps.event.addListener(iw, 'domready', function () {
                                 $("[name=" + iw.apperyMarkerName + "_infoWindowContent]").parent().parent().css("overflow", "");
                                 $("[name=" + iw.apperyMarkerName + "_infoWindowContent]").parent().css("overflow", "");
                                 });
                                 */
                            }
                            $.each(_that.supportedMarkerEvents, function (index, event) {
                                google.maps.event.addListener(marker, event, function () {
                                    $("#" + Apperyio.CurrentScreen).find("#" + markerDomElemId).trigger(event, arguments);
                                });
                            });
                            //if marker address specified then geocode address
                            if (address != "" && address != undefined) {
                                _that.createMarkerFromAddress(_that, address, marker);
                            } else if (lat != "" && longt != "") {
                                var markerPosition = new google.maps.LatLng(lat, longt);
                                marker.setPosition(markerPosition);
                                _that.options.mapElement.gmap('addMarker', marker);
                            }

                        }
                    });
                } else {
                    console.log("Is not initialized yet, please try again later");
                }
            },

            createMarkerFromAddress: function (context, address, marker) {
                var _that = context;
                _that.geocoder.geocode({ 'address': address}, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var lat = results[0].geometry.location.lat();
                        var longt = results[0].geometry.location.lng();
                        var markerPosition = new google.maps.LatLng(lat, longt);
                        marker.setPosition(markerPosition);
                        _that.options.mapElement.gmap('addMarker', marker);
                    } else if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
                        console.error("Can't find location with address : '" + _that.options.address + "'");
                    } else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
                        setTimeout(function () {
                            _that.createMarkerFromAddress(_that, address, marker);
                        }, 200);
                        return;
                    } else {
                        console.error("Geocode was not successful for the following reason: " + status);
                    }
                });
            },

            setProperty: function (name, value) {
                if (this.isInitialized) {
                    if (this.gmap.hasOwnProperty(name)) {
                        if (name == "zoom") {
                            try {
                                value = parseInt(value);
                            } catch (e) {
                                return;
                            }
                        }
                        this.gmap.set(name, value);
                    } else {
                        if (this.options.hasOwnProperty(name)) {
                            this.options[name] = value;
                        } else if (name == "visible") {
                            value = String(value);
                            var el = $(this.options.mapElement);
                            if (value === "true" || value === "visible") {
                                $(this.options.mapElement).css("display", "block");
                            } else if (value === "false" || value === "hidden") {
                                $(this.options.mapElement).css("display", "none");
                            }
                        }
                    }
                } else {
                    if (this.options.hasOwnProperty(name)) {
                        if (this.delayOptions == null) {
                            this.delayOptions = {};
                        }
                        this.delayOptions[name] = value;
                    } else if (name == "visible") {
                        value = String(value);
                        var el = $(this.options.mapElement);
                        if (value === "true" || value === "visible") {
                            $(this.options.mapElement).css("display", "block");
                        } else if (value === "false" || value === "hidden") {
                            $(this.options.mapElement).css("display", "none");
                        }
                    }
                }
            },


            __setAttribute: function (name, value) {
                this.setProperty(name, value);
            },

            setAttr: function (name, value) {
                if (jQuery.inArray(name, this.DOM_ELEMENT_ATTRIBUTES) > -1) {
                    this.setDomElementAttr(name, value);
                } else {
                    this.setProperty(name, value);
                }
            },


            attr: function (name, value) {
                if (value === undefined) {
                    return this.getAttr(name);
                } else {
                    if (jQuery.inArray(name, this.DOM_ELEMENT_ATTRIBUTES) > -1) {
                        this.setDomElementAttr(name, value);
                    } else {
                        this.setProperty(name, value);
                    }
                }
            },

            setDomElementAttr: function (name, value) {
                this.options.mapElement.attr(name, value);
            },

            getAttr: function (attrName) {
                return this.options[attrName];
            },

            addAPIEventListener: function (map, event, handler) {
                google.maps.event.addListener(map, event, handler);
            },

            addDOMEventListener: function (mapContainer, event, handler) {
                google.maps.event.addDomListener(mapContainer, event, handler);
            },

            bindListeners: function () {
                console.log("Registering events");
                var _that = this;
                $.each(this.mapEventHanlers, function (event, handler) {
                    if (_that.mapAPIEvents[event] != undefined && _that.mapAPIEvents[event]) {
                        console.log("Registering API event : " + event);
                        _that.addAPIEventListener(_that.gmap, event, handler);
                    } else if (_that.mapDomElementEvents[event] != undefined && _that.mapDomElementEvents[event]) {
                        console.log("Registering DOM event : " + event);
                        _that.addDOMEventListener(_that.options.mapElement, event, handler);
                    }
                });
            },

            addListener: function (events) {
                this.mapEventHanlers = events;
                if (this.isInitialized) {
                    this.bindListeners.call(this);
                }
            },

            refresh: function () {
                if (this.isInitialized) {
                    var _that = this;
                    if (this.options.address != "") {
                        this.geocoder.geocode({ 'address': this.options.address}, function (results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                _that.options.latitude = results[0].geometry.location.lat();
                                _that.options.longitude = results[0].geometry.location.lng();
                                _that.gmap.set("center", new google.maps.LatLng(_that.options.latitude, _that.options.longitude));
                                _that.renderMarkers();
                                _that.options.mapElement.gmap('refresh');
                            } else {
                                console.log("Geocode was not successful for the following reason: " + status);
                            }
                        });
                    } else {
                        this.gmap.set("center", new google.maps.LatLng(this.options.latitude, this.options.longitude));
                        //refresh markers
                        this.renderMarkers();
                        this.options.mapElement.gmap('refresh');
                    }
                } else {
                    console.log("Cannot refresh, map is not initialized!");
                }
            },

            get: function (index) {
                if (index != undefined) {
                    return this.options.mapElement.get(index);
                }
            },

            show: function () {
                this.options.mapElement.show();
            },

            hide: function () {
                this.options.mapElement.hide();
            },

            toggle: function () {
                this.options.mapElement.toggle();
            }
        });

    Apperyio.ApperyMobileAudioComponent = $a.TiggziMobileAudioComponent = $a.TiggrMobileAudioComponent =
        $a.createClass($a.ApperyWrapper, {

            init: function (componentId, options) {
                this.audio_selector = "#" + componentId;
                this.autoplay = $(this.audio_selector).attr("autoplay") != undefined ? true : false;
                this.audioPath = $(this.audio_selector).find("source:first").attr("src");
                this.state = "stopped";

                if (this.isLocalAudio() && this.isAndroidPlatform()) {
                    console.log("this.isLocalAudio(): " + this.isLocalAudio() + " this.isAndroidPlatform(): " + this.isAndroidPlatform());
                    var self = this;
                    document.addEventListener("deviceready",
                        function () {
                            self.initializeNativePlayer();
                        }, false);
                }
            },

            isLocalAudio: function () {
                return !this.audioPath.indexOf("http") == 0;
            },

            isAndroidPlatform: function () {
                return Apperyio.getTargetPlatform() == "A";
            },

            initializeNativePlayer: function () {
                console.log("initializeNativePlayer with: " + this.audioPath);
                var androidLocalAssetsPath = "/android_asset/www/";
                var audioPath = androidLocalAssetsPath + this.audioPath;
                this.native_media = new Media(audioPath,
                    function () {
                        console.log("playAudio():Audio Success");
                    },
                    function (err) {
                        console.error("playAudio():Audio Error: " + err);
                    }
                );

                console.log("autoplay: " + this.autoplay);
                if (this.autoplay) {
                    this.native_media.play();
                    this.state = "playing";
                }
                this.bindUIEvents();
            },

            bindUIEvents: function () {
                console.log("Bind UI events");
                var self = this;
                $(this.audio_selector).unbind("tap").bind("tap",
                    function () {
                        self.onPlayButtonClick();
                    }
                );

            },

            onPlayButtonClick: function () {
                if (this.native_media != undefined) {
                    if (this.state == "stopped") {
                        this.native_media.play();
                        this.state = "playing";
                    } else if (this.state == "playing") {
                        this.native_media.stop();
                        this.state = "stopped";
                    }
                } else {
                    console.error("Phonegap Media player not ready!");
                }
            }
        });

    Apperyio.ApperyMobileCarouselComponent = $a.TiggziMobileCarouselComponent = $a.TiggrMobileCarouselComponent =
        $a.createClass($a.ApperyWrapper, {

            init: function (componentId, options) {
                //this.constructor.$super.init(componentId,options);
                this.carouselOptions = options;
                this.carouselRoot = $('#' + componentId);
                this.carouselRootId = this.carouselRoot.attr("id");
                this.__element = this;
                this.DOM_ELEMENT_ATTRIBUTES = ['visible', 'id'];
                this.initializeCarousel();
            },

            initializeCarousel: function () {
                var _that = this,
                    currentPage = $("#" + Apperyio.CurrentScreen),
                    initCarouselWidget = function () {
                        if (_that.carouselOptions != undefined) {
                            _that.carouselRoot.carousel(_that.carouselOptions);
                        } else {
                            _that.carouselRoot.carousel();
                        }
                    };

                if (currentPage[0] == $("body").pagecontainer("getActivePage")[0]) {
                    initCarouselWidget();
                } else if (currentPage.parent()[0].tagName === "DIV") {
                    currentPage.bind("tabletpagecontainershow", initCarouselWidget);
                } else {
                    currentPage.parent().bind("pagecontainershow", initCarouselWidget);
                }
            },

            setProperty: function (name, value) {
                if (name != undefined) {
                    if (this.carouselOptions.hasOwnProperty(name)) {
                        this.carouselOptions[name] = value;
                        this.carouselRoot.carousel(this.carouselOptions);
                    }
                }
            },

            __setAttribute: function (name, value) {
                this.setProperty(name, value);
            },

            setAttr: function (name, value) {
                if (jQuery.inArray(name, this.DOM_ELEMENT_ATTRIBUTES) > -1) {
                    this.setDomElementAttr(name, value);
                } else {
                    this.setProperty(name, value);
                }
            },

            attr: function (name, value) {
                if (value == undefined) {
                    return this.getAttr(name);
                } else {
                    if (jQuery.inArray(name, this.DOM_ELEMENT_ATTRIBUTES) > -1) {
                        this.setDomElementAttr(name, value);
                    } else {
                        this.setProperty(name, value);
                    }
                }
            },

            setDomElementAttr: function (name, value) {
                if (name == "visible") {
                    value = String(value);
                    var el = $(this.carouselRoot)
                    if (value == "true" || value == "visible") {
                        el.css("display", "block");
                    } else if (value == "false" || value == "hidden") {
                        el.css("display", "none");
                    }
                    this.refresh();
                } else {
                    this.carouselRoot.attr(name, value);
                }
            },

            getAttr: function (attrName) {
                return this.carouselOptions[attrName];
            },


            getOptions: function () {
                return this.carouselOptions;
            },

            refresh: function () {
                console.log("carousel refresh");
                if (this.carouselRoot != undefined) {
                    this.carouselRoot.carousel("refresh");
                }
            },

            show: function () {
                this.carouselRoot.show();
            },

            hide: function () {
                this.carouselRoot.hide();
            },

            toggle: function () {
                this.carouselRoot.toggle();
            }
        });

    Apperyio.ApperyMobileDatePickerComponent = $a.TiggziMobileDatePickerComponent = $a.TiggrMobileDatePickerComponent =
        $a.createClass($a.ApperyWrapper, {

            init: function (componentId, options) {
                this.datepicker_selector = "#" + componentId;
                this.datapickerRoot = $(this.datepicker_selector);
                this.datepicker_openButtonSelector = this.datepicker_selector + " .datepickeropenbutton";
                this.datepicker_calendarConteinerSelector = this.datepicker_selector + " .datePickerControls";
                this.datepicker_inputSelector = this.datepicker_selector + " input";
                this.datepicker_controlsContainerSelector = this.datepicker_selector + " .datePickerControls";
                this.datepicker_existDatePickerSelector = this.datepicker_selector + " .hasDatepicker";
                this.datepicker_dataPickerOptions = options;
                this.calendarscrollcontainerselector = this.datepicker_selector + " .calendarscroll";
                this.DOM_ELEMENT_ATTRIBUTES = ['id'];
                this.__element = this;
                this.initializeDataPicker();
            },

            initializeDataPicker: function () {
                // Correct Datepicker width
                var _that = this;

                if (this.datepicker_dataPickerOptions.defaultDate != undefined) {
                    this.datepicker_dataPickerOptions.defaultDate = $.datepicker.formatDate(this.datepicker_dataPickerOptions.dateFormat, new Date(this.datepicker_dataPickerOptions.defaultDate));
                    // Setting formatted defaultDate to input
                    $(this.datepicker_inputSelector).val(this.datepicker_dataPickerOptions.defaultDate);
                } else {
                    this.datepicker_dataPickerOptions.defaultDate = $.datepicker.formatDate(this.datepicker_dataPickerOptions.dateFormat, new Date());
                }
                // Register input change action
                $(this.datepicker_inputSelector).change(
                    function () {
                        _that.setProperty("defaultDateValue", $(this).val());
                    });

                // Register open calendar action
                $(document).off("click", this.datepicker_openButtonSelector).on("click", this.datepicker_openButtonSelector, function () {
                    _that.datepicker_dataPickerOptions.onSelect = function (dateText, inst) {
                        $(_that.datepicker_inputSelector).trigger("change");
                        /* see ETST-8518 */
                        _that.setProperty("defaultDateValue", dateText);
                        $(this).datepicker("destroy");
                        $(_that.calendarscrollcontainerselector).remove();

                    }
                    _that.datepicker_dataPickerOptions.altField = _that.datepicker_inputSelector;
                    // Creates datePicker
                    if ($(_that.datepicker_existDatePickerSelector + ":visible").size() == 0) {
                        if ($(_that.datepicker_existDatePickerSelector).size() > 0) {
                            $(_that.datepicker_existDatePickerSelector).datepicker("destroy");
                            $(_that.calendarscrollcontainerselector).remove();
                        }
                        if (_that.datepicker_dataPickerOptions.defaultDate == undefined || _that.datepicker_dataPickerOptions.defaultDate == "") {
                            _that.datepicker_dataPickerOptions.defaultDate = $.datepicker.formatDate(_that.datepicker_dataPickerOptions.dateFormat, new Date());
                        }
                        //save control panel width
                        var controlsContainerWidth = $(_that.datepicker_controlsContainerSelector).width();
                        //restore control panel width
                        $(_that.datepicker_controlsContainerSelector).width(controlsContainerWidth);
                        _that.datepicker_dataPickerOptions.dataThemeSwatch = _that.datapickerRoot.attr("data-theme");
                        $(_that.datepicker_calendarConteinerSelector).after($("<div />").datepicker(_that.datepicker_dataPickerOptions));
                        var datepicker_widthDiff = $(_that.datepicker_existDatePickerSelector + " .ui-datepicker-calendar").width() - $(_that.datepicker_existDatePickerSelector + " .ui-datepicker-header").width();
                        if (datepicker_widthDiff > 3) {
                            $(_.datepicker_existDatePickerSelector).width($("[data-role='content']").width());
                            var wrappedScrollComponent = '<div class="calendarscroll" style="overflow-x:scroll;width:' + $(_that.datepicker_selector).css("width") + '" />';
                            $(_that.datepicker_existDatePickerSelector).wrap(wrappedScrollComponent);
                        }
                    } else {
                        $(_that.datepicker_existDatePickerSelector).datepicker("destroy");
                        $(_that.calendarscrollcontainerselector).remove();
                    }
                });
                //ETST-14489
                $(window).resize(function () {
                    $(_that.datepicker_controlsContainerSelector).width("auto");
                });
            },

            setProperty: function (name, value) {
                if (name === "dateFormat") {
                    // Changing datepicker dateFormat
                    try {
                        var dtObject = $.datepicker.parseDate(this.datepicker_dataPickerOptions.dateFormat, this.datepicker_dataPickerOptions.defaultDate);
                        this.datepicker_dataPickerOptions.dateFormat = value;
                        var dateFormattedValue = $.datepicker.formatDate(this.datepicker_dataPickerOptions.dateFormat, dtObject);
                        this.datepicker_dataPickerOptions.defaultDate = dateFormattedValue;
                        $(this.datepicker_inputSelector).val(dateFormattedValue);
                    } catch (e) {
                        console.log("Error: Incorrect date format");
                        return;
                    }
                } else if (name == "defaultDateValue") {
                    // Setting new date
                    try {
                        $.datepicker.parseDate(this.datepicker_dataPickerOptions.dateFormat, value);
                        this.datepicker_dataPickerOptions.defaultDate = value;
                        $(this.datepicker_inputSelector).val(value);
                    } catch (e) {
                        console.log("Error: Input date must be in'" + this.datepicker_dataPickerOptions.dateFormat + "' format");
                        return;
                    }

                } else if (name == "visible") {
                    value = String(value);
                    var el = $(this.datepicker_selector)
                    if (value == "true" || value == "visible") {
                        el.css("display", "block");
                    } else if (value == "false" || value == "hidden") {
                        el.css("display", "none");
                    }
                }

            },
            __setAttribute: function (name, value) {
                this.setProperty(name, value);
            },


            setAttr: function (name, value) {
                if (jQuery.inArray(name, this.DOM_ELEMENT_ATTRIBUTES) > -1) {
                    this.setDomElementAttr(name, value);
                } else {
                    this.setProperty(name, value);
                }
            },


            attr: function (name, value) {
                if (value == undefined) {
                    return this.getAttr(name);
                } else {
                    if (jQuery.inArray(name, this.DOM_ELEMENT_ATTRIBUTES) > -1) {
                        this.setDomElementAttr(name, value);
                    } else {
                        this.setProperty(name, value);
                    }
                }
            },

            setDomElementAttr: function (name, value) {
                this.datapickerRoot.attr(name, value);
            },


            getAttr: function (attrName) {
                if (attrName == "defaultDateValue") {
                    return this.datepicker_dataPickerOptions.defaultDate;
                } else {
                    return this.datepicker_dataPickerOptions[attrName];
                }
            },

            getOptions: function () {
                return this.datepicker_dataPickerOptions;
            },

            show: function () {
                this.datapickerRoot.show();
            },

            hide: function () {
                this.datapickerRoot.hide();
            },

            toggle: function () {
                this.datapickerRoot.toggle();
            }
        });

    Apperyio.DefaultSecurityContext = $a.DefaultSecurityContext = $a.createClass(SecurityContext, {
        invoke: function (service, settings) {
            $a.DefaultSecurityContext.$super.invoke.call(this, service, settings);
        }
    });


    $a.screenStorage = new $a.createClass(null, $a.Storage);
    $a.persistentStorage = localStorage;

    try {
        if (window.location.href.search('file') === -1) {
            $a.applicationStorage = sessionStorage;
        }
    } catch (err) {
        console.error(err);
    }

    $a.adjustContentHeightWithPadding = function (page) {
        if (!page) {
            $("[data-role='page']").each(function (ind, elt) {
                Apperyio.adjustContentHeightWithPadding(elt);
            });
            return;
        }

        page = $(page);

        // It's OK with dialogue, we don't need extra sizing
        if (page.is("[data-dialog='true']")) return;

        var header, footer, content;

        content = page.find(".ui-content:visible:eq(0)");
        if (page.hasClass("detail-content")) {
            // If it's a detail content page, we must consider height of master page header and footer
            header = page.closest(".ui-page:not(.detail-content)").find(".ui-header:visible:eq(0)");
            footer = page.closest(".ui-page:not(.detail-content)").find(".ui-footer:visible:eq(0)");
        } else {
            header = page.find(".ui-header:visible:eq(0)");
            footer = page.find(".ui-footer:visible:eq(0)");
        }

        var hh = header.outerHeight() || 0,
            fh = footer.outerHeight() || 0,
            topPad = content.css("padding-top") ? content.css("padding-top").replace("px", "") : 0,
            bottomPad = content.css("padding-bottom") ? content.css("padding-bottom").replace("px", "") : 0;

        content.css("min-height", window.innerHeight - hh - fh - topPad - bottomPad);

        if (page.hasClass("detail-content")) {
            page.css("min-height", window.innerHeight - hh - fh - topPad - bottomPad);
        } else {
            if ($(window).width() >= 650) {
                $('.scroller').height(window.innerHeight - hh - fh);
            }
        }
    };


    Apperyio.setDetailContent = function (pageUrl) {
        // iPad template only has .content-primary and .content-secondary sections
        if ($("#" + Apperyio.CurrentScreen + " .content-primary").length ||
            $(".ui-page-active .content-primary").length) {
            if (pageUrl.indexOf("#") === 0) {
                var data = $(pageUrl);
                processResponce(data);
            } else {
                if (navigator.userAgent.toLowerCase().indexOf('msie') !== -1) {
                    $.get(pageUrl, {"_": $.now()}, function (data) {
                        processResponce(data);
                    });
                } else {
                    $.get(pageUrl, function (data) {
                        processResponce(data);
                    });
                }
            }
        } else {
            window.location.href = pageUrl;
        }


        function unwrapAndApply(selector, content) {
            var rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
            var rhead = /<head\b[^<]*(?:(?!<\/head>)<[^<]*)*<\/head>/gi;
            var oldContent = [];
            // Create a dummy div to hold the results
            var tmpDiv = jQuery("<div>");
            // Inject the contents of the document in, removing the scripts
            // to avoid any 'Permission Denied' errors in IE
            if (_.isTrueObject(content)) {
                oldContent = jQuery(selector).find("div[data-role='page']");
                if (oldContent.length !== 0) {
                    oldContent.hide();
                    $("body").append(oldContent);
                }
                tmpDiv.append(content);
            } else {
                tmpDiv.append(content.replace(rhead, ""));
            }

            var tmpDivPage = tmpDiv.find("[data-role='page']"),
                tmpDivHeader = tmpDiv.find("div[data-role='header']"),
                tmpDivHeaderCaption = tmpDivHeader.children("h1, h2, h3, h4, h5, h6").text(),
                tmpDivContent = tmpDiv.find("div[data-role='content']"),
                tmpDivFooter = tmpDiv.find("div[data-role='footer']"),
                tmpDivPanels = tmpDiv.find("div[data-role='panel']"),
                tmpDivSliders = tmpDiv.find("input[type='range']"),
                tmpDivSearches = tmpDiv.find("input[type='search']");

            window.primaryContentOnLoad = { id: tmpDivPage.attr("id"), init: false };

            // Removing toolbars
            tmpDivHeader.remove();
            tmpDivFooter.remove();

            // Moving all Detail Content Page panels to main Master Detail page
            var currentMasterDetailPage = $("body > .ui-page");
            tmpDivPanels.each(function () {
                if (currentMasterDetailPage.find("#" + $(this).attr("id")).length == 0) {
                    $(this).clone().appendTo(currentMasterDetailPage).panel();
                }
                $(this).remove();
            });

            jQuery(selector).html(tmpDiv);

            // Workaround for corrupted sliders ETST-8234
            $.each(tmpDivSliders, function () {
                this.type = "number";
                $(this).attr("data-type", "range");
            });

            $.each(tmpDivSearches, function () {
                this.type = "text";
                $(this).attr("data-type", "search");
            });

            if (!tmpDivPage.hasClass('ui-page')) {

                tmpDivPage.addClass('ui-page detail-content');
                tmpDivContent.addClass('ui-content');

                tmpDivPage.enhanceWithin(); // ex trigger("create")
                window.primaryContentOnLoad.init = true;
            }

            // Workaround for empty slider's textbox in IE (ETST-8234)
            tmpDivSliders = tmpDiv.find(".ui-slider");
            $.each(tmpDivSliders, function () {
                var slider = $(this).children("input[type='number']");
                if (slider[0]) {
                    slider.val(slider[0].getAttribute("value")).slider("refresh");
                }
            });

            tmpDiv.find("div[data-role=page]").css('position', 'static');
            tmpDiv.find("div[data-role=page]").show();

            return tmpDivHeaderCaption;
        }


        function processResponce(data) {
            var selector;
            if ($('.ui-page-active .content-primary').length === 1) {
                selector = ".ui-page-active .content-primary";
            } else {
                selector = "#" + Apperyio.CurrentScreen + " .content-primary";
            }
            var pageTitle = unwrapAndApply(selector, data);
            if ($('.ui-scrollview-view:visible').length != 0) {
                if ($('.scroller:visible').data('scrollview') != undefined)
                    $('.scroller:visible').scrollview("scrollTo", 0, 0);
            }
            if (!pageTitle && (typeof data == "string")) {
                pageTitle = data.match(/<title[^>]*>([^<]*)/) && RegExp.$1;
            }
            // Set title
            if (pageTitle) {
                document.title = pageTitle;
                $("div[data-role='page']").children(":jqmData(role='header')").find(".ui-title").text(pageTitle);
            }

            $('.content-primary input, .content-primary textarea').unbind('blur', adjustContentHeightWithPadding);
            $('.content-primary input, .content-primary textarea').bind('blur', adjustContentHeightWithPadding);

            if (window.primaryContentOnLoad) {
                eval(window.primaryContentOnLoad.id + "_js()");
                $("#" + window.primaryContentOnLoad.id).triggerHandler("pagecontainershow");
                if ($("#" + window.primaryContentOnLoad.id).parent()[0].tagName === "DIV") {
                    $("#" + window.primaryContentOnLoad.id).triggerHandler("tabletpagecontainershow");
                }
                window.primaryContentOnLoad = undefined;
            }
        }
    };

    Apperyio.navigateTo = function (outcome, options) {

        for (var i = 0; i < this.AppPages.length; i++) {
            if (this.AppPages[i].name == outcome) {
                // for WP7 only
                prepareExternalPageResourcesIfNeeded(outcome);
                if (options && typeof options == 'object') {
                    $("body").pagecontainer("change", this.AppPages[i].location, options);
                } else {
                    $("body").pagecontainer("change", this.AppPages[i].location);
                }
            }
        }

        function loadjscssfile(filename, filetype) {
            var resourceRef;

            if (filetype === "js") {
                resourceRef = document.createElement('script');
                resourceRef.setAttribute("type", "text/javascript");
                resourceRef.setAttribute("src", filename);
            } else if (filetype === "css") {
                resourceRef = document.createElement("link");
                resourceRef.setAttribute("rel", "stylesheet");
                resourceRef.setAttribute("type", "text/css");
                resourceRef.setAttribute("href", filename);
            }
            if (!_.isUndefined(resourceRef)) {
                document.getElementsByTagName("head")[0].appendChild(resourceRef);
            }
        }

        function loadExternalPageResource(resourceName, resourceType) {
            var resourceSelector = null;
            if (resourceType === "js") {
                resourceSelector = "script[src='" + resourceName + "']";
            } else if (resourceType === "css") {
                resourceSelector = "link[href='" + resourceName + "']";
            }
            var isResourceAlreadyLoaded = $(resourceSelector).size() > 0;
            if (!isResourceAlreadyLoaded) {
                loadjscssfile(resourceName, resourceType);
            }
        }

        function prepareExternalPageResourcesIfNeeded(pageName) {
            var platform;
            if (window.device !== undefined) {
                if (window.device.platform !== undefined) {
                    platform = window.device.platform;
                }
            }
            if (platform === "Win32NT" || platform === "WinCE" || platform === "Android") {
                if (pageName) {
                    var jsResourceName = pageName + ".js";
                    var cssResourceName = pageName + ".css";
                    loadExternalPageResource(jsResourceName, "js");
                    loadExternalPageResource(cssResourceName, "css");
                }
            }
        }
    };

    Apperyio.getImagePath = function (imageName) {
        var result, encodedImageName = this.__URLEncodeSpecial(this.__URLEncodeSpecial(imageName));

        if (Apperyio.env === 'web') {
            if (location.hostname.indexOf("project.") === 0) {
                // old domain model
                result = location.protocol + '//' + location.hostname +
                    (location.port === "" ? "" : (":" + location.port)) + "/views/" +
                    location.pathname.split('\/')[2] + "/image/" + encodedImageName;
            } else {
                // new domain model
                result = location.protocol + '//' + location.hostname +
                    (location.port === "" ? "" : (":" + location.port)) + "/app/views/" +
                    location.pathname.split('\/')[3] + "/image/" + encodedImageName;
            }
        } else {
            result = "../img/" + encodedImageName;
        }

        return result;
    };

    Apperyio.refreshFacadeScreenFormElements = function (screen) {
        var ctx;
        if (screen) {
            if (_.isTrueObject(screen)) {
                ctx = $(screen);
            } else if (_.isString(screen)) {
                ctx = $("#" + screen);
            }
        }

        if (!ctx) {
            ctx = $("body");
        }

        ctx.find("[dsid][data-changed]" +
            ":not([data-role='page'])" +
            ":not([data-role='content'])" +
            ":not([data-role='footer'])" +
            ":not([role='heading'])" +
            ":not([role='main'].ui-content)" +
            ":not([data-role='panel'])" +
            ":not([data-role='popup'])").each(function () {
                var comp = $(this);
                if (comp.is("[data-role='fieldcontain']") &&
                    (comp.find("input[type='checkbox']:first").length > 0 ||
                        comp.find("input[type='radio']:first").length > 0)) {
                    comp.trigger("create");
                    if (comp.children().children()[0].tagName === "DIV" &&
                        comp.children().children().children()[0].tagName === "DIV") {
                        comp.children().children().replaceWith(comp.children().children().children());
                    }
                }
                if (comp.is("[data-role='listview']") &&
                    comp.attr("data-filter") === "true") {
                    comp.parent().trigger("create");
                }
                try {
                    Apperyio.c15r($(this), "refresh");
                    if (comp.is("[data-role='appery_selectmenu']") &&
                        comp.attr("data-native-menu") === "false") {
                        $(".ui-state-disabled[role='option']").each(
                            function () {
                                var disitem = $(this);
                                if (disitem.text().trim() == "") {
                                    if (disitem.hasClass("ui-last-child")
                                        && disitem.prev().length > 0) {
                                        disitem.prev().addClass("ui-last-child");
                                    }
                                    disitem.hide()
                                }
                            }
                        );
                    }
                } catch (e) {
                    console.log("Refresh Exception: " + e.message);
                }
            }
        );
        ctx.find("[dsid][data-changed]").removeAttr("data-changed");
    };

    Apperyio.processSelectMenu = function (screen) {
        var ctx;
        if (screen) {
            if (_.isTrueObject(screen)) {
                ctx = $(screen);
            } else if (_.isString(screen)) {
                ctx = $("#" + screen);
            }
        }
        ctx.find('.ui-select select').each(function () {
            var selectElement = $(this),
                customClass = selectElement.attr('class'),
                apperyDefaultClassName = selectElement.attr('appery-class'),
                button;

            if (customClass !== undefined && customClass.trim() !== "") {
                // get select button depends on menu type
                if (selectElement.attr("data-native-menu") !== undefined &&
                    selectElement.attr("data-native-menu") === "true") {
                    button = $(selectElement).parent();
                    // delete appery component class from select button, if JQM already added it and menu type is 'native menu'
                    if (button.hasClass(apperyDefaultClassName)) {
                        button.removeClass(apperyDefaultClassName);
                    }
                } else {
                    button = $(selectElement).prev();
                }
                var selectMenuCSSClasses = customClass.split(" ");
                for (var i = 0; i < selectMenuCSSClasses.length; i++) {
                    if (selectMenuCSSClasses[i].indexOf(apperyDefaultClassName) === -1 &&
                        selectMenuCSSClasses[i].trim() !== "") {
                        if (!button.hasClass(selectMenuCSSClasses[i])) {
                            button.addClass(selectMenuCSSClasses[i]);
                        }
                    }
                }
            }
        });
    };

    /* This function looks for Google Map components inside "element" and invokes "refresh" method for each of them
     * (ETST-28089) */
    Apperyio.refreshGoogleMapComponents = function (element) {
        if($("[data-role=appery_googlemap]:visible", element).length > 0) { 
            $("[data-role=appery_googlemap]:visible", element).gmap("refresh");
        }
    };

    $.fn.getAttr = function (attrName) {
        if (attrName === "visible")
            return this.is(":visible");
        else if (attrName === "value" && this.attr("data-role") === "fieldcontain") {
            return (function (el) {
                var arr = [],
                    ret = "";
                el.find(":checked").each(function (idx) {
                    arr.push($(this).val());
                });

                if (arr.length === 1) {
                    ret = arr[0];
                } else if (arr.length > 1) {
                    ret = arr;
                }

                return ret;
            })(this);
        } else if (this.children('.ui-checkbox').length) {
            return this.find('input[type=checkbox]').prop(attrName)
        } else if (this.children('.ui-radio').length) {
            return this.find('input[type=radio]').prop(attrName)
        } else {
            return this.prop(attrName).trim();
        }
    };

    $.fn.findElement = function (element) {
        var el;
        if (element.prop("tagName") === 'A'
            && (el = element.parent())
            && (el = el.parent())
            && el.attr('data-role') === "listview") {
            return element.parent();
        } else if (element.prop("tagName") === "SELECT"
            && element.attr('data-role') === 'flipswitch') {
            return element.parent();
        } else if (element.prop("tagName") === 'INPUT'
            && element.hasClass('ui-slider-input')) {
            return element.parent().parent();
        }
        return element;
    };

    $.fn.setAttr = function (attrName, value) {
        function getParentContainer(element) {
            var result = element;
            var tagName = element.prop("tagName");
            if (tagName == "INPUT" || tagName == "SELECT") {
                result = el.parent().parent();
            } else if (tagName == "TEXTAREA") {
                result = el.parent();
            }
            return result;
        };

        var el, checkedRadio;
        if (attrName == "visible") {
            value = String(value);
            el = $.fn.findElement(this);

            if (el.attr("tiggzitype") != undefined && el.attr("tiggzitype") == "marker") {
                el.attr("rendered", value);
            } else {

                el = getParentContainer(el);
                if (this.attr('data-role') === "flipswitch") {
                    el = el.parent();
                }
                if (value == "true" || value == "visible") {
                    if (el.css("display") != "none") {
                        /* no need to show, it's already shown */
                    } else {
                        var display = "block";
                        if (el.attr("data-role") == "button"
                            && el.hasClass("ui-btn-inline")) {
                            display = "inline-block";
                        }
                        el.css("display", display);
                    }
                } else if (value == "false" || value == "hidden") {
                    if (el.css("display") == "none") {
                        /* no need to hide, it's already hidden */
                    } else {
                        el.css("display", "none");
                    }
                }

            }

        } else {
            if (this.children('.ui-checkbox').length) {
                if (attrName === "checked") {
                    this.find('input[type="checkbox"]:first').prop(attrName, value).refresh();
                } else {
                    this.find('input[type="checkbox"]:first').attr(attrName, value);
                }
            } else if (this.children('.ui-radio').length) {
                if (attrName == "checked") {
                    if (value == true) {
                        // Deselected radio button
                        checkedRadio = this.closest(".ui-controlgroup-controls").find("input[type='radio']:checked");
                        checkedRadio.prop("checked", false).refresh();
                    }
                    this.find('input[type="radio"]:first').prop(attrName, value).refresh();
                } else {
                    this.find('input[type="radio"]:first').attr(attrName, value);
                }
            } else if (this.attr('data-role') === 'flipswitch' && attrName == 'value') {
                var val;
                var bool = false;
                if (typeof value != "string") bool = Boolean(value)
                else if (["on", "true"].indexOf(value.toLowerCase()) != -1) bool = true;
                val = bool ? "on" : "off";
                this.val(val);
                this.refresh();
            } else if (this.attr('apperytype') === 'marker') {
                this.attr(attrName, value);
            } else if (this.prop && (this.prop('nodeName') === 'TEXTAREA') && (attrName == "value")) {
                this.text(value);
            } else if (this.prop && (this.prop('nodeName') === 'SELECT') && (attrName == "value")) {
                this.val(value).refresh();
            } else {
                this.attr(attrName, value);
                if (this.attr("reRender") != undefined) {
                    if ($("[name='" + this.attr("reRender") + "']").size() > 0 &&
                        $("[name='" + this.attr("reRender") + "']").attr("apperyclass") == "carousel") {
                        var dataPropName = false;
                        if (attrName == "data-title") {
                            dataPropName = "title";
                        } else if (attrName == "data-image-url") {
                            dataPropName = "image-url";
                        }
                        if (dataPropName) {
                            this.data(dataPropName, value);
                        }
                    }
                }
            }
        }
        return this;
    };

    $.fn.setText = function (str) {
        if (this.length > 0) {
            if (this.children('.ui-radio').length)
                this.find('.ui-btn').text(str)
            else if (this.children('.ui-checkbox').length)
                this.find('.ui-btn').text(str)
            else if (this.hasClass('ui-collapsible-heading'))
                this.find('.ui-collapsible-heading-toggle').text(str)
            else if (this[0].tagName == "OPTION") {
                this.text(str)
            } else if ($(this.parents().get(2)).is('.ui-navbar')) {
                this.text(str)
            } else {
                this.html(String(str));
            }
        }
        return this;
    };

    $.fn.copyCSS = function (source) {
        var dom = $(source).get(0);
        var style;
        var dest = {};
        if (window.getComputedStyle) {
            var camelize = function (a, b) {
                return b.toUpperCase();
            };
            style = window.getComputedStyle(dom, null);
            for (var i = 0, l = style.length; i < l; i++) {
                var prop = style[i];
                var camel = prop.replace(/\-([a-z])/g, camelize);
                var val = style.getPropertyValue(prop);
                dest[camel] = val;
            }
            return this.css(dest);
        }
        if (style = dom.currentStyle) {
            for (var prop in style) {
                dest[prop] = style[prop];
            }
            return this.css(dest);
        }
        if (style = dom.style) {
            for (var prop in style) {
                if (typeof style[prop] !== 'function') {
                    dest[prop] = style[prop];
                }
            }
        }
        return this.css(dest);
    };

}(jQuery));
