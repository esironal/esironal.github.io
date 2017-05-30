
$(document).ready( initBookmarks );

$(document).ready( initCollapsibleSections );


function initBookmarks () {
	// Table of Contents links
	$("#TOC")
		.find(".tocBtn").click( toggleTOC ).end()
		.find("A").click( scrollToBookmark )
		//.find("A").click( showCollapsibleSection ) // OLD
	;
	// Links in the center pane
	$("DIV.ui-layout-center A[href*=#]").click( scrollToBookmark );
	//.click( showCollapsibleSection );
};

function toggleTOC () {
	var $Btn = $(this)
	,	$List = $Btn.siblings("UL");
	if ($List.is(":visible")) {
		$List
			.css("width", $List.innerWidth())
			.slideUp('fast', function() {$(this).css("width","auto");})
		;
		$Btn.css({ backgroundImage: 'url("/lib/img/icon_tree_on.gif")' });
	}
	else {
		$List.slideDown('fast');
		$Btn.css({ backgroundImage: 'url("/lib/img/icon_tree_off.gif")' });
	}
};

function scrollToBookmark ( hash ) {
	// if triggered by A.click binding...
	if (hash == undefined || hash == '')
		return true;
	else if (typeof hash != 'string') {
		if (location.pathname.replace(/^\//,'') != this.pathname.replace(/^\//,'')
			|| location.hostname != this.hostname
		)
			return true;
		else {
			hash = this.hash;
			if (!hash || !hash.length) return true;
		}
	}

	// make sure section is 'open'
	showCollapsibleSection( hash );

	var $Pane	= $('.ui-layout-center');
	var $Target = $(hash);
	$Target = $Target.length && $Target || $('[name='+ hash.slice(1) +']');
	if ($Target.length) {
		var targetTop = $Target.offset().top;
		var paneTop = $Pane.offset().top;
		// absolute scrolling - ALWAYS from the top!
		//$Pane.animate({ scrollTop: targetTop +'px' }, 1000, 'linear', function(){
		// relative scrolling
		$Pane.animate({ scrollTop: '+='+ (targetTop - paneTop) +'px' }, 1000, 'linear', function(){
			self.location.replace( hash ); // make sure we scroll ALL the way!
		});
		return false; // cancel normal hyperlink
	}
};

function closeAllSections () {
	$('DIV.collapsible').hide();
	$('SPAN.expander')
		.removeClass("expander_open")
		.addClass("expander_closed")
	;
	return false; // cancel hyperlink
};

function openAllSections () {
	$('DIV.collapsible').show();
	$('SPAN.expander')
		.removeClass("expander_closed")
		.addClass("expander_open")
	;
	return false; // cancel hyperlink
};

function showCollapsibleSection (hash) {
	if (pageLayout && pageLayout.state.west.isSliding)
		pageLayout.close('west', true, true); // close Contents after selection - 2nd true = noAnimation
	var
		id = (typeof hash==="string" ? hash : $(this).attr("href"))
	,	$Heading = $( id )
	,	$Section = $Heading.next()
	;
	if ($Heading.prop("tagName") !== "H2")
		$Section = $Heading.parent().prev("H2").next(); // find main topic (H2)
	$Section.show(); // make sure section is not collapsed
};

function toggleCollapsibleSection () {
	var
		bookmark	= "#"+ this.id
	,	$Button		= $(this).children("SPAN.expander")
	,	$Section	= $(this).next()
	,	isVisible	= $Section.is(":visible")
	;
	$Button.removeClass("expander_open expander_closed");
	$Button.addClass(isVisible ? "expander_closed" : "expander_open");
	if (isVisible) {
		// use the cssWidth() if available - else use *inaccurate* innerWidth() method
		var innerWidth = (pageLayout) ? pageLayout.cssWidth($Section) : $Section.innerWidth()-6; // remove 2x3px padding
		$Section.css("width", innerWidth);
	}
	else
		self.location.replace( bookmark ); // scroll heading to top of page
	$Section.slideToggle('slow', function(){
		$Section.css("width","auto"); // RESET width
		if (!isVisible) self.location.replace( bookmark ); // scroll heading AGAIN
	}); 
};

function initCollapsibleSections () {
	$("DIV.collapsible")
		.hide()
		.prev("H2")
			.prepend("<span class='expander expander_closed' title='Expand/Collapse'></span>")
			.css({ cursor: "pointer" })
			.attr("title","Expand/Collapse")
			.hover(
				function() { $(this).next().addClass("highlightCollapsible"); }
			,	function() { $(this).next().removeClass("highlightCollapsible"); }
			)
			.click( toggleCollapsibleSection )
	;
};
