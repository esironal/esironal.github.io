$.ui.dialog.prototype.options.showMaximizeControll = true;
$.ui.dialog.prototype.options.showMinimizeControll = true;
(function($){
	var openOld = $.ui.dialog.prototype.open;
	$.ui.dialog.prototype.open = function() {
		var self = this;
		uiDialogTitlebar = this.uiDialogTitlebar;
		if(this.options.showMinimizeControll) {
			uiDialogTitlebar.append('<a href="#" id="dialog-minimize" class="dialog-minimize ui-dialog-titlebar-min"><span class="ui-icon ui-icon-minusthick"></span></a>');
			this.uiDialogTitlebarMin = $('.dialog-minimize', uiDialogTitlebar).hover(
				function(){ $(this).addClass('ui-state-hover'); }, 
				function(){ $(this).removeClass('ui-state-hover');
			}).click(function(){ self.minimize(); return false; });
		}
		if(this.options.showMaximizeControll) {
			uiDialogTitlebar.append('<a href="#" id="dialog-maximize" class="dialog-maximize ui-dialog-titlebar-max"><span class="ui-icon ui-icon-maximize"></span></a>');
			this.uiDialogTitlebarMin = $('.dialog-maximize', uiDialogTitlebar).hover(
				function(){ $(this).addClass('ui-state-hover'); }, 
				function(){ $(this).removeClass('ui-state-hover');
			}).click(function(){ self.maximize(); return false; });
		}
		openOld.apply(this);
	};
	
	$.extend($.ui.dialog.prototype, {
		minimize: function() {
			if(!this.options.showMinimizeControll || this.uiDialog.find('#disable').first().css('z-index') != '-1')
				return;
			var tab = $('#' + this.uiDialog.attr('DLG-ID') + '_tb');
			if(tab.hasClass('task-bar-item-selected')) {
				tab.removeClass('task-bar-item-selected');
				tab.addClass('task-bar-item');
			}
			this.uiDialog.animate({ opacity: 'hide', top: 'hide' }, 'fast');
			this.minimized = true; 
		},
		restore: function() {
			if(this.minimized) {
				this.uiDialog.animate({ opacity: 'show', top: 'show' }, 'fast');
			}
		},
		maximize: function() {
			if(!this.options.showMaximizeControll) return;
			if(!this.maximized) {
				this.maximized = true;
				this.uiDialog.addClass('maximized');
				this.uiDialog.find('.ui-dialog-titlebar-max').find('.ui-icon').removeClass('ui-icon-maximize').addClass('ui-icon-restore');
				this.wasResizable = this.uiDialog.dialog('option', 'resizable');
				this.uiDialog.dialog('option', 'resizable', false);
				$("#" + this.uiDialog.attr('DLG-ID')).dialog({draggable:false, resizable:false});
			} else {
				this.maximized = false;
				this.uiDialog.removeClass('maximized');
				this.uiDialog.find('.ui-dialog-titlebar-max').find('.ui-icon').removeClass('ui-icon-restore').addClass('ui-icon-maximize');
				$("#" + this.uiDialog.attr('DLG-ID')).dialog({draggable:true, resizable:this.wasResizable});
				this.uiDialog.draggable("option", "containment", "#dialogs");
			}
		}
	});
})(jQuery);

function UICommand(name, icon, onExecute) { this.name = name; this.icon = icon; this.onExecute = onExecute; }

function MenuItem(name, icon) { this.menuItems = new Array(); this.name = name; this.icon = icon; }
MenuItem.prototype.addMenuItem = function(menuItem) { this.menuItems[this.menuItems.length] = menuItem; }

function DialgDesktopReference(dlgId) { this.dlgId = dlgId; this.eventsList = new Array(); }

DialgDesktopReference.prototype.createChildDialog =  function (url, callbacks) { parent.document.desktop.createChildDialog(this.dlgId, url, callbacks); }
DialgDesktopReference.prototype.createDialog =  function (url) { parent.document.desktop.createDialog(url); }
DialgDesktopReference.prototype.callback = function (method, value) { var frame = $('#' + this.parentDlg + '_fr').get(0); frame.contentWindow[this.callbacks[method]](value); }
DialgDesktopReference.prototype.registerEvent = function (eventId, script) { if(!this.eventsList[eventId]) this.eventsList[eventId] = new Array(); (this.eventsList[eventId])[this.eventsList[eventId].length] = script; }
DialgDesktopReference.prototype.publishEvent = function (eventId, value) {
	for(var i=0; i < parent.frames.length; ++i) {
		var frame = parent.frames[i];
		if(frame.desktop)
		if(frame.desktop.eventsList && frame.desktop.eventsList[eventId]) {
			var calls = frame.desktop.eventsList[eventId];
			for(var j = 0; j < calls.length; ++j)
				calls[j](value);
		}
	}
}
DialgDesktopReference.prototype.setDialogBusy = function () { parent.document.desktop.setDialogBusy(this.dlgId); }
DialgDesktopReference.prototype.setDialogNotBusy = function () { parent.document.desktop.setDialogNotBusy(this.dlgId); }
DialgDesktopReference.prototype.showModalInfoMessage = function (title, text) { parent.document.desktop.showModalInfoMessage(this.dlgId, title, text); }
DialgDesktopReference.prototype.showModalErrorMessage = function (title, text) { parent.document.desktop.showModalErrorMessage(this.dlgId, title, text); }
DialgDesktopReference.prototype.showInfoMessage = function (title, text) { parent.document.desktop.showInfoMessage(title, text); }
DialgDesktopReference.prototype.showErrorMessage = function (title, text) { parent.document.desktop.showErrorMessage(title, text); }
DialgDesktopReference.prototype.closeDialog = function () { parent.document.desktop.closeDialog(this.dlgId); }
DialgDesktopReference.prototype.reloadDialog = function () { var frame = $(parent.document).find('#' + this.dlgId + '_fr'); frame.attr('src', frame.attr('src')); }

function Desktop() {
	this.mainMenu = new Array();
	this.desktopIcons = new Array();
	this.widgets = new Array();
	this.dialogIdCounter = 0;
	this.events = new Object();
}

Desktop.prototype.addMainMenuItem = function(menuItem) { this.mainMenu[this.mainMenu.length] = menuItem; }
Desktop.prototype.addDesktopIcon = function(menuItem) { this.desktopIcons[this.desktopIcons.length] = menuItem; }

Desktop.prototype.setDialogBusy = function(dlgId) {
	$('#' + dlgId).dialog("widget").find('#dialogStatusBar').find('#busy').css('display','block');
	$('#' + dlgId).dialog("widget").find('#block-div').css('display','block');
}
Desktop.prototype.setDialogNotBusy = function(dlgId) {
	$('#' + dlgId).dialog("widget").find('#dialogStatusBar').find('#busy').css('display','none');
	$('#' + dlgId).dialog("widget").find('#block-div').css('display','none');
}

Desktop.prototype.showErrorMessage = function(theTitle, message) {
	var theDlg = $('#' + this.createDialog('dweb/dialogs/error_message.html'));
	theDlg.dialog('widget').find('#dialogStatusBar').remove();
	theDlg.dialog('widget').find('#dlg-content').css('bottom', '0px');
	theDlg.dialog('widget').find('iframe').load(function() {
				theDlg.dialog('widget').find('#dlg-icon').remove();
				$('#' + theDlg.attr('id') + '_tb').remove();
				theDlg.dialog('widget').find('#dlg-title').html(theTitle);
				$('body', theDlg.dialog('widget').find('iframe').contents()).find("#message").html(message);
					theDlg.dialog('option','height',$(theDlg.dialog('widget').find('iframe').get(0).contentWindow.document).height() + 84);
			});
	theDlg.dialog({
		modal : false,
		resizable : false,
		showMaximizeControll: false,
		showMinimizeControll: false,
		buttons : [ { text : 'OK', click : function() { $(this).dialog('close'); } } ],
		dialogClass: "desktop-dialog info-message error-message"
	});
	var buttonsPanel = theDlg.dialog('widget').find('.ui-dialog-buttonpane');
	buttonsPanel.addClass('zero-margin');
}

Desktop.prototype.showModalErrorMessage = function(parentDlgId, theTitle, message) {
	var theDlg = this.createChildDialog(parentDlgId, 'dweb/dialogs/error_message.html');
	theDlg.dialog('widget').find('#dialogStatusBar').remove();
	theDlg.dialog('widget').find('#dlg-content').css('bottom', '0px');
	theDlg.dialog('widget').find('iframe').load(function() {
				theDlg.dialog('widget').find('#dlg-icon').remove();
				$('#' + theDlg.attr('id') + '_tb').remove();
				theDlg.dialog('widget').find('#dlg-title').html(theTitle);
				$('body', theDlg.dialog('widget').find('iframe').contents()).find("#message").html(message);
					theDlg.dialog('option','height',$(theDlg.dialog('widget').find('iframe').get(0).contentWindow.document).height() + 84);
			});
	theDlg.dialog({
		modal : false,
		resizable : false,
		showMaximizeControll: false,
		showMinimizeControll: false,
		buttons : [ { text : 'OK', click : function() { $(this).dialog('close'); } } ],
		dialogClass: "desktop-dialog info-message error-message"
	});
	var buttonsPanel = theDlg.dialog('widget').find('.ui-dialog-buttonpane');
	buttonsPanel.addClass('zero-margin');
}

Desktop.prototype.showInfoMessage = function (theTitle, message) {
	var theDlg = $('#' + this.createDialog('dweb/dialogs/info_message.html'));
	theDlg.dialog('widget').find('#dialogStatusBar').remove();
	theDlg.dialog('widget').find('#dlg-content').css('bottom', '0px');
	theDlg.dialog('widget').find('iframe').load(function() {
				theDlg.dialog('widget').find('#dlg-icon').remove();
				$('#' + theDlg.attr('id') + '_tb').remove();
				theDlg.dialog('widget').find('#dlg-title').html(theTitle);
				$('body', theDlg.dialog('widget').find('iframe').contents()).find("#message").html(message);
					theDlg.dialog('option','height',$(theDlg.dialog('widget').find('iframe').get(0).contentWindow.document).height() + 84);
			});
	theDlg.dialog({
		modal : false,
		resizable : false,
		showMaximizeControll: false,
		showMinimizeControll: false,
		buttons : [ { text : 'OK', click : function() { $(this).dialog('close'); } } ],
		dialogClass: "desktop-dialog info-message"
	});
	var buttonsPanel = theDlg.dialog('widget').find('.ui-dialog-buttonpane');
	buttonsPanel.addClass('zero-margin');
}

Desktop.prototype.showModalInfoMessage = function (parentDlgId, theTitle, message) {
	var theDlg = this.createChildDialog(parentDlgId, 'dweb/dialogs/info_message.html');
	theDlg.dialog('widget').find('#dialogStatusBar').remove();
	theDlg.dialog('widget').find('#dlg-content').css('bottom', '0px');
	theDlg.dialog('widget').find('iframe').load(function() {
				theDlg.dialog('widget').find('#dlg-icon').remove();
				$('#' + theDlg.attr('id') + '_tb').remove();
				theDlg.dialog('widget').find('#dlg-title').html(theTitle);
				$('body', theDlg.dialog('widget').find('iframe').contents()).find("#message").html(message);
					theDlg.dialog('option','height',$(theDlg.dialog('widget').find('iframe').get(0).contentWindow.document).height() + 84);
			});
	theDlg.dialog({
		modal : false,
		resizable : false,
		showMaximizeControll: false,
		showMinimizeControll: false,
		buttons : [ { text : 'OK', click : function() { $(this).dialog('close'); } } ],
		dialogClass: "desktop-dialog info-message"
	});
	var buttonsPanel = theDlg.dialog('widget').find('.ui-dialog-buttonpane');
	buttonsPanel.addClass('zero-margin');
}

Desktop.prototype.moveDialogToTop = function (dlgId) {
	var dlg = $('#' + dlgId);
	if(dlg.dialog('widget').css('display') == 'none')
		dlg.dialog("restore");
	dlg.dialog('moveToTop');
}

Desktop.prototype.invokeDialogTabItemClick = function (dlgId) {
	var dlg = $('#' + dlgId);
	if($('#' + dlgId + '_tb').hasClass('task-bar-item-selected'))
		dlg.dialog('minimize');
	else {
		this.moveDialogToTop(dlgId);
	}
}

Desktop.prototype.fixDailogIframe = function (dlgId, mode) {
	if (mode == 1) $('#' + dlgId + '> #dragFix').attr('style', 'z-index:1; position: absolute;width:100%;height:100%;background:transparent;');
	else $('#' + dlgId + '> #dragFix').attr('style', 'z-index:-1; position: absolute;width:100%;height:100%;background:transparent;');
}

Desktop.prototype.selectDialog = function (dlgId) {
	var selectedTb = $('.task-bar-item-selected');
	selectedTb.removeClass('task-bar-item-selected');
	selectedTb.addClass('task-bar-item');
	$('#' + dlgId + '_tb').addClass('task-bar-item-selected');
	$('.desktop-dialog').find('[id^=ui-dialog-title]').attr('style', 'color:black');
	$('.desktop-dialog').find('[id^="ui-dialog-title-dialog_"]').parent()
			.removeClass("selected-dialog");
	$('.desktop-dialog').find('#ui-dialog-title-' + dlgId).attr('style', 'color:white');
	$('.desktop-dialog').find('#ui-dialog-title-' + dlgId).parent().addClass("selected-dialog");
}

Desktop.prototype.closeDialog = function (dlgId) {
	var dlg = $('#' + dlgId);
	if(dlg.dialog("widget").find('#disable').first().css('z-index') != '-1')
		return;
	$('#' + dlgId + '_tb').remove();
	this.rebuildTaskBar();
	dlg.remove();
}

Desktop.prototype.createChildDialog = function (parentDlgId, url, callbacks) {
	var self = this;
	var dlgId = this.createDialog(url);
	var parentDlg = $('#' + parentDlgId);
	parentDlg.attr('IsParent', 'true');
	var theDlg = $('#' + dlgId);
	theDlg.dialog({
		open: function(event, ui) { 
			var parentTopPos = parentDlg.dialog("widget").css('top');
			parentTopPos = parentTopPos.substring(0, parentTopPos.length - 2);
			var parentLeftPos = parentDlg.dialog("widget").css('left');
			parentLeftPos = parentLeftPos.substring(0, parentLeftPos.length - 2);
			var leftPos = 0;
			var topPos = 0;
			if(theDlg.width() < parentDlg.width()) leftPos = parentLeftPos * 1 + (parentDlg.width() - theDlg.width()) / 2.0;
			else leftPos = parentLeftPos * 1 - (theDlg.width() - parentDlg.width()) / 2.0;
			if(theDlg.height() < parentDlg.height()) topPos = parentTopPos * 1 + (parentDlg.height() - theDlg.height()) / 2.0;
			else topPos = parentTopPos * 1 - (theDlg.height() - parentDlg.height()) / 2.0;
			theDlg.dialog("option", "position", [leftPos < 0 ? 0 : leftPos, topPos < 30 ? 30 : topPos]);
			var frame = $('#' + dlgId + '_fr').get(0);
			if(frame.contentWindow.document.desktop) {
				frame.contentWindow.document.desktop.callbacks = callbacks;
				frame.contentWindow.document.desktop.parentDlg = parentDlgId;
			}
		},
		close: function(event, ui) {
			self.closeDialog(this.id);
			var dlg = $('#' + parentDlgId);
			dlg.dialog('widget').find('#disable').first().css('z-index', '-1');
			dlg.dialog({focus : function(event, ui) { self.selectDialog(this.id); }, draggable: true});
			dlg.dialog("widget").draggable("option", "containment", "#dialogs");
			parentDlg.attr('IsParent', 'false');
			self.selectDialog(parentDlgId);
		}
	});
	parentDlg.dialog('widget').find('#disable').first().css('z-index', '1000000');
	parentDlg.dialog({draggable: false, focus: function(event, ui) {
		self.moveDialogToTop(dlgId);
		var parentDlgTitle = $('#ui-dialog-title-' + parentDlgId).parent();
		var chidDlgTitle = $('#ui-dialog-title-' + dlgId).parent();
		chidDlgTitle.removeClass("selected-dialog");
		if($('#' + dlgId).dialog("isOpen")) {
			setTimeout(function() {
				chidDlgTitle.addClass("selected-dialog");
				setTimeout(function() {
					chidDlgTitle.removeClass("selected-dialog");
					setTimeout(function() {
						chidDlgTitle.addClass("selected-dialog");
					}, 100);
				}, 100);
			}, 100);
		}
	}});
	return theDlg;
}

Desktop.prototype.createDialog = function (url) {
	var dlgId = 'dialog_' + this.dialogIdCounter;
	var dlg = $('<div id="' + dlgId + '" title="Dialog ' + this.dialogIdCounter + '"><div id="dragFix" /><div id="dlg-content"></div></div>');
	var dlgFrame = $('<iframe id="' + dlgId + '_fr" style="background:white; width:100%; height:100%; display:block" frameborder="0"></iframe>');
	dlg.find('#dlg-content').append(dlgFrame);
	$('#workspace').append(dlg);
	var self = this;
	dlg.dialog({
		dialogClass : "desktop-dialog",
		close : function(event, ui) { self.closeDialog(this.id); },
		focus : function(event, ui) { self.selectDialog(this.id); },
		resizeStart : function(event, ui) { self.fixDailogIframe(this.id, 1); },
		resizeStop : function(event, ui) { self.fixDailogIframe(this.id, 0); },
		dragStart : function(event, ui) { self.fixDailogIframe(this.id, 1); },
		dragStop : function(event, ui) { self.fixDailogIframe(this.id, 0); },
		autoOpen : false,
		bgiframe : true
	});
	dlg.dialog("widget").append('<div id="disable" />');
	dlg.dialog("widget").attr('DLG-ID', dlgId);
	dlg.dialog("widget").draggable("option", "containment", "#dialogs");
	dlg.dialog("widget").append('<div id="dialogShadow" style="z-index:-1; background:transparent; position:absolute; top:0px; bottom:0px; left:0px; right:0px"><div class="dlg-shadow-left" /><div class="dlg-shadow-right" /><div class="dlg-shadow-top" /><div class="dlg-shadow-bottom" /><div class="dlg-shadow-top-right" /><div class="dlg-shadow-top-left" /><div class="dlg-shadow-bottom-right" /><div class="dlg-shadow-bottom-left" /></div>');
	dlg.dialog("widget").append('<div id="block-div" /><div id="dialogStatusBar" class="dialog-status-bar"><div id="busy" class="dialog-busy"><img src="dweb/images/busy.gif" /><label>Loading</label></div><div id="status-label" class="status-label" /></div>');
	dlgFrame.attr('src', url);
	dlgFrame.load(function() {
		var dlgId = this.parentNode.parentNode.id
		var dlg = $('#' + dlgId);
		var frame = $("#" + this.id).get(0);
		frame.contentWindow.document.dialog = {id: dlgId};
		frame.contentWindow.desktop = new DialgDesktopReference(dlgId);
		frame.contentWindow.desktop.events = self.events;
		var frameContents = $("#" + this.id).contents();
		var title = frameContents.find('title').text();
		var width = frameContents.find('meta[name="dialog-width"]').attr("content");
		var height = frameContents.find('meta[name="dialog-height"]').attr("content");
		var resizable = frameContents.find('meta[name="dialog-resizable"]').attr("content");
		var showMaximizeControll = frameContents.find('meta[name="dialog-showMaximizeControll"]').attr("content");
		var showMinimizeControll = frameContents.find('meta[name="dialog-showMinimizeControll"]').attr("content");
		var icon = frameContents.find('meta[name="dialog-icon"]').attr("content");
		if(!icon) icon = 'dweb/images/dialog_icon.png';
		frameContents.find('body').append('<div id="DIALOG" data-dialogId="' + dlgId + '"/>');
		$(frame.contentWindow.document, 'body').bind('click',function() { self.moveDialogToTop(dlgId); });
		if (title) dlg.dialog('option', 'title', '<div class="dialog-title"><img id="dlg-icon" src="' + icon + '"/><label id="dlg-title">' + title + '</label></div>');
		else dlg.dialog('option', 'title', 'New Dialog');
		if(resizable) dlg.dialog('option', 'resizable', resizable == "true");
		if(showMaximizeControll) dlg.dialog('option', 'showMaximizeControll', showMaximizeControll == "true");
		if(showMinimizeControll) dlg.dialog('option', 'showMinimizeControll', showMinimizeControll == "true");
		if(dlg.attr('loaded') !== 'true')
			dlg.dialog('open');
		if(dlg.attr('loaded') !== 'true') {
			if (width) dlg.dialog('option', 'width', width);
			else dlg.dialog('option','width',$(frame.contentWindow.document).width() + 8);
			if (height) dlg.dialog('option', 'height', height * 1 + 22);
			else dlg.dialog('option','height',$(frame.contentWindow.document).height() + 44);
		} else {
			if (width) dlg.dialog('option', 'width', width);
			else dlg.dialog('option','width',$(frame.contentWindow.document).width());
			if (height) dlg.dialog('option', 'height', height * 1 + 22);
			else dlg.dialog('option','height',$(frame.contentWindow.document).find('body').height() + 60);		
		}
		if(dlg.attr('loaded') !== 'true')
			dlg.dialog( "option", "position", "center");
		if($('#' + this.parentNode.id + '_tb').size() != 1) {
			var tabTitle = title;
			if($('#' + dlgId + '_tb').size() == 0) {
				$('#taskBar')
				.append('<td id="' + dlgId + '_tb" title="' + title
					+ '" class="task-bar-item-panel dialog-taskbar-title task-bar-item-selected" ' + 
					'onmouseover="$(this).find(\'#closeTB\').css(\'visibility\',\'visible\');" ' + 
					'onmouseout="$(this).find(\'#closeTB\').css(\'visibility\',\'hidden\');" >' + 
					'<table cellpadding="0" cellspacing="0"><tr><td class="left"><div style="width:8px"/>' + 
					'</td><td class="center"><img src="' + icon + '" class="taskbar-dialog-icon"/><span>'
					+ tabTitle
					+ '</span><img id="closeTB" src="dweb/images/close_tb.png" class="close-tb-item" /></td><td class="right"><div style="width:8px"/></td></tr></table></td>');
				taskbarItem = $('#taskBar').find('#' + dlgId + '_tb');
				taskbarItem.bind('click', function() { document.desktop.invokeDialogTabItemClick(dlgId); });
				taskbarItem.find('#closeTB').bind('click', function() {
					var dlg = $('#' + dlgId);
					if(dlg.attr('IsParent') === 'true') {
						document.desktop.invokeDialogTabItemClick(dlgId);
					} else {
						$('.task-bar-item').mouseout(); 
						$('.task-bar-item-selected').mouseout();
						$('#' + dlgId).dialog("close");
					}
				});
				$(".task-bar-item-selected").tipTip();
				self.rebuildTaskBar();
			}
		}
		if(frame.contentWindow.document.onReady){
			frame.contentWindow.document.onReady();
		}
		dlg.attr('loaded', 'true');
	});
	this.dialogIdCounter++;
	return dlgId;
}

Desktop.prototype.buildMenu = function (menu, menuTree) {
	for ( var i = 0; i < menuTree.length; ++i) {
		var item = menuTree[i];
		var menuItem = $('<li class="menu-item" />');
		var menuItemContent = $('<a href="#">' + item.name + '</a>');
		if (item.icon) menuItemContent.append('<img class="menu-icon" src="' + item.icon + '"/>');
		else menuItemContent.append('<img class="menu-icon" src="dweb/images/empty-menu-icon.png" style="z-index: -1;"/>');
		if (item instanceof MenuItem && item.menuItems.length > 0) {
			menuItemContent.append('<img class="menu-arrow" src="dweb/images/menu-arrow.png"/>');					
			if (item.menuItems.length > 0) {
				var subMenu = $('<ul class="menu-list"><div class="list-decorator"/></ul>');
				this.buildMenu(subMenu, item.menuItems);
				menuItem.append(subMenu);
			}
		} else if (item instanceof UICommand) menuItemContent.bind('click', item.onExecute);
		menuItem.append(menuItemContent);
		menu.append(menuItem);
	}
}

Desktop.prototype.arrangeDesktopIcons = function () {
	var startIconX = 10;
	var startIconY = 20;
	var maxIconY = $('#desktopIcons').height();
	$('.desktop-icon').each(function() {
		if (startIconY + 80 > maxIconY) { startIconY = 20; startIconX += 100; }
		$(this).css({ position: 'absolute', left : startIconX, top : startIconY });
		startIconY += 80;
	});
}

Desktop.prototype.buildDesktopIcons = function () {
	for ( var i = 0; i < this.desktopIcons.length; ++i) {
		var newIcon = $('<div id="desktopIcon'
				+ i
				+ '" class="desktop-icon" onclick="$(\'.selected-dk-icon\').removeClass(\'selected-dk-icon\'); $(this).addClass(\'selected-dk-icon\');"><div class="top-line" /><div class="content"><img src="'
				+ this.desktopIcons[i].icon + '" /><span title="'
				+ this.desktopIcons[i].name + '">' + this.desktopIcons[i].name
				+ '</span></div><div class="bottom-line" /></div>');
		if (this.desktopIcons[i].onExecute)
			newIcon.bind('dblclick', this.desktopIcons[i].onExecute);
		$('#desktopIcons').append(newIcon);
	}
	$(".desktop-icon > span").tipTip({ defaultPosition : "right" });
	$(".desktop-icon").draggable({containment: "#desktopIcons"});
	this.arrangeDesktopIcons();
}

Desktop.prototype.rebuildTaskBar = function () {
	var maxLength = 85;
	if($(".task-bar-item-panel").size() * 146 > $("#taskbar-banner").width() - 100)
		maxLength = (($("#taskbar-banner").width() - 100) / $(".task-bar-item-panel").size()) - 58;
	var length = $('<span id="tab_title_length" style="visibility:hidden; white-space:nowrap" class="dialog-taskbar-title"></span>');
	$('#workspace').append(length);
	$(".task-bar-item-panel").each(function(){
		var title = $(this).attr('org_title');
		var newTitle = '';
		length.html(newTitle);
		while(newTitle.length < title.length && length.width() < maxLength) {
			newTitle += title.charAt(newTitle.length);
			length.html(newTitle + "...");
		}
		if(newTitle.length < title.length)
			newTitle = newTitle.substring(0, newTitle.length - 1)
		if(newTitle.length < title.length && newTitle.length != 0)
			newTitle += "...";
		$(this).find('.center').css('width','130px').find('span').html(newTitle);
	});
	length.remove();
}

Desktop.prototype.buildDesktopContextMenu = function () {
	var contextMenu = $('<ul id="desktop-context-menu" class="jeegoocontext cm_default" />');
	contextMenu.append('<li id="arrangeIcons" class="icon"><span class="icon arrange-icons"></span>Arrange Icons</li>');
	$('#workspace').append(contextMenu);
	var self = this;
	$('#desktopIcons').jeegoocontext('desktop-context-menu', {
			onSelect: function(e, context){
			switch($(this).attr('id')) {
				case 'arrangeIcons':
					self.arrangeDesktopIcons();
				break;
			}
		}
	});
}

Desktop.prototype.initDesktop = function () {
	
	document.desktop = this;

	jQuery.fn.append = function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 ) {
				this.appendChild = document.appendChild; this.appendChild( elem );
			}
		});
	};
	
	$('body').append('<div id="workspace" style="position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px;" />');

	var mainMenu = $('<ul id="main-menu-navigation-list"><li><a id="start-button" href="#"/><ul id="startMenuContainer" class="menu-list"><div class="list-decorator"/></ul></li></ul>');
	$('#workspace').append(mainMenu);
	this.buildMenu($('#startMenuContainer'), this.mainMenu);
	$("#main-menu-navigation-list").supersubs().superfish();

	taskbar = $('<div id="taskbar-banner" />');
	taskbar.attr('style', 'width:' + $('#workspace').width() + 'px;');
	taskbar.append('<table cellpadding="0" cellspacing="0" style="margin-left:100px;"><tr id="taskBar"></tr></table>');

	$('#workspace').append(taskbar);
	$('#workspace').append('<div id="dialogs" style="position: absolute; top: 30px; bottom: 0px; left: 0px; right: 0px;" />');

	for ( var i = 0; i < this.widgets.length; ++i) {
		$('#workspace')
			.append(
				'<iframe id="widget' + i + '" src="' + widgets[i].url + '" style="' + widgets[i].style
				+ '" allowTransparency="allowtransparency" frameborder="0"></iframe>');
	}

	$(window).resize( function() { $('#taskbar-banner').attr('style', 'width:' + $('#workspace').width() + 'px;'); });
	$('#workspace').append('<div id="desktopIcons" style="position: absolute; top: 30px; bottom: 0px; left: 0px; right: 0px;" />');

	this.buildDesktopIcons();
	
	$(window).resize(function() { 
		$('#taskbar-banner').attr('style', 'width:' + $('#workspace').width() + 'px;'); 
		document.desktop.arrangeDesktopIcons();
		document.desktop.rebuildTaskBar();
	});
	
	$('#desktopIcons').disableSelection();
	$('#taskbar-banner').disableSelection();
	this.buildDesktopContextMenu();
}