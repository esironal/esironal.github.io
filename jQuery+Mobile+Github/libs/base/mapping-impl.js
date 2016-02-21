function __init_mapping() {
    "use strict";

    function processMappingAction(mapping) {
        if (!mapping) return;

        showSpinner();
        try {
            for (var i = 0; i < mapping.directions.length; i++) {
                (new MappingUnit(mapping.directions[i])).process();
            }
            Apperyio.refreshFacadeScreenFormElements(Apperyio.CurrentScreen);
        }
        finally {
            hideSpinner();
        }
    }

    var Transformation = window.__transformation || (function () {
        function Transformation(sourceFunc, targetFunc) {
            this.sourceFunc = sourceFunc;
            this.targetFunc = targetFunc;
        }

        Transformation.prototype.transform = function (value, element) {
            var buf,
                result = value,
                args = [];
            if (element) args[1] = element;

            if (_.isFunction(this.sourceFunc)) {
                args[0] = _.deepClone(result);

                try {
                    buf = this.sourceFunc.apply(this, args);
                } catch (e) {
                    console.error("User transformation function threw an exception. Reason: ", e.message);
                }

                if (!_.isUndefined(buf)) {
                    result = buf;
                    buf = undefined;
                }
            }

            if (_.isFunction(this.targetFunc)) {
                args[0] = _.deepClone(result);

                try {
                    buf = this.targetFunc.apply(this, args);
                } catch (e) {
                    console.error("User transformation function exception. Reason: ", e.message);
                }

                if (!_.isUndefined(buf)) {
                    result = buf;
                    buf = undefined;
                }
            }

            return result;
        };

        return Transformation;
    })();


    // Mapping Entry = Mapping Participant
    var Entry = window.__entry || (function () {
        function Entry(unit, path) {
            this.unit = unit;
            this.path = path;
        }

        Entry.prototype.getValue = function () {
            var value;

            if (this.unit.from_type === "UI") {
                value = UIHandler.get(this.path);
            } else {
                // srcData initialize inside MappingUnit.prototype.beforeProcessMappings
                value = MEP.get(this.path, _.deepClone(this.unit.srcData));
            }

            return value;
        };

        Entry.prototype.setValue = function (val, transformation) {
            if (this.unit.to_type === "UI") {
                UIHandler.set(this.path, val, transformation);
            } else {
                // dstData initialize inside MappingUnit.prototype.beforeProcessMappings
                this.unit.dstData = MEP.merge(this.path, this.unit.dstData, val, transformation);
            }
        };

        return Entry;
    })();


    // Mapping Unit = Mapping Direction
    var MappingUnit = window.__mapping_unit || (function () {
        function MappingUnit(mappingUnit) {
            // Entry "from"
            this.from_name = mappingUnit.from_name;
            this.from_type = mappingUnit.from_type;

            // Entry "to"
            this.to_name = mappingUnit.to_name;
            this.to_type = mappingUnit.to_type;
            this.to_default = mappingUnit.to_default;

            // Mappings between participants
            this.mappings = mappingUnit.mappings;

            // Data buffers
            // will be initialized only with mapping process execution
            this.srcData = null;
            this.dstData = null;
        }

        var DATASOURCE_GROUP = ["SERVICE_REQUEST", "SERVICE_RESPONSE", "SERVICE_ERROR"],
            WEB_STORAGE_GROUP = ["SESSION_STORAGE", "LOCAL_STORAGE", "VARIABLE_STORAGE"];

        MappingUnit.prototype.process = function () {
            this.beforeProcessMappings();
            this.processMappings();
            this.afterProcessMappings();
        };

        MappingUnit.prototype.beforeProcessMappings = function () {
            if (this.from_type === "UI") {
                // UI - *
                if (this.to_type === "UI") {
                    // UI - UI
                    Apperyio.UIHandler.discardGeneratedComponents(this);
                } else {
                    // UI - JSON
                    if (this.to_name && this.to_type) {
                        this.dstData = _.deepClone(this.__loadParticipantData(this.to_name, this.to_type));
                    }
                    if (this.to_default && $.isEmptyObject(this.dstData)) {
                        this.dstData = this.__applyDefaultValues(this.dstData, this.to_default);
                    }
                }
            } else {
                // JSON - *
                if (this.from_name && this.from_type) {
                    this.srcData = _.deepClone(this.__loadParticipantData(this.from_name, this.from_type));
                }
                if (this.to_type === "UI") {
                    // JSON - UI
                    Apperyio.UIHandler.discardGeneratedComponents(this);
                } else {
                    // JSON - JSON
                    if (this.to_name && this.to_type) {
                        this.dstData = _.deepClone(this.__loadParticipantData(this.to_name, this.to_type));
                    }
                    if (this.to_default && $.isEmptyObject(this.dstData)) {
                        this.dstData = this.__applyDefaultValues(this.dstData, this.to_default);
                    }
                }
            }
        };

        MappingUnit.prototype.processMappings = function () {
            for (var i = 0; i < this.mappings.length; i++) {
                var from = new Entry(this, this.mappings[i].source),
                    to = new Entry(this, this.mappings[i].target),
                    transformation = new Transformation(this.mappings[i].source_transformation,
                        this.mappings[i].target_transformation);

                // Source transformation only case
                if (!to.path) {
                    this.srcData = MEP.merge(from.path, this.srcData, MEP.get(from.path, this.srcData), transformation);
                    continue;
                }

                // Target transformation only case
                if (!from.path) {
                    this.dstData = MEP.merge(to.path, this.dstData, MEP.get(to.path, this.dstData), transformation);
                    continue;
                }

                // Check if mapping is malformed (dynamic indices count must match)
                var fromICount = from.path.match(/\[i\]/g);
                fromICount = fromICount ? fromICount.length : 0;
                var toICount = to.path.match(/\[i\]/g);
                toICount = toICount ? toICount.length : 0;

                if (this.from_type !== "UI" && this.to_type !== "UI" && fromICount !== toICount) {
                    console.error("Bad mapping " + from.path + " > " + to.path);
                }

                // Perform data transfer
                to.setValue(from.getValue(), transformation);
            }
        };

        MappingUnit.prototype.afterProcessMappings = function () {
            if (this.from_type === "UI") {
                // UI - *
                if (this.to_type === "UI") {
                    // UI - UI
                    Apperyio.UIHandler.showGeneratedComponents(this);
                    Apperyio.UIHandler.showStaticContainerComponents(this);
                } else {
                    // UI - JSON
                    if (this.to_name && this.to_type) {
                        this.__saveParticipantData(this.to_name, this.to_type, this.dstData);
                    }
                }
            } else {
                // JSON - *
                if (this.to_type === "UI") {
                    // JSON - UI
                    Apperyio.UIHandler.showGeneratedComponents(this);
                    Apperyio.UIHandler.showStaticContainerComponents(this);
                } else {
                    // JSON - JSON
                    if (this.to_name && this.to_type) {
                        this.__saveParticipantData(this.to_name, this.to_type, this.dstData);
                    }
                }
            }
        };

        MappingUnit.prototype.__saveParticipantData = function (name, type, data) {
            if (_.isUndefined(name)) throw new Error("Can't save data by undefined name");
            if (_.isUndefined(type)) throw new Error("Can't save data by undefined type");

            if (DATASOURCE_GROUP.indexOf(type) !== -1) {
                if (!Apperyio.datasources[name]) throw new Error("Datasource '" + name + "' not found");

                if (type === "SERVICE_REQUEST") {
                    Apperyio.datasources[name].request = data;
                } else if (type === "SERVICE_RESPONSE") {
                    Apperyio.datasources[name].response = data;
                } else if (type === "SERVICE_ERROR") {
                    Apperyio.datasources[name].error = data;
                }
            } else if (WEB_STORAGE_GROUP.indexOf(type) !== -1) {
                if (!Apperyio.storage || !Apperyio.storage[name]) throw new Error("Storage '" + name + "' not found");

                Apperyio.storage[name].set(data);
            } else {
                throw new Error("Unsupported data type " + type);
            }
        };

        MappingUnit.prototype.__loadParticipantData = function (name, type) {
            if (_.isUndefined(name)) throw new Error("Can't load data by undefined name");
            if (_.isUndefined(type)) throw new Error("Can't load data by undefined type");

            if (WEB_STORAGE_GROUP.indexOf(type) !== -1) {
                if (!Apperyio.storage || !Apperyio.storage[name]) throw new Error("Storage '" + name + "' not found");

                return Apperyio.storage[name].get();
            } else if (DATASOURCE_GROUP.indexOf(type) !== -1) {
                if (!Apperyio.datasources[name]) throw new Error("Datasource '" + name + "' not found");

                if (type === "SERVICE_REQUEST") {
                    return Apperyio.datasources[name].request;
                } else if (type === "SERVICE_RESPONSE") {
                    return Apperyio.datasources[name].response;
                } else if (type === "SERVICE_ERROR") {
                    return Apperyio.datasources[name].error;
                }
            } else {
                throw new Error("Unsupported data type " + type);
            }
        };

        MappingUnit.prototype.__applyDefaultValues = function (data, defaultValues) {
            if (defaultValues === undefined) return data;
            if (!_.isTrueObject(defaultValues)) throw new Error("Default values argument must be an object");

            var result;

            for (var prop in defaultValues) {
                if (defaultValues.hasOwnProperty(prop)) {
                    result = result || {};

                    if (_.isTrueObject(defaultValues[prop])) {
                        result[prop] = MappingUnit.prototype.__applyDefaultValues(
                                data && _.isTrueObject(data[prop]) ? data[prop] : {}, defaultValues[prop]);
                    } else {
                        result[prop] = data && data[prop] !== undefined ? data[prop] : defaultValues[prop];
                    }
                }
            }

            return result !== undefined ? result : data;
        };

        MappingUnit.prototype.DATASOURCE_GROUP = DATASOURCE_GROUP;
        MappingUnit.prototype.WEB_STORAGE_GROUP = WEB_STORAGE_GROUP;

        return MappingUnit;
    })();

    // MPE stands for Mapping Expression Processor
    var MEP = window.__mep || (function () {
        return {
            get: function (path, data) {
                if (path === undefined) throw new Error("Path is undefined");

                if (path === "$") return data;

                return this._get(this.validateAndPreparePath(path), data);
            },
            _get: function (pathArray, data) {
                if (pathArray.length === 0) return data;
                if (data === undefined || data === null) return undefined;

                var accessor,
                    pathHead = _.head(pathArray),
                    pathTail = _.tail(pathArray),
                    nodeType = this.getPathNodeType(pathHead),
                    arrayLevel = (nodeType === this.NODE_TYPES.INDEX || nodeType === this.NODE_TYPES.ALL),
                    objectLevel = (nodeType === this.NODE_TYPES.PROPERTY),
                    pathDynamic = (nodeType === this.NODE_TYPES.ALL),
                    pathStatic = (nodeType === this.NODE_TYPES.INDEX || nodeType === this.NODE_TYPES.PROPERTY);

                if (_.isArray(data) && objectLevel) throw new Error("Attempt to access Array by property name : " + pathHead);
                if (_.isTrueObject(data) && arrayLevel) throw new Error("Attempt to access Object by index: " + pathHead);

                if (pathDynamic) {
                    for (var j = 0; j < data.length; j++) {
                        if (pathArray[1] !== undefined) {
                            pathArray[0] = j.toString();
                            data[j] = this._get(pathArray, data);
                        }
                    }
                    return data;
                } else if (pathStatic) {
                    if (nodeType === this.NODE_TYPES.INDEX) {
                        accessor = parseInt(pathHead);
                    } else if (nodeType === this.NODE_TYPES.PROPERTY) {
                        accessor = this.getPropName(pathHead);
                    }

                    return this._get(pathTail, data ? data[accessor] : data);
                } else {
                    throw new Error("Unsupported node type " + nodeType);
                }
            },

            merge: function (path, originalData, additionalData, transformation) {
                if (_.isUndefined(transformation)) {
                    transformation = new Transformation();
                }

                if (path === "$") {
                    var buf;

                    if (_.isArray(additionalData)) {
                        buf = [];
                        _.each(additionalData, function (elt, i) {
                            buf[i] = transformation.transform(elt);
                        });
                    } else {
                        buf = transformation.transform(additionalData);
                    }

                    return buf;
                }

                return this._merge(this.validateAndPreparePath(path), originalData, additionalData, transformation);
            },
            _merge: function (pathArray, baseValue, addValue, transformation) {
                var buf;
                if (pathArray.length === 0) {
                    buf = transformation.transform(addValue);
                    return buf;
                }

                var accessor,
                    pathHead = _.head(pathArray),
                    pathTail = _.tail(pathArray),
                    nodeType = this.getPathNodeType(pathHead),
                    arrayLevel = (nodeType === this.NODE_TYPES.INDEX || nodeType === this.NODE_TYPES.ALL),
                    objectLevel = (nodeType === this.NODE_TYPES.PROPERTY),
                    pathDynamic = (nodeType === this.NODE_TYPES.ALL),
                    pathStatic = (nodeType === this.NODE_TYPES.INDEX || nodeType === this.NODE_TYPES.PROPERTY);


                // Initiating result
                var result;
                if (arrayLevel) {
                    result = _.isArray(baseValue) ? baseValue : [];
                } else if (objectLevel) {
                    result = Object.prototype.toString.call(baseValue) === '[object Object]' ? baseValue : {};
                } else {
                    throw new Error("Unsupported node type " + nodeType);
                }

                // Extending result
                if (pathDynamic) {
                    if (!_.isArray(addValue)) {
                        throw new Error(JSON.stringify(addValue) + " expected to be an Array");
                    }

                    var dynamicResult = [];

                    for (var i = 0; i < addValue.length; i++) {
                        buf = this._merge(pathTail, result[i], addValue[i], transformation);

                        if (_isNodeMustBeMerged(pathTail, result[i], buf)) {
                            dynamicResult[i] = _.extend(result[i], buf);
                        } else {
                            dynamicResult[i] = buf;
                        }
                    }

                    return dynamicResult;
                } else if (pathStatic) {
                    if (nodeType === this.NODE_TYPES.INDEX) {
                        accessor = parseInt(pathHead);
                    } else if (nodeType === this.NODE_TYPES.PROPERTY) {
                        accessor = this.getPropName(pathHead);
                    }

                    buf = this._merge(pathTail, result[accessor], addValue, transformation);

                    if (_isNodeMustBeMerged(pathTail, result[accessor], buf)) {
                        _.extend(result[accessor], buf);
                    } else {
                        result[accessor] = buf;
                    }

                    return result;
                } else {
                    throw new Error("Unsupported node type " + nodeType);
                }

                function _isNodeMustBeMerged(path, left, right) {
                    var intermediateNode = path.length !== 0, // not a "leaf" node
                        bothObjects = (_.isTrueObject(left) && _.isTrueObject(right)),
                        bothArrays = (_.isArray(left) && _.isArray(right));

                    return intermediateNode && (bothObjects || bothArrays);
                }
            },
            getPathNodeType: function (token) {
                if (token === "i") {
                    return this.NODE_TYPES.ALL;
                } else if (token.indexOf('\'') <= -1) {
                    return this.NODE_TYPES.INDEX;
                } else {
                    return this.NODE_TYPES.PROPERTY;
                }
            },
            getPropName: function (token) {
                return token.replace(/'/g, '');
            },
            validateAndPreparePath: function (path) {
                if (!MEP.validatePath(path)) throw new Error('Mapping Expression is incorrect');

                var path_array = (path.substring(1, path.length)).split('][');
                path_array[0] = path_array[0].replace('[', '');
                path_array[path_array.length - 1] = path_array[path_array.length - 1].replace(']', '');
                return path_array;
            },
            validatePath: function (path) {
                return (/^\$(\[(i|\d+|'.+')\])*$/).test(path);
            },
            NODE_TYPES: {
                ALL: "all",
                INDEX: "index",
                PROPERTY: "prop"
            }
        };
    })();


    var UIHandler = window.__uihandler || (function () {
        var UIHandler = function () {
        };

        UIHandler.prototype.hideTemplateComponents = function (mapping) {
            for (var i = 0, i_limit = mapping.directions.length; i < i_limit; i++) {
                var direction = mapping.directions[i];
                if (direction.to_type === "UI") {
                    var dynamicContainersIDs = _.chain(direction.mappings)
                            .map(__marshalAllDynamicContainersIds)
                            .flatten()
                            .compact()
                            .uniq()
                            .map(__refineIds)
                            .value(),
                        staticContainersIDs = _.chain(direction.mappings)
                            .map(__marshalAllStaticContainersIds)
                            .flatten()
                            .compact()
                            .uniq()
                            .map(__refineIds)
                            .value(),
                        allIDs = _.union(dynamicContainersIDs, staticContainersIDs);

                    for (var j = 0, j_limit = allIDs.length; j < j_limit; j++) {
                        var component = $("#" + direction.to_name + " [dsid='" + allIDs[j] + "']"),
                            wrapper = $a.c15r(component, "wrapper");
                        wrapper.attr("data-appery-tpl", "true");
                    }
                }
            }
        };

        UIHandler.prototype.discardGeneratedComponents = function (direction) {
            if (direction.to_type === "UI" && _.isArray(direction.mappings)) {
                _.chain(direction.mappings)
                    .map(__marshalTopLevelDynamicContainersIds)
                    .flatten()
                    .compact()
                    .uniq()
                    .map(__refineIds)
                    .each(function (e) {
                        $("#" + direction.to_name + " [dsrefid='" + e + "']").each(function (i, e) {
                            Apperyio.c15r(e, "wrapper").remove();
                        });

                    });
            }
        };

        UIHandler.prototype.showGeneratedComponents = function (direction) {
            if (direction.to_type === "UI" && _.isArray(direction.mappings)) {
                _.chain(direction.mappings)
                    .map(__marshalAllDynamicContainersIds)
                    .flatten()
                    .compact()
                    .map(__refineIds)
                    .uniq()
                    .map(function (dsid) {
                        var template = $("#" + direction.to_name + " [dsid='" + dsid + "']");
                        if (template.length === 0) return [];

                        var clones = findClones(template, direction.to_name);
                        if (template.is(clones)) return [];

                        return clones;
                    })
                    .flatten()
                    .compact()
                    .each(function (e) {
                        var wrapper = $a.c15r(e, "wrapper");
                        wrapper.removeAttr("data-appery-tpl");
                    });
                Apperyio.refreshFacadeScreenFormElements(direction.to_name);
            }
        };

        UIHandler.prototype.showStaticContainerComponents = function (direction) {
            if (direction.to_type === "UI" && _.isArray(direction.mappings)) {
                var staticContainersIDs = _.chain(direction.mappings)
                    .map(__marshalAllStaticContainersIds)
                    .flatten()
                    .compact()
                    .uniq()
                    .map(__refineIds)
                    .value();

                for (var j = 0, j_limit = staticContainersIDs.length; j < j_limit; j++) {
                    var component = $("#" + direction.to_name + " [dsid='" + staticContainersIDs[j] + "']"),
                        wrapper = $a.c15r(component, "wrapper");
                    wrapper.removeAttr("data-appery-tpl");
                }
            }
        };

        function __marshalAllStaticContainersIds(e) {
            if (e.source && (e.source.lastIndexOf("[i]", e.source.length - 3) === -1)
                    && e.target && e.target.indexOf(":") === -1) {
                return e.target.match(/\['([0-9a-zA-Z_-]+)'\]/g);
            }

            return [];
        }

        function __marshalAllDynamicContainersIds(e) {
            return __marshalIds(e, false);
        }

        function __marshalTopLevelDynamicContainersIds(e) {
            return __marshalIds(e, true);
        }

        function __marshalIds(e, topLevelOnly) {
            if (e.source && e.target) {
                var iCount = e.source.match(/\[i\]/g);
                iCount = iCount ? iCount.length : 0;

                if (iCount === 0) return [];
                if (iCount > 1 && topLevelOnly) iCount = 1;

                return _.first(e.target.match(/\['([0-9a-zA-Z_:-]+)'\]/g), iCount);
            }

            return [];
        }

        function __refineIds(e) {
            return e.replace(/(\[')|('\])|(\:\w+)/g, "");
        }

        UIHandler.prototype.resolveGeneratedComponent = function (elementName, eventContext) {
            if (!_.isElement(eventContext)) {
                return $("[dsid='" + elementName + "']");
            }

            var context = $(eventContext),
                generatedSelector = "[_idx]",
                result;

            // First try to find component in generated context
            if (context.is(generatedSelector)) {
                var elementSelector = "[name='" + elementName + "']",
                    generatedContext = context;

                if (generatedContext.is(elementSelector)) {
                    result = context;
                } else {
                    var element = generatedContext.closest("[dsrefid]").find(elementSelector + generatedSelector);
                    while (element.size() === 0) {
                        generatedContext = generatedContext.parent().closest("[dsrefid]");
                        if (generatedContext.size() === 0) break;
                        element = generatedContext.eq(0).find(elementSelector + generatedSelector).eq(0);
                    }

                    if (element.size() !== 0) {
                        result = element.eq(0);
                    }
                }
            }

            // Then, try to find component in active page context if necessary
            if (!result) {
                result = context.closest("[data-role='page']").find("[dsid='" + elementName + "']");
            }

            return result;
        };

        function findClones(templates, screenName) {
            return _.chain(templates)
                .map(function (tpl) {
                    var attr = tpl.jquery ? tpl.attr("dsid") : tpl.getAttribute("dsid");
                    var derivatives = $("#" + screenName + " [dsrefid='" + attr + "']");
                    if (derivatives.length > 0) {
                        return findClones(derivatives, screenName);
                    } else {
                        return tpl;
                    }
                })
                .flatten()
                .value();
        }

        UIHandler.prototype.__set = function (context, expr, data, mod, transformation) {
            if (expr.length === 0 || !expr[0]) return;

            var b = expr[0].replace(/'/g, "").split(":"),
                dsid = b[0],
                attr = b[1],
                elementSelector = "[dsid='" + dsid + mod + "']:first",
                cloneSelector,
                element = $(elementSelector, context),
                elementWrapper = $a.c15r(element, "wrapper"),
                clone,
                cloneWrapper,
                dataBuffer;

            if (element.length === 0) return;

            if ($.isArray(data) && elementWrapper.attr("data-appery-tpl") === "true") {
                for (var i = 0; i < data.length; i++) {
                    cloneSelector = "[dsid='" + dsid + mod + "_" + i + "']";
                    clone = $(cloneSelector, context);

                    if (clone.length === 0) {
                        cloneWrapper = $a.c15r(element, "clone", i).insertBefore(elementWrapper);
                        clone = $a.c15r(cloneWrapper, "unwrapper");
                        $a.c15r(clone, "set_changed");
                    }

                    if (attr) {
                        dataBuffer = transformation.transform(data[i], clone);
                        $a.c15r(clone, "set", attr, dataBuffer);
                    } else {
                        if (expr.length === 1) {
                            transformation.transform(data[i], clone);
                        } else {
                            this.__set(clone, _.tail(expr), data[i], mod + "_" + i, transformation);
                        }
                    }
                }
            } else {
                if (attr) {
                    dataBuffer = transformation.transform(data, element);
                    Apperyio.c15r(element, "set", attr, dataBuffer);
                } else {
                    transformation.transform(data, element);
                }
                $a.c15r(element, "set_changed");
            }
        };

        UIHandler.prototype.set = function (expr, data, transformation) {
            var context = $("#" + Apperyio.CurrentScreen);
            if (context && context.attr("class").indexOf("detail-content") !== -1) {
                // It's tablet detail page, but we need corresponding master page
                context = context.parents("[data-role='page']");
            }
            this.__set(context, MEP.validateAndPreparePath(expr), data, "", transformation);
        };

        UIHandler.prototype.__get = function (context, expr) {
            if (expr.length === 0 || !expr[0]) return;

            var b = expr[0].replace(/'/g, "").split(":"),
                dsid = b[0],
                attr = b[1];

            return Apperyio.c15r($("[dsid='" + dsid + "']", context), "get", attr);
        };

        UIHandler.prototype.get = function (expr) {
            return this.__get($("#" + Apperyio.CurrentScreen), MEP.validateAndPreparePath(expr));
        };

        return new UIHandler();
    })();


    Apperyio.processMappingAction = processMappingAction;
    Apperyio.UIHandler = UIHandler;
    Apperyio.MEP = MEP;


    // Tests
    Apperyio.__tests__ = Apperyio.__tests__ || {};
    Apperyio.__tests__.Transformation = Transformation;
    Apperyio.__tests__.Entry = Entry;
    Apperyio.__tests__.MappingUnit = MappingUnit;
    Apperyio.__tests__.MEP = MEP;
    Apperyio.__tests__.processMappingAction = processMappingAction;
    Apperyio.__tests__.UIHandler = UIHandler;
    Apperyio.__tests__.loadData = MappingUnit.prototype.__loadParticipantData;
    Apperyio.__tests__.saveData = MappingUnit.prototype.__saveParticipantData;
}

__init_mapping();
