var HTMLeditor = CodeMirror.fromTextArea(document.getElementById("HTMLeditor"), {
  lineNumbers: true,
  mode:  "xml",
  theme: "base16-light",
  tabSize: 2,
  lineWrapping: false
});

var CSSeditor = CodeMirror.fromTextArea(document.getElementById("CSSeditor"), {
  lineNumbers: true,
  mode:  "css",
  theme: "base16-light",
  tabSize: 2,
  lineWrapping: false
});

var JSeditor = CodeMirror.fromTextArea(document.getElementById("JSeditor"), {
  lineNumbers: true,
  mode:  "javascript",
  theme: "base16-light",
  tabSize: 2,
  lineWrapping: false
});

function getPen() {
  var pen = document.getElementsByTagName('input')[0].value;

  var penHTML = pen + '.html';
  var penCSS = pen + '.css';
  var penJS = pen + '.js';

  var requestHTML = new XMLHttpRequest();
  requestHTML.open('GET', penHTML, true);
  requestHTML.responseType = 'text';

  requestHTML.onload = function() {
    HTMLeditor.getDoc().setValue(requestHTML.response);
    console.log('Loaded - HTML');
  }

  requestHTML.send();

  var requestCSS = new XMLHttpRequest();
  requestCSS.open('GET', penCSS, true);
  requestCSS.responseType = 'text';

  requestCSS.onload = function() {
    CSSeditor.getDoc().setValue(requestCSS.response);
    console.log('Loaded - CSS');
  }

  requestCSS.send();

  var requestJS = new XMLHttpRequest();
  requestJS.open('GET', penJS, true);
  requestJS.responseType = 'text';

  requestJS.onload = function() {
    JSeditor.getDoc().setValue(requestJS.response);
    console.log('Loaded - JS');
  }

  requestJS.send();

}

document.getElementsByTagName('input')[0].onkeyup = function(e) {
  if(e.keyCode === 13) {
    getPen();
  }
}
