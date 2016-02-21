//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
//>>description: Creates carousel from list of images or html-blocks.
//>>label: Carousel
//>>group: Widgets
//>>css.structure: ../css/structure/jquery.mobile.carousel.css
//>>css.theme: ../css/themes/default/jquery.mobile.theme.css

//define( ["jquery", "../jquery.mobile.widget" ], function ( $ ) {
//>>excludeEnd( "jqmBuildExclude" );

(function ( $, undefined ) {

  function _checkBindFunction(){
    if ( !Function.prototype.bind ) {
      Function.prototype.bind = function (oThis) {
        if ( typeof this !== "function" ) {
          throw new TypeError( "Function.prototype.bind - what is trying to be bound is not callable" );
        }

        var aArgs = Array.prototype.slice.call( arguments, 1 ),
          fToBind = this,
          fNOP = function () {},
          fBound = function () {
            return fToBind.apply( this instanceof fNOP && oThis ? this : oThis,
              aArgs.concat( Array.prototype.slice.call(arguments)) );
          };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
      };
    }
  };
  _checkBindFunction();

  $.widget( "mobile.carousel", $.mobile.widget, {
    options:{
      indicators: null,
      indicatorsListClass: "ui-carousel-indicators",
      animationDuration: 250,
      useLegacyAnimation: false,
      showIndicator: true,
      startFrom: 0,
      showTitle: true,
      titleIsText: true,
      usejQMSwipes: false,
      theme: 'a',
      createIndicator: null,
      passOnSwipeEvents: false,
      titleBuildIn: true,
      createTitle: null,
      enabled: true,
      disabled: false
    },
    _list: null,
    _counter: 0,
    _sliding: false,
    _sliding_type: null,
    _resizing: null, // setTimeout handler
    active: null,   // current active frame :: jQuery
    __rerender_indicators: true,

    _create: function() {
      this.options = $.extend( this.options, this.element.data( "options" ) );
      this.options = $.extend( this.options, this.element.data() );
      this.element.addClass( "ui-carousel ui-carousel-theme-" + this.options.theme);
    },

    _setOptions: function( options ) {
      if ( options['theme'] !== undefined ){
        this.element.removeClass( "ui-carousel-theme-" + this.options.theme );
        this.element.addClass( "ui-carousel-theme-" + options.theme );
      }

      if ( options['indicators'] !== undefined ) {
        this.__rerender_indicators = true;
      }

      if ( options['showIndicator'] !== undefined && !!options['showIndicator'] != this.options.indicators ) {
        $(this.options.indicators).toggle(!!options['showIndicator']);
      }

      // backward compatibility
      if ( options['enabled'] !== undefined && !!options['enabled'] != this.options.enabled ) {
        this._setOption( 'disabled', !!!options.enabled );
      }
      if ( options['disabled'] !== undefined && !!options['disabled'] != this.options.disabled ) {
        this._setOption( 'enabled', !!!options.enabled );
      }

      this.options = $.extend( this.options, options );
    },

    _init: function() {
      if ( this.options.createTitle === null ) {
        this.options.createTitle = this._create_title.bind(this);
      }

      if ( !this.options.useLegacyAnimation ) {
        this._animation_meta = this._mainAnimationEnd;

        var is_webview_and_iOS7 = navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 7_0 .*(Safari)?/i);
        if (is_webview_and_iOS7 !== null) {
          if (is_webview_and_iOS7[2] != 'Safari') {
            this._animation_meta = this._ios7Webview_AnimationEnd;
          }
        }

        var test = this.element.get(0);
        if ( test.style.webkitTransition !== undefined ) {
          this._animation = this._animation_meta( "webkitTransitionEnd" );
        } else if ( test.style.oTransition !== undefined  ) {
          this._animation = this._animation_meta( "oTransitionEnd" );
        } else if ( test.style.otransition !== undefined  ) {
          this._animation = this._animation_meta( "otransitionend" );
        } else if ( test.style.mozTransition !== undefined  ) {
          this._animation = this._animation_meta( "transitionend" );
        } else if ( test.style.transition !== undefined ) {
          this._animation = this._animation_meta( "transitionend" );
        }
      }

      if (this.options.usejQMSwipes) {
        this.bindEvents = this.__jqm_bindEvents;
        this._preBindEvents();
      }

      this._sliding = false;
      this.__index = parseInt(this.options.startFrom, 10) || 0;
      this.bindEvents();
      this.refresh();
      this.__rerender_indicators = false;
    },

    _ios7Webview_AnimationEnd: function( event_name ){
      return function( direction, duration, $active, $next, done_cb ){
        var style = this._list[0].style;

        style.webkitTransitionDuration =
          style.transitionDuration = this.options.animationDuration + 'ms';

          style.transform =
          style.webkitTransform = 'translate(-' + this.__offsets[this.__index] + 'px,0)' + 'translateZ(0)';

        setTimeout( function(){
          done_cb({
            data: {
              next: next.id,
              active: active.id
            }
          });
        }, this.options.animationDuration );
      };
    },

    _mainAnimationEnd: function( event_name ){
      return function( $active, $next, done_cb ){
        var duration = this.options.animationDuration;
        if ( $next ){
          this._list.one( event_name, {
            next: $next[0].id,
            active: $active[0].id
          }, done_cb);
        } else {
          duration = 1;
        }
        var style = this._list[0].style;
        style.webkitTransitionDuration =
          style.MozTransitionDuration =
          style.msTransitionDuration =
          style.OTransitionDuration =
          style.transitionDuration = duration + 'ms';

        style.webkitTransform =
          style.msTransform =
          style.MozTransform =
          style.OTransform = 'translateX(-' + this.__offsets[this.__index] + 'px)';
      };
    },

    // we need simple unique ids for elements, so we use default jQueryMobile
    // uuid for widget and counter
    _UID: function() {
      this._counter++;
      return this.uuid + "-" + this._counter;
    },

    __enabledFramesList: function(active){
      active = active == undefined ? true : false;
      var r = $( "*[data-type='image'], *[data-type='html']", this._list );
      return !!active ? r.filter(":visible") : r;
    },

    _update_items_list: function(){
      this._list = $( ".ui-carousel-items", this.element );
      return $( "*[data-type='image'], *[data-type='html'], .ui-carousel-item", this._list ).filter(":visible");
    },

    refresh: function( data ) {
      var $list;

      // just remove inner elements
      $(this.options.indicators).html("");
      this._initIndicators();

      if ( data && $.isArray(data) ) {
        // we can't define compliance of frames and new data
        // in new versions we can add optional support for data-items
        // with specific value of frame ids.
        this.clear();
        $.map( data, this._addJSON.bind(this) );
        $list = this._update_items_list();

      } else {
        // check updates in DOM
        $list = this._update_items_list();
        $list.each( this._render_frame.bind(this) );
      };

      this.length = function(length){
        return function(){
          return length;
        };
      }( $list.filter(":visible").length );

      this.__enabledFramesList = function(list, visible){
        return function(active){
          return !!active ? visible : list;
        };
      }( $list, $list.filter(":visible") );

      this.__offsets = new Array( this.length() );

      this._list.find( '.ui-carousel-item' )
        .each(function(i, el){
          $(el).data('itemIndex', i);
        });

      setTimeout( function(){
        this._onresize();
        this.to(this.__index, true);
      }.bind(this), 0 );

      return this;
    },

    unBindEvents: function() {
      if ( $.isFunction(this.__swipe) ) {
        this.element.off( "swipeleft", this.__swipeleft );
        this.element.off( "swiperight", this.__swiperight );
        this.element.off( "swipe", this.__swipe );
        this.element.find( ".ui-right-arrow" ).off( "click", this.__swipeleft );
        this.element.find( ".ui-left-arrow" ).off( "click", this.__swiperight );
      }
    },

    _onresize: function(){
      this._width = this.element.innerWidth();

      var count = this.length(),
        items = this.__enabledFramesList(true);

      this._list[0].style.width = (this._width * (count+1)) + 'px' ;

      for ( var i = count-1; i > -1; i-- ){
        this.__offsets[i] = i * this._width;
        items[i].style.width = this._width + 'px';
        items[i].style.left = this.__offsets[i] + 'px';
      }

      this._animation();
    },

    _preBindEvents: function(){
      this.__swiperight = this.previous.bind( this );
      this.__swipeleft = this.next.bind( this );

      this.__swipe = function( e ) {
        return this.options.passOnSwipeEvents ? !this._sliding : false;
      }.bind( this );
    },

    bindEvents: function(){
      function tstart(ev){
        var touch = {},
          self = ev.data.self,
          t = self._touch = {};
        if ( typeof ev.originalEvent.touches != 'undefined' ){
          touch = ev.originalEvent.touches[0];
        } else {
          touch = ev.originalEvent;
        }
        t.start = {
          x: touch.pageX,
          y: touch.pageY,
          time: +new Date
        };

        t.isScrolling = undefined;

        t.delta = {};

        self.element.on('MSPointerMove PointerMove touchmove mousemove', {self: self}, tmove);
        self.element.on('MSPointerOut PointerOut touchend mouseup', {self: self}, tend);
      };

      function tmove(ev){
        if ( typeof ev.originalEvent.touches != 'undefined' && ev.originalEvent.touches.length > 1 || ev.originalEvent.scale && ev.originalEvent.scale !== 1) {
          return;
        };

        var touch = {},
          self = ev.data.self,
          t = self._touch;
        if ( typeof ev.originalEvent.touches != 'undefined' ){
          touch = ev.originalEvent.touches[0];
        } else {
          touch = ev.originalEvent;
        }
        t.delta = {
          x: touch.pageX - t.start.x,
          y: touch.pageY - t.start.y
        };

        if ( typeof t.isScrolling == 'undefined') {
          t.isScrolling = !!( t.isScrolling || Math.abs(t.delta.x) < Math.abs(t.delta.y) );
        }

        if ( !t.isScrolling ){
          ev.preventDefault();
        }
      };

      function tend(ev){
        var self = ev.data.self,
          t = self._touch;

        var duration = +new Date - t.start.time,
          direction = t.delta.x < 0 ? "next" : "previous";
          isValidSlide = false;

        isValidSlide = Number(duration) < 250 &&
          Math.abs(t.delta.x) > 20 // jQM checks for 30 px
          || Math.abs(t.delta.x) > self._width/2;

        if ( !t.isScrolling && isValidSlide) {
          self[direction].call(self);
        }
        self.element.off('touchmove MSPointerMove PointerMove mousemove', tmove);
        self.element.off('touchend MSPointerUp PointerUp mouseup', tend);
      };

      this.element.on("touchstart MSPointerDown PointerDown mousedown", {self: this}, tstart);

      $(window).on( 'resize', this._onresize.bind(this) );
      $(window).on( 'load', this._onresize.bind(this) );

      this.unBindEvents = function(){
        this.element.off("touchstart MSPointerDown PointerDown mousedown", tstart);
      };
    },

    __jqm_bindEvents: function() {
      $(window).on( 'resize', this._onresize.bind(this) );

      this.element.on({
        swiperight: this.__swiperight,
        swipeleft: this.__swipeleft,
        swipe: this.__swipe
      });

      this.element.find( ".ui-right-arrow" ).on( 'click', this.__swipeleft );
      this.element.find( ".ui-left-arrow" ).on( 'click', this.__swiperight );
    },

    _update_from_attr: function( $el ){
      var cached_data = $el.data();
      $el.removeData();
      $.each( "title imageUrl type".split(" "), function(k, v){
        $el.data(v);
      });
      $el.data( $.extend( {}, cached_data, $el.data() ) );
      return $el.data();
    },

    _initIndicators: function(){
      if (this.options.showIndicator) {
        if (this.options.indicators === null) {
          this.options.indicators = $( "<div></div>" );
          this.options.indicators.appendTo( this.element )
        } else if ( typeof this.options.indicators === "string" ) {
          this.options.indicators = $( this.options.indicators );
        }

        this.options.indicators.addClass( this.options.indicatorsListClass )
        this.options.indicators.addClass( this.options.indicatorsListClass + "-theme-" + this.options.theme );

        if (this.options.createIndicator === null) {
          this.options.createIndicator = this._createIndicator.bind(this)
        }
      } else {
        this.options.createIndicator = function() {}
      }
    },

    _render_frame: function( index, el, data ) {
      var $el = $( el ),
        params = data || this._update_from_attr( $el ),
        $item, $indicator,
        el_id = $el.attr("id") || this._UID(),
        is_new_element = $el.data("_processed") === undefined;

      if ( is_new_element ){
        // if source was cloned one element which already exists...
        $el.removeClass("ui-carousel-active");
        $el.addClass( "ui-carousel-item" ).attr( "id", el_id );
      }

      switch ( params.type ) {
        case "image":
          $item = this._wraperBox( $el, params.title || "" );
          this._load_image( params.imageUrl, $item, $el );
          break;
        case "html":
          this._load_html( $el, params.title || "" );
          break;
      }
      if ( this.options.showIndicator ) {
        $el.data("_processed", el_id);

        var indicator_id = this._UID();
        $indicator = this.options.createIndicator( this.options.indicators, params.title || "");

        $indicator.attr( "id", indicator_id ).data( "targetElement", el_id );
        $el.data( "indicator", indicator_id );

        $indicator
          .on( "show activate", function( event ) {
            $( this ).addClass('ui-carousel-indicator-active ui-radio-on');
          })
          .on( "hide deactivate", function( event ) {
            $( this ).removeClass('ui-carousel-indicator-active ui-radio-on');
          });

        // indicators can have actions for show and hide events
        $el
          .on( "hide", function( event ) {
            $( "#" + $(this).data("indicator") ).trigger( "deactivate" );
          })
          .on( "show" , function( event ) {
            $( "#" + $(this).data("indicator") ).trigger( "activate" );
          });
        $indicator.on( "click", {
          to: this.to.bind( this )
        }, function ( event ) {
          var id = "#" + $( this ).data( "targetElement" );
          event.data.to( $(id).data('itemIndex') );
        });
      }
      return $el.data("_processed", el_id);
    },

    // one place for wrap frame content
    _wraperBox: function( el, title ) {
      var box;
      if ( $(".ui-carousel-box", el).length === 0 ){
        box = $( "<div></div>" )
          .addClass( "ui-carousel-box" )
          .appendTo( el );
      } else {
        box = $(".ui-carousel-box", el);
      }

      if ( this.options.showTitle ) {
        this.options.createTitle( title, el );
      }

      return box;
    },

    // widget implementation for title renderer
    _create_title: function( title_str, target ) {
      var title = $( ".ui-carousel-title", target ),
        text_function = this.options.titleIsText ? "text" : "html";
      // just update
      if ( title.length > 0 ){
        if ( this.options.titleBuildIn ) {
          if ( title.children().hasClass("ui-carousel-title-inside") ) {
            $( ".ui-carousel-title-inside", title )[text_function]( title_str );
          } else {
            title.html( "<div class=\"ui-carousel-title-inside\"></div>" );
            title.children()[text_function]( title_str );
          }
        } else {
          if ( title.children().hasClass("ui-carousel-title-inside") ) {
            title.children().remove();
          }
          title[text_function]( title_str );
        }
      } else {
        if ( this.options.titleBuildIn ) {
          title = $( "<div class=\"ui-carousel-title\"><div class=\"ui-carousel-title-inside\"></div></div>" );
          title.children()[text_function]( title_str );
        } else {
          title = $( "<div class=\"ui-carousel-title\"></div>" );
          title[text_function]( title_str );
        }
        title.appendTo( target );
      }
      return title;
    },

    _load_image: function( url, target, parent ) {
      var img,
        error = function () {};
      // check if image exists, then check src attribute, may be we must update image
      if ( $("img", target).length > 0 ) {
        img = $("img:first", target);
        if ( img.attr("src") == url ) {
          parent.trigger( "ready", { item: parent });
          return;
        }
      }
      // simple image pre loader
      img = new Image();
      img.onload = function() {
        target.empty();
        target.css( 'background-image', 'url(' + url + ')' );
        target.data('imageUrl', url);
        parent.trigger( "ready", {
          item: parent
        });
      };

      img.onerror = error;
      img.onabort = error;
      img.src = url;
    },

    _load_html: function( $el, title ) {
      var content, item;

      if ( $(".ui-carousel-box", $el).length !== 0 ){
        // update only for title.
        this._wraperBox( $el, title );
        $el.trigger( "ready" );
        return;
      }
      content = $el.children().detach();
      $el.html( "" );
      item = this._wraperBox( $el, title );
      item.append(content);

      $el.trigger( "ready" );
    },

    _addJSON: function( item ) {
      var el = $( "<div></div>" );

      if ( arguments.length > 1 ){
        // when we use jQuery.each we receiving in first argument INDEX of element
        item = (typeof arguments[0] == 'object' ? arguments[0] : arguments[1]);
      }

      item.imageUrl = item.type == "image" ? item.content : "";

      el.data( {
        type: item.type || "html",
        title: item.title || "",
        imageUrl: item.imageUrl || ""
      });
      el.html( (item.type == "image" ? "" : item.content || "") );
      el.appendTo( this._list );
      if ( item.onReady ) {
        el.on( "ready", item.onReady );
      }
      if ( item.onShow ) {
        el.on( "show", item.onShow );
      }
      if (item.onHide) {
        el.on( "hide", item.onHide );
      }
      el = this._render_frame( 0, el );
      return el;
    },

    add: function( type, title, content, onReady, onShow, onHide) {
      var result = false;
      if ( $.isArray(type) ) {
        $.each( type, this._addJSON.bind(this) );
        result = this;
      } else if ( $.isPlainObject( type ) ) {
        result = this._addJSON( type );
      } else {
        result = this._addJSON({
          type: type,
          content: content,
          title: title,
          onReady: onReady,
          onShow: onShow
        });
      }
      return result;
    },

    next: function() {
      if ( !this._sliding ) {
        this.element.trigger( "beforenext" );
        this.to( this._circle(this.__index + 1) );
        return !!this.options.passOnSwipeEvents;
      }
      return false;
    },

    previous: function() {
      if ( !this._sliding ) {
        this.element.trigger("beforeprev" );
        this.to( this._circle(this.__index - 1) );
        return !!this.options.passOnSwipeEvents;
      }
      return false;
    },

    _circle: function(index) {
      return (this.length() + (index % this.length())) % this.length();
    },

    to: function( index, specialCase ) {
      if ( this.options.disabled || !this.options.enabled ) return false;

      index = parseInt( index, 10 ) || 0;
      if ( this.__index == index && typeof specialCase == "undefined" ) {
        return false;
      }

      this.__index = index;
      this.element.trigger( "goto", this.__index );
      this.slide( false, this.__enabledFramesList().eq( this.__index ) );
      return this;
    },

    slide: function( move_type, $next ) {
      if ( this._sliding || this.options.disabled || !this.options.enabled ) {
        return;
      }

      if ( ['next', 'prev'].indexOf(move_type) === -1 ) {
        // figure out type of slid if we jump to the specific frame
        move_type = $($next).nextAll(".ui-carousel-active").length === 0 ? "next" : "prev";
      }

      var $flist = this.__enabledFramesList();

      this.__index = $next.data('itemIndex');

      this.active = $flist.filter(".ui-carousel-active");

      if ( this.active.attr("id") == $next.attr("id") ) {
        this.element.trigger( "slidingcanceled" );
        $( "#" + this.active.data("indicator"), this.element ).trigger( "activate" );
        return false;
      }

      // in the beginning we doesn't have any active frames
      if ( this.active.length === 0 ) {
        $next.addClass( "ui-carousel-active" ).trigger( "show" );
        this.active = $next;
        // so animation is not necessary
        return true;
      }

      $next.trigger( "beforeshow" );
      this.element.trigger( "slidingstart", move_type );

      var done = function(ev) {
        $("#" + ev.data.active).removeClass( "ui-carousel-active" ).trigger( "hide" );
        this.active = $("#" + ev.data.next);
        this.active.addClass( "ui-carousel-active" ).trigger( "show" );
        this._sliding = false;
        this.element.trigger( "slidingdone", this._sliding_type);
      };
      this._animation( this.active, $next, done.bind(this) );

      // prevent any sliding before main sliding is done
      this._sliding = true;
      this._sliding_type = move_type;

      return true;
    },

    _animation: function( $active, $next, done_cb ) {
      if ( !$next ) return;
      this._list.animate({
        left: -1*this.__offsets[this.__index]
      },{
        duration: this.options.animationDuration,
        complete: done_cb.bind(this, {
          data:{
            active: $active.attr( "id" ),
            next: $next.attr( "id" )
          }
        })
      });
    },

    getFrame: function( index ) {
      var f = this._list.find( ".ui-carousel-item" ).eq( index );
      if ( f.length === 0 ) {
        return false;
      }
      return f;
    },

    eachItem: function(callback) {
      this._list.find(".ui-carousel-item").each(callback);
      return this;
    },

    remove: function( index, $el ) {
      //debugger;
      if ( typeof index == 'object' ){
        $el = $( index );
        index = $el.data( 'itemIndex' )-0;
      } else {
        index = parseInt( index, 10 );
        if ( $el === undefined ) {
          $el = this._list.find( ".ui-carousel-item" ).eq( index );
        } else {
          index = $el.data( 'itemIndex' )-0;
        }
      }

      // if frame is active we need move carousel to the next frame before remove it.
      if ( index == this.__index ) {
        // and bind last event action
        $el.one( "hide", this.remove.bind(this, $el) );
        this.next();
      } else {
        this._remove( index, $el );
        //setTimeout( function(){
          this.refresh();
        //}.bind(this), 0 );
      }
      return this;
    },

    _remove: function( index, el ) {
      var $el = $(el),
        // indicator can be in any part of DOM,
        // so we use only previously saved id for find it.
        $indicator = $( "#" + $el.data("indicator") );
      $el.trigger( "itemremove" ).off();
      $indicator.trigger( "itemremove" ).off();
      $indicator.remove();
      $el.remove();
    },

    clear: function( done ) {
      this.element.trigger("clear_all");
      $(".ui-carousel-item", this.element).each(this._remove.bind(this));
      this.__index = 0;
      this.refresh();
    },

    _createIndicator: function( list, title) {
      var indicator = $( "<div></div>" );
      indicator.addClass( "ui-carousel-indicator" );
      indicator.attr( "title", title );
      indicator.appendTo( list );
      return indicator;
    }
  });
  $( document ).bind( "pagecontainershow pageshow", function( e ) {
    $( document ).trigger( "ui-carouselbeforecreate" );
    var c = $( ":jqmData(role='carousel')", e.target ).carousel();
    $( ":jqmData(role='carousel')", e.target ).carousel( "bindEvents" );
    return c;
  }).bind( "pagehide", function( e ){
    return $( ":jqmData(role='carousel')", e.target ).carousel( "unBindEvents" );
  } );
}( jQuery ));
//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
//});
//>>excludeEnd( "jqmBuildExclude" );
