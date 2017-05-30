/**
 *	UI Layout Callback: resizeTabLayout
 *
 *	Version:	1.2 - 2012-01-13
 *	Author:		Kevin Dalman (kevin@jquery-dev.com)
 */
(function(b){var a=b.layout;a.callbacks||(a.callbacks={});a.callbacks.resizeTabLayout=function(a,c){(c.jquery?c:b(c.panel)).filter(":visible").find(".ui-layout-container:visible").andSelf().each(function(){var a=b(this).data("layout");a&&(a.options.resizeWithWindow=!1,a.resizeAll())})}})(jQuery);