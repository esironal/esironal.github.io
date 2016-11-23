// global vars
var syncSwitch = true,
	editors = [
		['html',{}],
		['css',{}],
		['javascript',{}]
	];

// TogetherJS events
TogetherJS.hub.on("togetherjs.form-init", function (msg) {
	updateIframe();
});

TogetherJS.hub.on("renderKeyPress", function (msg) {
  updateIframe();
});

TogetherJS.hub.on("switchEditor", function (msg) {
  while(msg.currentMode != editors[0][0]){switchEditor()};
});

TogetherJS.on("ready", function (msg) {
	var eyeElm = document.querySelector('.eye');
	var collabBtnElm = document.getElementById('collaborateBtn');
	
	eyeElm.style.display = 'block';
	eyeElm.classList.remove('darkEye');
	eyeElm.classList.add('lightEye');
	
	collabBtnElm.style.color = '#FFFFFF';
	
	if( TogetherJS.require("peers").Self.isCreator ){
		var lockBtnElm = document.getElementById('lockBtn');
		var switchBtnElm = document.getElementById('switchBtn');
		
		lockBtnElm.style.display = 'block';
		lockBtnElm.setAttribute('class', '');
		lockBtnElm.classList.add('lightLock');
	
		switchBtnElm.style.display = 'block';
		switchBtnElm.setAttribute('class', '');
		switchBtnElm.classList.add('lightSwitch');
	}
});

TogetherJS.on("close", function (msg) {
	var eyeElm = document.querySelector('.eye');
	var collabBtnElm = document.getElementById('collaborateBtn');
	
	eyeElm.style.display = 'none';
	eyeElm.classList.remove('lightEye');
	eyeElm.classList.add('darkEye');
	
	collabBtnElm.setAttribute('style','');
	
	if( TogetherJS.require("peers").Self.isCreator ){
		var lockBtnElm = document.getElementById('lockBtn');
		var switchBtnElm = document.getElementById('switchBtn');
	
		lockBtnElm.style.display = 'none';
	
		switchBtnElm.style.display = 'none';
	}
});

TogetherJS.hub.on("togetherjs.hello", function (msg) {	
	TogetherJS.send({type: "modeUpdate",currentMode:editors[0][0]});
});

TogetherJS.hub.on("modeUpdate", function (msg) {
	// TODO: this solution depends on dataUpdate being received before TJ form-init and client editor already being init - needs QA
	if(TogetherJS.require("peers").Self.isCreator === false){
		while(msg.currentMode != editors[0][0]){switchEditor(msg.currentMode)};
	}
});

TogetherJS.hub.on("toggleLock", function (msg) {
		if(TogetherJS.require("peers").Self.isCreator === false){
			toggleLock();
		}
});

TogetherJS.hub.on("toggleSwitch", function (msg) {
		if(TogetherJS.require("peers").Self.isCreator === false){
			toggleSwitch();
		}
});

// Start main app functions

// Download content as file hack, file name may work depending on browser
// http://dtsn.me/2013/03/12/downloading-data-from-localstorage/	
function download() {
	var content = updateIframe();
  var tmpEl = document.createElement('a');
	var name = function(){
		var nameText = document.querySelector('.name').value;
		if(nameText){
			return (nameText.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g, '_').toLowerCase() + '.html');
		}else{
			return 'My_Website.html';
		}
	};
	// make sure you choose correct data type
  tmpEl.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
  tmpEl.setAttribute('download', name());
	// click event
  var event = new MouseEvent('click', {
  	'view': window,
    'bubbles': true,
    'cancelable': true
  });
  var clicked = !tmpEl.dispatchEvent(event);
}

// update render panel
function updateIframe(){
	var js,css,html;
	
	for (var i = 0; editors.length > i; i++){
		switch( editors[i][0] ){
			case 'html':
				html = editors[i][1].getSession().getValue() ? editors[i][1].getSession().getValue(): '<div style="font-family:monospace;color:#D1CACA;margin-top:31px;margin">Cycle Editors: Ctrl+j<br>Update Render: Update button or Ctrl+k<br>Resize Workspace: Ctrl+d<br>Resize Render: Ctrl+f</div>';
				break;
			case 'css':
				css = editors[i][1].getSession().getValue() ? editors[i][1].getSession().getValue().split('%C2%A0').join('') : '';
				break;
			case 'javascript':
				js = editors[i][1].getSession().getValue() ? editors[i][1].getSession().getValue() : '';
				break;
		}
	}
	
  var page = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0"><title>' + (document.querySelector('.name').value || 'My Website') + '</title><style>' + decodeURIComponent(css) + '</style></head><body>' + decodeURIComponent(html) + '<' + 'script>' + decodeURIComponent(js) + '<' + '/script></body></html>';
	var iframe = document.querySelector('div.rightColumn iframe');

  if (iframe.contentDocument){
  	doc = iframe.contentDocument;
  } else if(iframe.contentWindow) {
  	doc = iframe.contentWindow.document;
  } else {
  	doc = iframe.document;
  }

  doc.open();
  doc.writeln(page);
  doc.close();

	return page;
}

// resize panel
function resizePanel(panel){
	var e = (panel === 'rightColumn')? document.querySelector('.rightColumn') : document.querySelector('.leftColumn');
	
	if(e.style.zIndex === '5000'){
		
		if(e.getAttribute('class') === 'rightColumn'){
			e.style.left = '49.5%';
		}else{
			e.style.right = '50.5%'; 
		}
		e.removeAttribute("style");

	}else{
		
		if(e.getAttribute('class') === 'rightColumn'){
			e.style.left = 0;
		}else{
			e.style.right = 0;
		}
		e.style.zIndex = '5000';
	}
	// resize Ace editor
	editor.resize();
}

// Ctrl+j
function switchEditor(mode){
	if( editors && editors[0][1].getSession() ){
		if(!mode){
			editors.push(editors.shift());
			cycleEditors();
			document.getElementById('mode').innerHTML = editors[0][0].toUpperCase();
			if(TogetherJS && TogetherJS.running && syncSwitch){
					TogetherJS.send({type: "switchEditor",currentMode:editors[0][0]});
			}
		}else{
			editors.push(editors.shift());
			cycleEditors();
			document.getElementById('mode').innerHTML = editors[0][0].toUpperCase();
		}
	}
}

function cycleEditors(){
	for (var i=0;editors.length > i; i++){
		if(i === 0){
			document.getElementById(editors[i][0]).style.display = 'block';
		}else{
			document.getElementById(editors[i][0]).style.display = 'none';
		}
	}
	// don't put focus on panel if lock is on
	if( getComputedStyle( document.getElementById('lock') ,null).getPropertyValue('display') === 'none' ){
		editors[0][1].focus();
	}
}

// Ctrl+k
function updateEditor(){
	updateIframe();
	renderKeyPressMsg();
}

// show/hide TogetherJS UI
function toggleEye(){
	var elm = document.querySelector('.eye');
	if(elm.classList.contains('lightEye')){
		elm.classList.remove('lightEye');
		elm.classList.add('darkEye');
		document.getElementById('togetherjs-container').style.display = 'none';
	}else{
		elm.classList.remove('darkEye');
		elm.classList.add('lightEye');
		document.getElementById('togetherjs-container').style.display = 'block';
	}
}

// toggle help dialog
function toggleHelp(e){
	var elem = document.getElementById('helpMsg'); 
	var elemToClose = document.getElementById('aboutMsg');
	var elemToRemoveStyle = document.getElementById('aboutBtn');
	if(	getComputedStyle(elem,null).getPropertyValue('display') === 'none'  ){
		elemToClose.style.display = 'none';
		elemToRemoveStyle.removeAttribute("style");
		elem.style.display = 'block';
		e.target.style.color = '#FFFFFF'
	}else{
		elem.style.display = 'none';
		e.target.removeAttribute("style");
	}
}

// toggle help dialog
function toggleAbout(e){
	var elem = document.getElementById('aboutMsg');
	var elemToClose = document.getElementById('helpMsg');
	var elemToRemoveStyle = document.getElementById('helpBtn');
	
	if(	getComputedStyle(elem,null).getPropertyValue('display') === 'none' ){
		elemToClose.style.display = 'none';
		elemToRemoveStyle.removeAttribute("style");
		elem.style.display = 'block';
		e.target.style.color = '#FFFFFF'
	}else{
		elem.style.display = 'none';
		e.target.removeAttribute("style");
	}
}

// toggles ability of TogetherJS followers to manipulate panels
function toggleLock(){
		var lockElm = document.getElementById('lock');
		var lockElmBtn = document.getElementById('lockBtn');
		var isCreator = TogetherJS.require("peers").Self.isCreator;
		
		if(	lockElmBtn.classList.contains('darkLock') ){
			lockElmBtn.setAttribute('class','');
			lockElmBtn.classList.add('lightLock');
			if(isCreator){
				TogetherJS.send({type: "toggleLock"});
			}else{
				lockElm.style.display = 'none';
				editors[0][1].focus();
			}
		}else{
			lockElmBtn.setAttribute('class','');
			lockElmBtn.classList.add('darkLock');
			if(isCreator){
				TogetherJS.send({type: "toggleLock"});
			}else{
				lockElm.style.display = 'block';
				document.activeElement.blur(); // removes focus from panel
			}
		}
}

// toggles ability of TogetherJS collaborators syncing panel view
function toggleSwitch(){
	var switchElmBtn = document.getElementById('switchBtn');
	var isCreator = TogetherJS.require("peers").Self.isCreator;
	
	if(syncSwitch){
		syncSwitch = false;
		switchElmBtn.setAttribute('class','');
		switchElmBtn.classList.add('darkSwitch');
	}else{
		syncSwitch = true;
		switchElmBtn.setAttribute('class','');
		switchElmBtn.classList.add('lightSwitch');
		// get non-creators back in sync before anyone switches
		if(isCreator){
			TogetherJS.send({type: "modeUpdate",currentMode:editors[0][0]});
		}
	}
	
	if(isCreator){
		TogetherJS.send({type: "toggleSwitch"});
	}
}

// pretty print code in panels
function formatPanels(){
	for (var i = 0; editors.length > i; i++){
		editors[i][1].getSession().setValue( Beautifier[ editors[i][0] ]( editors[i][1].getSession().getValue() ) );
	}
	editors[0][1].focus();
}

// init Ace editors
function initAce(){
	
	for(var i=0; editors.length > i; i++){		
	  editors[i][1] = ace.edit(editors[i][0]);
	  editors[i][1].setTheme("ace/theme/monokai");
	  editors[i][1].getSession().setMode("ace/mode/"+editors[i][0]);
		editors[i][1].setShowPrintMargin(false);
		editors[i][1].$blockScrolling = Infinity; // prevents unnecessary messaging in console
		editors[i][1].setOptions({highlightActiveLine:false});
		
		editors[i][1].commands.addCommand({
			name: 'switchEditor',
			bindKey: {
				win: 'Ctrl-J',
				mac: 'Ctrl-J',
				sender: 'editor|cli'
			},
			exec: function(env, args, request) {
					switchEditor();
				}
		});
		editors[i][1].commands.addCommand({
			name: 'updateEditor',
			bindKey: {
				win: 'Ctrl-K',
				mac: 'Ctrl-K',
				sender: 'editor|cli'
			},
			exec: function(env, args, request) {
				updateEditor();
			}
		});
		editors[i][1].commands.addCommand({
			name: 'resizeLeftPanel',
			bindKey: {
				win: 'Ctrl-D',
				mac: 'Ctrl-D',
				sender: 'editor|cli'
			},
			exec: function(env, args, request) {
				resizePanel('leftColumn');
			}
		});
		editors[i][1].commands.addCommand({
			name: 'resizeRightPanel',
			bindKey: {
				win: 'Ctrl-F',
				mac: 'Ctrl-F',
				sender: 'editor|cli'
			},
			exec: function(env, args, request) {
				resizePanel('rightColumn');
			}
		});
	} // end for
	
	editors[0][1].focus();

}

// utils
function renderKeyPressMsg() {
  if(TogetherJS.running){
  	TogetherJS.send({type: "renderKeyPress"});
  }
}

// onload...
document.addEventListener('DOMContentLoaded', function(){
	initAce();
	updateIframe();
	// listeners
	document.querySelector('#updateBtn').addEventListener('click', updateIframe, false );
	document.querySelector('#downloadBtn').addEventListener('click', download, false );
	document.querySelector('#helpBtn').addEventListener('click', toggleHelp, false );
	document.querySelector('#aboutBtn').addEventListener('click', toggleAbout, false );
	document.querySelector('#lockBtn').addEventListener('click', toggleLock, false );
	document.querySelector('#switchBtn').addEventListener('click', toggleSwitch, false );
	document.querySelector('#formatBtn').addEventListener('click', formatPanels, false );
	document.querySelector('#collaborateBtn').addEventListener('click', TogetherJS, false );
	document.querySelector('.eye').addEventListener('click', toggleEye, false );
});

/*

Use your own product, be your most active customer!

TODO:
- Add Edit nav
	- add Head (html/head/body)
	- move Format under Edit

- Save content
	https://github.com/mozilla/localForage

- Create normalize.css file (test on diff. browsers)?

- Refactor
		- switchToggle uses var to define state, lockToggle uses class

- Add quick load of library/examples (jQuery,D3,ThreeJS...etc.), UX (text search?)
	- Babel Support

- Add learning panel
	- Voice and keyboard recording?
	- Youtube?
	- Web hub for sharing
	- sync learning panel with Collaborate?

- Mobile UX
	- add icon controls for tablet users

- Multi-language support
	https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/

- include one app in another
	- prevent recursion
- link to different files
- Login? Need to think about how this will affect user if added later (lose all local data)
	- login cookies can get stolen

- Add beta flag / name 
- get domain .com .rocks .school .site .team .page .education .academy .exchange .website .link .band
	htmlnoobs.com pairide.com pearide.com paireditor.com peareditor.com oiceditor.com oicedit.com
	peepseditor.com htmltogether.com htmlpartner.com synceditor.com sinkeditor.com webbudz.com webudz.com
	online real time editor partner pair program web page tutor teach learn together connect collaborate html css js render
	buddy cohort comrade pal helper sidekick playmate sync 

*/