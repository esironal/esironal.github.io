/**
 *	UI Layout Callback: resizeTabLayout
 *
 *	Requires Layout 1.3.0.rc29.15 or later
 *
 *	This callback is used when a tab-panel is the container for a layout
 *	The tab-layout can be initialized either before or after the tabs are created
 *	Assign this callback to the tabs.show event:
 *	- if the layout HAS been fully initialized already, it will be resized
 *	- if the layout has NOT fully initialized, it will attempt to do so
 *		- if it cannot initialize, it will try again next time the tab is accessed
 *		- it also looks for ANY visible layout *inside* teh tab and resize/init it
 *
 *	SAMPLE:
 *	$("#elem").tabs({ show: $.layout.callbacks.resizeTabLayout });
 *
 *	Version:	1.0 - 2011-06-25
 *	Author:		Kevin Dalman (kevin@jquery-dev.com)
 */
;(function ($) {
var fN	= "resizeTabLayout"
,	_	= $.layout
;

// make sure the callbacks branch exists
if (!_.callbacks) _.callbacks = {};

// this callback is bound to the tabs.show event
_.callbacks[ fN ] = function (evt, ui_or_pane) {

alert( 'resizeTabLayout' );

	var $Els = $("");
alert( 'resizeTabLayout = '+ $Els.length );
	if (ui_or_pane.panel)
		$Els = $(ui.panel).find(".ui-layout-container:visible").andSelf();
	else if (ui_or_pane.jquery) {
		$Els = $ui_or_pane.find(".ui-layout-container:visible");
	alert( '$Els.length = '+ $Els.length );
	$Els.each(function(){
		var layout = $(this).data("layout");
		if (layout) layout.resizeAll();
	});
};
})( jQuery );