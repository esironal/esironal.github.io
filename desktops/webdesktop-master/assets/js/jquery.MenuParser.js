// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;
(function( $, window, document, undefined )
{

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window and document are passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = "menuParser",
        defaults = {
            source:     null,
            sourceType: 'JSON',
            events:     {
                onInit:     function()
                {
                },
                onFinished: function()
                {
                }
            }
        };

    // The actual plugin constructor
    function menuParser( element, options )
    {
        this.element = element;
        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.options = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.menuHtml = [];
        this.init();
    }

    menuParser.prototype = {
        init: function()
        {
            // Place initialization logic here
            // You already have access to the DOM element and
            // the options via the instance, e.g. this.element
            // and this.settings
            // you can add more functions like the one below and
            // call them like so: this.yourOtherFunction(this.element, this.settings).
            this.options.events.onInit.call( this );

            this.parseSource();
            //this.buildList();

            this.options.events.onFinished.call( this );
        },

        /**
         * Gets the given source and provide its content to this.sourceObj
         */
        parseSource: function()
        {
            this.sourceObj = null;

            // In case if there is an menu object directly given through the options
            if( typeof this.options.source == 'object' )
            {
                this.sourceObj = this.options.source;
                this.options.sourceType = 'JSON';
                return;
            }
            else
            {
                var __this = this;
                $.ajax( {
                    type:    "GET",
                    url:      this.options.source,
                    dataType: this.options.sourceType,
                    success:  function( mData )
                    {
                        __this.sourceObj = mData;
                        __this.buildList();
                    },
                    error: function()
                    {
                        console.error( "menuParser.js: " + this.options.source + " could not be loaded." );
                    }
                } );
            }
        },

        /**
         * Recursively builds the menu from this.sourceObj and appends it to this.element.
         */
        buildList: function()
        {
            var __this = this;

            // Recursive function for building the menu
            function createList( arr, blSubMenu )
            {
                // Identifier whether this is a submenu or not
                if( blSubMenu )
                {
                    __this.menuHtml.push( '<ul class="submenu">' );
                }

                // Iterate each menu item
                $.each( arr, function( i, val )
                {
                    // Check if this menu item has a submenu
                    var blHasSubMenu = val.submenu && val.submenu.length > 0;

                    __this.menuHtml.push( '<li class="' + ( blHasSubMenu ? 'submenu-toggle' : null ) + '">' );
                    __this.menuHtml.push( '<a href="' + val.link + '" title="' + val.name + ' öffnen">' );

                    // Push icon if given
                    if( val.icon )
                    {
                        __this.menuHtml.push( '<i class="' + val.icon + '"></i>' );
                    }

                    __this.menuHtml.push( val.name + '</a>' );

                    if( blHasSubMenu )
                    {
                        createList( val.submenu, true );
                    }

                    __this.menuHtml.push( '</li>' );
                } );

                if( blSubMenu )
                {
                    __this.menuHtml.push( '</ul>' );
                }
            }

            createList( this.sourceObj, false );

            // Append the HTML of the Menu to this.element.
            $( this.element ).html( '' ).append( this.menuHtml.join( '' ) );
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[ pluginName ] = function( options )
    {
        return this.each(
            function()
            {
                if( !$.data( this, "plugin_" + pluginName ) )
                {
                    $.data( this, "plugin_" + pluginName, new menuParser( this, options ) );
                }
            } );
    };

})( jQuery, window, document );