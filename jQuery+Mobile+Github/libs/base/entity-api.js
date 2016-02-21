"use strict";
(function( helper, Apperyio, undefined ){

var $extend = null;
if ( helper.extend != undefined ) {
    $extend = (helper instanceof jQuery) ? helper.extend.bind(helper, true) : helper.extend;
}

function EntityError( message ){
    this.name = "EntityError";
    this.message = message;
};

EntityError.prototype = new Error();
EntityError.prototype.constructor = EntityError;

function TypeNotFoundError( message ){
    this.name = "TypeNotFoundError";
    this.message = message;
}

TypeNotFoundError.prototype = new EntityError();
TypeNotFoundError.prototype.constructor = TypeNotFoundError;

function NoModelError( message ){
    this.name = "NoModelError";
    this.message = message;
    console.log( this.name + ": " + message );
};

NoModelError.prototype = new TypeNotFoundError();
NoModelError.prototype.constructor = NoModelError;

function EntityFactory( models ){
    this.models = models || [];
    this._types = {
        "string": function(model){
            return (model && model["default"]) || "";
        },

        "number": function(model){
            return parseInt( (model && model["default"]) || 0, 10 );
        },

        "boolean": function(model){
            var result = (model && model["default"]) || false;
            if ( typeof result == "string" ) {
                result = ( result.toLowerCase === "true" ) || ( result === "1" ) || ( parseInt( result, 10 ) > 0 );
            } else if ( typeof result == "number" ) {
                result = result > 0;
            }
            return result;
        },

        "object": function(model){
            var result = {};
            if ( model && model.properties ){
                for( var key in model.properties ){
                    result[key] = this._get(model.properties[key].type, model.properties[key]);
                }
            }
            return result;
        },
        "array": function(model){
            var result;
            if ( model && model.items ){
                result = this._get(model.items.type, model.items);
            }
            return (model && model["default"]) || [];
        }
    };
}

EntityFactory.prototype = {
    get: function( name, defaults ){
        var result = null;
        if ( typeof defaults == typeof undefined ){
            result = this._get( name );
        } else {
            if ( Object.prototype.toString.call(defaults) == "[object Object]" ){
                result = this._get( name );
                result = $extend( {}, result, defaults );
            } else {
                result = defaults;
            }
        }
        return result;
    },

    __get_type: function( name ){
        return this._types[name].apply( this, Array.prototype.slice.call(arguments, 1) );
    },

    _get: function( name ){
        if ( typeof this._types[name] == "function" ) {
            return this.__get_type.apply(this, arguments);
        } else {
            try {
                this._add( name );
            } catch (e) {
                if ( e instanceof NoModelError) {
                    throw new TypeNotFoundError( e.message );
                }
                throw e;
            }
            return this.__get_type.apply(this, arguments);
        }
    },

    _add: function( name ){
        if ( this.models[name] == undefined ){
            throw new NoModelError( "Can't found `" + name + "` model" );
        }

        this._types[name] = (function(self, key, md){
            var result = null,
                res = null;
            try {
                result = (function(v){
                    return function(){
                        return v;
                    };
                })( self._get(md.type, md) );
            } catch (e) {
                if ( e instanceof NoModelError ) {
                    result = self._add( key );
                } else {
                    throw e;
                }
            }
            return result;
        })(this, name, this.models[name]);
    }
}

Apperyio.EntityFactory = EntityFactory;

Apperyio.EntityError = EntityError;
Apperyio.NoModelError = NoModelError;
Apperyio.TypeNotFoundError = TypeNotFoundError;

})( jQuery, Apperyio );
