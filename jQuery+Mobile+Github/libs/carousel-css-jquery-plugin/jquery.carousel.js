(function($){
    $.Carousel = function(el){
        var base = this;
        
        base.$el = $(el);
        base.el = el;
        
        base.$el.data("Carousel", base);
        
        base.init = function(){
        	bindTouchHandlers(base);
        };
        base.init();
    };
    
    $.fn.carousel = function(action){
		if(action!=undefined && action == "refresh"){
			//clean previouse carousel
			$(this).parent().find(".carouselCircle").remove();
		}		
        return this.each(function(){
            (new $.Carousel(this));
        });
    };
    
    function bindTouchHandlers(base) {
    	// init. the element as touch area
    	base.$el.touchArea();
    	
    	// style containing div
    	$(base.$el).parent().css('position', 'absolute')
    						.css('width', '100%');
    	
    	// style the carousel itself
    	$(base.$el).css('overflow', 'visible')
    			   .css('padding', 0)
    			   .css('position', 'relative')
    			   .css('left', '0%');
    	
    	// style each li in area as max width, align along eachother
    	var lis = $(base.$el).find('.carouselitem:visible');
    	for (var i=0; i<lis.length; i++) {

    		$(lis[i]).css('width', '100%')    			  
    			  .css('display', 'inline-block')
    			  .css('position', 'absolute')
    			  .css('left', i*100+'%');
    		
    	}
    	base.carouselId = Math.floor(Math.random()*1000);
    	base.idPrefix = base.carouselId+'-carousel-circle-';		
    	base.clientWidth = document.body.clientWidth;
    	for (var i=0, len=lis.length; i<len; i++) {
    		var circle = $('<div>').css('position', 'absolute')
			 .css('bottom', '0%')
			 .css('left', base.clientWidth/2 + (len/2-len)*20 +i*15 +'px')
			 .css('width', '10px')
			 .css('height', '10px')
			 .css('background-color', '#000')
			 .css('border-radius', '5px')
			 .css('opacity', 0.3)
			 .addClass("carouselCircle");
    		circle.attr('id',base.idPrefix+i);
    		$(base.$el).parent().append(circle);
    	}
    	// highlight circle of first page
    	$('#'+base.idPrefix+'0').css('opacity', 1);
    	
    	base.isAnimating = false;
    	base.disposition = 0;
    	base.maxDisposition = lis.length;
    	base.totalDispositionX = 0;
    	base.el.style.webkitTransition = '-webkit-transform 300ms ease-in-out';
    	
    	base.pageTransThreshold = base.clientWidth / 8; // 12.5% of screen width 
    	
    	$(base.$el).unbind('touchdragstart').bind('touchdragstart', function(e, data) {			
    		if (base.isAnimating == true) return;
    		base.startX = data.x;
    		base.currentDispositionX = 0;
    	});
    	
    	$(base.$el).unbind('touchdragmove').bind('touchdragmove', function(e, data) {
    		if (base.isAnimating == true) return;
    		if (data.diffX == 0) return;
    		base.isAnimating = true;
    		
    		base.totalDispositionX += data.diffX;
    		base.currentDispositionX += data.diffX;
    		
//    		$(base.el).one('webkitTransitionEnd', function() {
//    			base.isAnimating = false;
//    		});
    		setTimeout(function() {
    			base.isAnimating = false;
    		},data.durationMS+1);
    		base.el.style.webkitTransition = '-webkit-transform '+data.durationMS+'ms linear';
    		base.el.style.webkitTransform = 'translateX('+base.totalDispositionX+'px)';
    	});
    	
    	$(base.$el).unbind('touchdragend').bind('touchdragend', function(e, data) {
//    		if (base.isAnimating == true) return;
    		base.isAnimating = true;    		
    		if ((base.currentDispositionX > 0 && base.disposition == 0) || 
    			(base.currentDispositionX < 0 && base.disposition == base.maxDisposition-1) ||
    			(Math.abs(base.currentDispositionX) < base.pageTransThreshold)) {
    			base.totalDispositionX += (-1)*base.currentDispositionX;
    		} else if (Math.abs(base.currentDispositionX) >= base.pageTransThreshold) {
    			var sign = base.currentDispositionX/Math.abs(base.currentDispositionX);
    			base.totalDispositionX += (base.clientWidth - Math.abs(base.currentDispositionX))*sign;
    			// un-highlight circle of prev page
    	    	$('#'+base.idPrefix+base.disposition).css('opacity', 0.3);
    			base.disposition += (-1)*sign;
    			// highlight circle of first page
    			$('#'+base.idPrefix+base.disposition).css('opacity', 1);
    		}
//    		$(base.el).one('webkitTransitionEnd', function() {
//    			base.isAnimating = false;
//    		});
    		setTimeout(function() {
    			base.isAnimating = false;
    		},301);
    		base.el.style.webkitTransition = '-webkit-transform 300ms ease-in-out';
    		base.el.style.webkitTransform = 'translateX('+base.totalDispositionX+'px)';
    	});
    }
    
})(jQuery);