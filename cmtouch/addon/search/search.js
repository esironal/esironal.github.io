window.CodeMirror.txtcase = true;
window.CodeMirror.regex = false;
window.CodeMirror._currentCursor = '';
window.CodeMirror.find = {
    _case : true,
    regex : false
};



/*
ovaj _currentCursor se puni na "cursorActivity"
to bi moro negdje u svom kodu definirat:

cm.on("cursorActivity",function(cm) {
	tvoj.globalni.objekt._currentCursor = cm.getCursor();
});
*/

(function() {

  function SearchState() {
    this.posFrom = this.posTo = this.query = null;
	this.cursor = null;	  
 	this.marked = [];
  }
  function getSearchState(cm) {
    return cm._searchState || (cm._searchState = new SearchState());
  }
  function getSearchCursor(cm, query, pos) {
    return cm.getSearchCursor(query, pos, window.CodeMirror.txtcase);
  }
  function dialog(cm, text, shortText, f) {
    if (cm.openDialog) cm.openDialog(text, f);
    else f(prompt(shortText, ""));
  }
  function confirmDialog(cm, text, shortText, fs) {
    if (cm.openConfirm) cm.openConfirm(text, fs);
    else if (confirm(shortText)) fs[0]();
  }
  function parseQuery(query,replace) {	
	  if(window.CodeMirror.regex)
	  {
		  if(query=="//") return false;		  
		  var isRE = query.match(/^\/(.*)\/([a-z]*)$/);
	  }
	  else 
	  {
		  var isRE = false;
	  }
	  return isRE ? new RegExp(isRE[1], isRE[2].indexOf("i") == -1 ? "" : "i") : query;
  } 
  function doSearch(cm, rev, query) {
    var state = getSearchState(cm);
    if (state.query) return findNext(cm, rev);
    
    cm.operation(function() {
        if (!query || state.query) return;
        state.query = parseQuery(query);
        state.posFrom = state.posTo = cm.getCursor();
        findNext(cm, rev);
    });
    
  }
  function findNext(cm, rev) {cm.operation(function() {
    var state = getSearchState(cm);
    var cursor = getSearchCursor(cm, state.query, rev ? state.posFrom : state.posTo);
    if (!cursor.find(rev)) {
      cursor = getSearchCursor(cm, state.query, rev ? CodeMirror.Pos(cm.lastLine()) : CodeMirror.Pos(cm.firstLine(), 0));
      if (!cursor.find(rev)) return;
    }
	  
	for (var i = 0; i < state.marked.length; ++i) state.marked[i].clear();
    state.marked.length = 0;
	
	state.cursor = cursor;
	  
	state.marked.push(cm.markText(cursor.from(), cursor.to(), {
	  className: "cm-searching"
	}));
	
	if(rev)
		cm.setSelection(cursor.to(), cursor.from());
	else
		cm.setSelection(cursor.from(), cursor.to());
		  
	  
    state.posFrom = cursor.from(); state.posTo = cursor.to();
  });}
  function clearSearch(cm) {cm.operation(function() {
	var cursorBefore = window.CodeMirror._currentCursor;
	var scrollBefore = cm.getScrollInfo();
	
    var state = getSearchState(cm);
    if (!state.query) return;
	try { 
		cm.setSelection(state.cursor.from(), state.cursor.from());	
	} catch(e) {};
	  
    state.query = null;
	state.cursor = null;
	for (var i = 0; i < state.marked.length; ++i) state.marked[i].clear();
    state.marked.length = 0;
	cm.setCursor(cursorBefore);
	cm.scrollIntoView(scrollBefore);
	window.CodeMirror._currentCursor = cursorBefore;  
  });}

  function replace(cm, find, repl, all) {	  
	  if (all) {
		  var query = parseQuery(find);
		  
		  cm.operation(function() {
			  for (var cursor = getSearchCursor(cm, query); cursor.findNext();) {
				  if (typeof query != "string") {
					  var match = cm.getRange(cursor.from(), cursor.to()).match(query);
					  cursor.replace(repl.replace(/\$(\d)/, function(w, i) {return match[i];}));
				  } else cursor.replace(repl);
			  }
		  });
	  } else {
		  var state = getSearchState(cm);
	  	  var cursor = state.cursor;
		  try {
		  	cursor.replace(repl);
		  } catch(e) {}
	  }    
    
  }
  CodeMirror.commands.find = function() { };
  CodeMirror.commands.findNext = function(cm,query) { doSearch(cm, false, query); };
  CodeMirror.commands.findPrev = function(cm,query) { doSearch(cm, true, query); };
  CodeMirror.commands.clearSearch = clearSearch;
  CodeMirror.commands.replace = function(cm,find,repl) { replace(cm, find, repl, false); doSearch(cm, false, find);  };
  CodeMirror.commands.replaceAll = function(cm,find,repl) {replace(cm, find, repl, true);};
})();