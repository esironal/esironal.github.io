(function($){
    $.TouchArea = function(el, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        
        // Add a reverse reference to the DOM object
        base.$el.data("TouchArea", base);
        
        base.init = function(){
            base.options = $.extend({},$.TouchArea.defaultOptions, options);
            
            // Put your initialization code here
            bindTouchDragHandlers(base);
        };
        
        // Sample Function, Uncomment to use
        // base.functionName = function(paramaters){
        // 
        // };
        
        // Run initializer
        base.init();
    };
    
    $.TouchArea.defaultOptions = {
    };
    
    $.fn.touchArea = function(options){
        return this.each(function(){
            (new $.TouchArea(this, options));
        });
    };
    
    // This function breaks the chain, but returns
    // the TouchArea if it has been attached to the object.
    $.fn.getTouchArea = function(){
        this.data("TouchArea");
    };
    
    function bindTouchDragHandlers(base) {
    	function getLocation(e) {
    		if ($.mobile) {
    			return [e.pageX,e.pageY];
    		} else {
    			return [e.originalEvent.touches[0].pageX,e.originalEvent.touches[0].pageY];
    		}
    	}
    	
    	// if $.mobile exists than bind to vmousedown, vmouseup, vmousemove
    	var touchEventNames = ['touchstart', 'touchmove', 'touchend'];
    	if ($.mobile) {
    		touchEventNames = ['vmousedown', 'vmousemove', 'vmouseup'];
    	}
    	
    	base.toucharea = {};
    	base.$el.unbind(touchEventNames[0]).bind(touchEventNames[0], function(e) {
    		e.preventDefault();
    		e.stopPropagation();
    		base.toucharea.prevTime = new Date().getTime();
    		base.toucharea.mouseDown = true;
    		base.toucharea.touchMoved = false;
    		base.toucharea.diffTime = 0;
    		base.toucharea.diffX = 0;
    		base.toucharea.diffY = 0;
    		var location = getLocation(e);
    		base.toucharea.prevX = location[0];
    		base.toucharea.prevY = location[1];
    		// trigger the touchdragstart event
    		var e = jQuery.Event('touchdragstart');
    		base.$el.trigger(e, { 
    			'x': base.toucharea.prevX, 
    			'y': base.toucharea.prevY
    			});
    	});
    	
		base.$el.unbind(touchEventNames[1]).bind(touchEventNames[1], function(e) {
    		e.preventDefault();
    		e.stopPropagation();
			if (!base.toucharea.mouseDown) return;
			base.toucharea.touchMoved = true;
			var nowTime = new Date().getTime();
			base.toucharea.diffTime = nowTime - base.toucharea.prevTime;
			base.toucharea.prevTime = nowTime;

    		var location = getLocation(e);

			base.toucharea.diffX = location[0] - base.toucharea.prevX;
    		base.toucharea.diffY = location[1] - base.toucharea.prevY;
			
    		base.toucharea.prevX = location[0];
    		base.toucharea.prevY = location[1];
			// trigger the touchdragmove event
    		var e = jQuery.Event('touchdragmove');
    		base.$el.trigger(e, { 
    			'x': base.toucharea.prevX, 
    			'y': base.toucharea.prevY,
    			'diffX': base.toucharea.diffX,
    			'diffY': base.toucharea.diffY,
    			'durationMS': base.toucharea.diffTime
    			});
		});
		
		base.$el.unbind(touchEventNames[2]).bind(touchEventNames[2], function(e) {
    		e.preventDefault();
    		e.stopPropagation();
			base.toucharea.mouseDown = false;
			// trigger the touchdragend event
			var e = jQuery.Event('touchdragend');
    		base.$el.trigger(e, { 
    			'x': base.toucharea.prevX, 
    			'y': base.toucharea.prevY,
    			'diffX': base.toucharea.diffX,
    			'diffY': base.toucharea.diffY,
    			'durationMS': base.toucharea.diffTime,
    			'didDrag': base.toucharea.touchMoved
    			});
		});
		
    }
    
})(jQuery);

$('[data-role="page"]').live("pagebeforecreate", function() {
	var innerTouchAreas = $(this).find('[data-toucharea="true"]');
	for (var i=0; i<innerTouchAreas.length; i++) {
		$(innerTouchAreas[i]).touchArea();	
	}	
});
