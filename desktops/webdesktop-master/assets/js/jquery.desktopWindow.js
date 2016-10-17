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
    var pluginName = "desktopWindow",
        defaults = {
            icon:            'icon-desktop',
            title:           'New Window',
            resizable:       true,
            width:           800,
            height:          600,
            minWidth:        300,
            minHeight:       200,
            maxWidth:        null,
            maxHeight:       null,
            posX:            'center',
            posY:            'center',
            contentType:     'HTML',
            contentSource:   'remote/test-content.html',
            contentSelector: 'div.content:first-child',
            actions:         {
                reload:   true,
                minimize: true,
                maximize: true,
                close:    true,
                resize:   true
            },
            strings: {
                action_reload:   'reload',
                action_minimize: 'minimize',
                action_maximize: 'maximize',
                action_close:    'close',
                status_loading:  'Loading...',
                status_ajax_404: 'Content could not be loaded...'
            },
            events: {
                onInit:  function() {},
                onOpen:  function() {},
                onClose: function() {}
            }
        };

    // The actual plugin constructor
    function desktopWindow( element, options )
    {
        this.element = element;

        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.options = $.extend( {}, defaults, options );

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    /**
     * desktopWindow prototype object
     *
     * @type {{
     *         iNormalWidth: number,
     *         iNormalHeight: number,
     *         iNormalPosX: number,
     *         iNormalPosY: number,
     *         init: Function,
     *         createNew: Function,
     *         setDimensions: Function,
     *         initEvents: Function,
     *         minimize: Function,
     *         maximize: Function,
     *         close: Function,
     *         reopenFromTaskbar: Function,
     *         setTitle: Function,
     *         setContent: Function,
     *         initContentElementEvents: Function,
     *         evalScripts: Function,
     *         focus: Function,
     *         showLoadingScreen: Function,
     *         hideLoadingScreen: Function,
     *         toggleLoadingScreen: Function,
     *         appendToDesktop: Function,
     *         addToTaskBar: Function
     * }}
     */
    desktopWindow.prototype = {

        iNormalWidth:  0,
        iNormalHeight: 0,
        iNormalPosX:   0,
        iNormalPosY:   0,

        /**
         * This function is where everything of a window begins.
         * Some setters and the procedure to create the window and append it to the desktop.
         *
         * @return void
         */
        init: function()
        {
            // Place initialization logic here
            // You already have access to the DOM element and
            // the options via the instance, e.g. this.element
            // and this.options
            // you can add more functions like the one below and
            // call them like so: this.yourOtherFunction(this.element, this.options).

            // call onInit Event before window is rendered
            this.options.events.onInit.call( this );

            this.element = $( this.element );
            this.taskbarElem = $( '<li>' );

            this.iNormalWidth = this.options.width + 'px';
            this.iNormalHeight = this.options.height + 'px';
            this.iNormalPosX = this.options.posX + 'px';
            this.iNormalPosY = this.options.posY + 'px';

            this.createNew();
            this.setDimensions();
            this.initEvents();
            this.setContent();
            this.appendToDesktop();
            this.addToTaskBar();

            // call onOpen Event after window is rendered
            this.options.events.onOpen.call( this );

        },

        /**
         * Creates the window div element and fills it with the basic elements like the topbar, actions, view-content
         * and bottombar.
         */
        createNew: function()
        {
            var __this = this;

            this.element.addClass( 'window shadowed' );

            // Create topbar
            this.element.topbar = $( '<div>' ).addClass( 'topbar no-select' );

            var topbarContextMenu = {};
            topbarContextMenu[ this.options.strings.action_minimize ] = {
                onclick: function( menuItem, menu ) { __this.minimize(); },
                icon: 'icon-minus'
            };
            topbarContextMenu[ this.options.strings.action_maximize ] = {
                onclick: function( menuItem, menu ) { __this.maximize(); },
                icon: 'icon-fullscreen'
            };
            topbarContextMenu[ this.options.strings.action_close ]    = {
                onclick: function( menuItem, menu ) { __this.close(); },
                icon: 'icon-remove'
            };

            // ToDo: Prevent opening when rightclicking on action elements (reload, minimize, ...)
            this.element.topbar.contextMenu( [ topbarContextMenu ] );

            this.element.topbar.iconElem    = document.createElement( 'div' );
            this.element.topbar.titleElem   = document.createElement( 'div' );
            this.element.topbar.actionsElem = document.createElement( 'div' );

            this.element.topbar.titleElem.className   = 'title';

            this.element.topbar.actionsElem.className = 'actions pull-right';

            /**
             * Create reload action button.
             */
            if( this.options.actions.reload )
            {
                var actionsReloadElem = document.createElement( 'div' );
                actionsReloadElem.className = 'reload';
                actionsReloadElem.title = this.options.strings.action_reload;

                $( actionsReloadElem ).click(
                    function()
                    {
                        __this.setContent()
                    } );

                this.element.topbar.actionsElem.appendChild( actionsReloadElem );
            }

            /**
             * Create minimize action button.
             */
            if( this.options.actions.minimize )
            {
                var actionsMinimizeElem = document.createElement( 'div' );
                actionsMinimizeElem.className = 'minimize';
                actionsMinimizeElem.title = this.options.strings.action_minimize;

                $( actionsMinimizeElem ).click(
                    function()
                    {
                        __this.minimize()
                    } );

                this.element.topbar.actionsElem.appendChild( actionsMinimizeElem );
            }

            /**
             * Create maximize action button.
             */
            if( this.options.actions.maximize )
            {
                var actionsMaximizeElem = document.createElement( 'div' );
                actionsMaximizeElem.className = 'maximize';
                actionsMaximizeElem.title = this.options.strings.action_maximize;

                $( actionsMaximizeElem ).click(
                    function()
                    {
                        __this.maximize()
                    } );

                this.element.topbar.actionsElem.appendChild( actionsMaximizeElem );
            }

            /**
             * Create close action button.
             */
            if( this.options.actions.close )
            {
                var actionsCloseElem = document.createElement( 'div' );
                actionsCloseElem.className = 'close';
                actionsCloseElem.title = this.options.strings.action_close;

                $( actionsCloseElem ).click(
                    function()
                    {
                        __this.close()
                    } );

                this.element.topbar.actionsElem.appendChild( actionsCloseElem );
            }

            // append configured elements to the topbar element
            this.element.topbar.append( this.element.topbar.iconElem,
                                        this.element.topbar.titleElem,
                                        this.element.topbar.actionsElem );

            // Create view-content
            this.element.viewContent = $( '<div>' ).addClass( 'view-content' );

            // Create Loading Screen
            this.element.viewContent.loadingScreen = $( '<div>' ).addClass( 'loading-screen' );
            this.element.viewContent.append( this.element.viewContent.loadingScreen );

            // Create bottombar
            this.element.bottombar = $( '<div>' ).addClass( 'bottombar' );

            // Create bottombar status
            this.element.bottombar.status = document.createElement( 'div' );
            this.element.bottombar.status.className = 'status';

            this.element.bottombar.append( this.element.bottombar.status );

            // append basic elements to the window element
            this.element.append( this.element.topbar, this.element.viewContent, this.element.bottombar );
        },

        /**
         * Sets the dimensions of the window element given by the plugin options.
         */
        setDimensions: function()
        {
            var oWindows = document.getElementById( 'windows' );

            this.iNormalPosY = this.options.posY == 'center' ? oWindows.offsetHeight / 2 - parseInt( this.iNormalHeight ) / 2 : this.iNormalPosY;
            this.iNormalPosX = this.options.posX == 'center' ? oWindows.offsetWidth / 2 - parseInt( this.iNormalWidth ) / 2 : this.iNormalPosX;

            this.element.css(
                {
                    width:    this.iNormalWidth,
                    height:   this.iNormalHeight,
                    top:      this.iNormalPosY,
                    left:     this.iNormalPosX,
                    position: 'absolute'
                } );
        },

        /**
         * Initializes the events that can be bind to the window itself.
         */
        initEvents: function()
        {
            var __this = this;
            this.element.mousedown(
                function()
                {
                    __this.focus();
                } ).draggable(
                {
                    handle: this.element.topbar,
                    cancel: '.reload, .minimize, .maximize, .close',
                    start:  function()
                    {
                        // ToDo: Close opened context menus
                        $( this ).removeClass( 'shadowed' );
                    },
                    stop:   function()
                    {
                        $( this ).addClass( 'shadowed' );

                        __this.iNormalPosY = __this.element[0].style.top;
                        __this.iNormalPosX = __this.element[0].style.left;
                    }
                } );

            if( this.options.actions.resize )
            {
                var __this = this;
                this.element.resizable(
                    {
                        minWidth:  this.options.minWidth,
                        minHeight: this.options.minHeight,
                        maxWidth:  this.options.maxWidth,
                        maxHeight: this.options.maxHeight,
                        stop:      function( e, o )
                        {
                            __this.iNormalWidth = o.size.width + "px";
                            __this.iNormalHeight = o.size.height + "px";
                        }
                    } );
            }

            this.element.topbar.dblclick(
                function( e )
                {
                    if( !/reload|minimize|maximize|close/.test( e.target.className ) )
                    {
                        __this.maximize()
                    }
                } );
        },

        /**
         * Minimizes the window to the taskbar.
         */
        minimize: function()
        {
            this.element.animate(
                {
                    top:     '+=30',
                    opacity: 0
                }, 250,function()
                {
                    $( this ).addClass( 'minimized' ).hide()
                } ).removeClass( 'active' );

            this.taskbarElem.removeClass( 'active' );
        },

        /**
         * Maximizes the window to full screen.
         */
        maximize: function()
        {
            var __this = this,
                isMaximized = this.element.hasClass( 'maximized' );

            this.element.removeAttr( 'style' );

            if( isMaximized )
            {
                this.element.css(
                    {
                        width:  this.iNormalWidth,
                        height: this.iNormalHeight,
                        top:    this.iNormalPosY,
                        left:   this.iNormalPosX
                    } );
            }

            this.element.draggable( isMaximized ? 'enable' : 'disable' );

            if( this.options.resizable )
            {
                this.element.resizable( isMaximized ? 'enable' : 'disable' ).find( '.ui-resizable-handle' ).toggle();
            }

            this.element.toggleClass( 'maximized' ).css( 'zIndex', ++webdesktop.windows.zIndexer );
        },

        /**
         * Closes the window and removes it from the DOM.
         */
        close: function()
        {
            // call onClose Event with object param
            this.options.events.onClose.call( this );

            this.element.remove();
            this.taskbarElem.remove();
        },

        /**
         * Restores the window when it was minimized.
         */
        reopenFromTaskbar: function()
        {
            $( '#windows' ).find( '.window.active' ).removeClass( 'active' );

            this.element.removeClass( 'minimized' ).show().animate(
                {
                    top:     '-=30',
                    opacity: 1
                }, 250 ).css( 'zIndex', ++webdesktop.windows.zIndexer ).addClass( 'active' );
            this.taskbarElem.addClass( 'active' );
        },

        /**
         * Sets the title of a window
         *
         * @param sTitle
         * @returns {*}
         */
        setTitle: function( sTitle )
        {
            var sTitle = sTitle || this.options.title;

            this.element.topbar.titleElem.innerText = sTitle;
            this.taskbarElem.titleElem.innerText = sTitle;
            this.taskbarElem.titleElem.title = sTitle;

            return this;
        },

        /**
         * Sets the icon of the window
         * @param sIcon
         * @returns {*}
         */
        setIcon: function( sIcon )
        {
            var sClassName = 'icon ' + ( sIcon || this.options.icon );

            this.element.topbar.iconElem.className = sClassName;
            this.taskbarElem.iconElem.className = sClassName;

            return this;
        },

        /**
         * Sets a text in the statusbar. If 2nd parameter is given, the status hides after N milliseconds.
         * If there is a type given it will be set appended to the className.
         * @param sText
         * @param iHideDelay
         * @param sType
         * @returns {*}
         */
        setStatus: function( sText, iHideDelay, sType )
        {
            this.element.bottombar.status.className = 'status show ' + sType;
            this.element.bottombar.status.innerText = sText;

            if( typeof iHideDelay != 'undefined' )
            {
                var __this = this;

                if( typeof this.element.bottombar.status.clearTimeout != 'undefined' )
                {
                    window.clearTimeout( this.element.bottombar.status.clearTimeout );
                }

                this.element.bottombar.status.clearTimeout = window.setTimeout(
                    function()
                    {
                        __this.clearStatus();
                    }, parseInt( iHideDelay )
                )
            }

            return this;
        },

        /**
         * Clears the text in the statusbar.
         * @returns {*}
         */
        clearStatus: function()
        {
            this.element.bottombar.status.className = 'status';
            this.element.bottombar.status.innerText = '';

            return this;
        },

        /**
         * Loads and sets the content to the window.
         * Loads are performed via jQuery's AJAX method.
         *
         * @param sUrl
         * @param sContentType
         * @param sRequestType
         * @param sContentSelector
         */
        setContent: function( sUrl, sContentType, sRequestType, sContentSelector )
        {
            var __this = this;

            this.options.contentSource = sUrl || this.options.contentSource;
            this.options.contentType = sContentType || this.options.contentType;
            this.options.contentSelector = sContentSelector || this.options.contentSelector;

            if( this.options.contentSource.length )
            {
                this.showLoadingScreen();
                this.setStatus( this.options.strings.status_loading );

                $.ajax( {
                    type:     sRequestType || "GET",
                    url:      this.options.contentSource,
                    dataType: this.options.contentType,
                    success:  function( sData )
                    {
                        var oCont = $( '<div>' + sData + '</div>' );

                        __this.element.viewContent.html( $( __this.options.contentSelector, oCont ) ).prepend( __this.element.viewContent.loadingScreen );
                        __this.initContentElementEvents();
                        __this.clearStatus();
                        __this.hideLoadingScreen();
                        __this.evalScripts( $( 'script', oCont ) );
                    },
                    error: function()
                    {
                        __this.hideLoadingScreen();
                        __this.setStatus( __this.options.strings.status_ajax_404, 3500, 'error' );
                    }
                } );
            }
        },

        /**
         * Binds events to elements that were loaded in the window's content.
         * This will be done after successfully setting the content in this.setContent().
         */
        initContentElementEvents: function()
        {
            var __this = this;

            this.element.viewContent.find( 'a:not([target="_blank"],[href^="javascript:"])' ).click(
                function( e )
                {
                    e.preventDefault();

                    var sContentSelector = this.getAttribute( 'data-content-selector' );

                    __this.setContent( this.href, 'HTML', 'GET', sContentSelector );
                } );
        },

        /**
         * Evaluates javascript that was loaded in this.setContent().
         * The variable oWin represents the desktopWindow object and can be accessed in external loaded content
         * to manipulate the desktopWindow object.
         *
         * @param aScriptElems
         */
        evalScripts: function( aScriptElems )
        {
            if( aScriptElems.length )
            {
                var oWin = this; // Can be accessed in evaled scripts

                $.each( aScriptElems,
                        function()
                        {
                            try
                            {
                                eval( this.innerHTML );
                            }
                            catch( e )
                            {
                                if( typeof console != 'undefined' && typeof console.error != 'undefined' )
                                {
                                    console.error( e );
                                }
                            }
                            $( this ).remove();
                        } );
            }
        },

        /**
         * Focuses the window, brings it to the foreground and sets it active in the taskbar.
         */
        focus: function()
        {
            if( this.element[0].style.zIndex != webdesktop.windows.zIndexer )
            {
                this.element[0].style.zIndex = ++webdesktop.windows.zIndexer;

                $( '#windows' ).find( '.window.active' ).removeClass( 'active' );
                this.element.addClass( 'active' );

                $( '#tasks' ).find( 'li.active' ).removeClass( 'active' );
                this.taskbarElem.addClass( 'active' );
            }
        },

        /**
         * Shows the loading overlay in the window.
         */
        showLoadingScreen: function()
        {
            this.element.viewContent.loadingScreen.show();
            this.setStatus( this.options.strings.status_loading );
        },

        /**
         * Hides the loading overlay in the window.
         */
        hideLoadingScreen: function()
        {
            this.element.viewContent.loadingScreen.hide();
            this.clearStatus();
        },

        /**
         * Toggles the loading overlay in the window.
         */
        toggleLoadingScreen: function()
        {
            this.element.viewContent.loadingScreen.toggle();
        },

        /**
         * Appends the window element to the desktop.
         */
        appendToDesktop: function()
        {
            $( '#windows' ).append( this.element );
        },

        /**
         * Adds the taskbarElem to the taskbar
         */
        addToTaskBar: function()
        {
            var __this = this,
                oTasks = $( '#tasks' );

            this.taskbarElem.iconElem = document.createElement( 'i' );
            this.setIcon();

            this.taskbarElem.titleElem = document.createElement( 'span' );
            this.taskbarElem.titleElem.className = 'title';
            this.setTitle();

            this.taskbarElem.addClass( 'active no-select' );
            this.taskbarElem.append( this.taskbarElem.iconElem, this.taskbarElem.titleElem );

            this.taskbarElem.click(
                function()
                {
                    __this.element.stop( true, true );
                    if( __this.element.hasClass( 'minimized' ) )
                    {
                        __this.reopenFromTaskbar();
                    }
                    else
                    {
                        if( __this.element[0].style.zIndex != webdesktop.windows.zIndexer )
                        {
                            __this.focus();
                        }
                        else
                        {
                            __this.minimize();
                        }
                    }
                } );

            oTasks.append( this.taskbarElem );

            // calculate taskbarItemsWidth and cut string
            // ToDo: put this part into new method?
            var getTaskbarItemsWidth = function()
            {
                var taskbarItemsWidth = 0;
                $( '#tasks' ).find( 'li' ).each(
                    function()
                    {
                        taskbarItemsWidth += $( this ).outerWidth();
                    }
                );
                return taskbarItemsWidth;
            };

            var _lastTaskbarItemsWidth    = 0,
                _currentTaskbarItemsWidth = getTaskbarItemsWidth();

            var _sub = 1;

            while( _currentTaskbarItemsWidth > oTasks.width() && _currentTaskbarItemsWidth != _lastTaskbarItemsWidth )
            {
                _lastTaskbarItemsWidth = _currentTaskbarItemsWidth;

                // ToDo: Better use CSS property text-overflow:emphasis; for cutting the text
                $( '#tasks li' ).each(
                    function()
                    {
                        var _text = $( 'span', this ).attr( 'title' );
                        $( 'span', this ).text( _text.substr( 0, ( _text.length-(4+_sub) ) ) + '...' );
                    }
                );

                _sub++;

                _currentTaskbarItemsWidth = getTaskbarItemsWidth();

            }
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[ pluginName ] = function( options )
    {
        return this.each(
            function()
            {
                if( !$.data( this, pluginName ) )
                {
                    $.data( this, pluginName, new desktopWindow( this, options ) );
                }
            } );
    };

})( jQuery, window, document );