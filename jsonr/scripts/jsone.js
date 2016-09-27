/*
 * JSON Editor 
 * Author: Thomas W Devol (vajrapani666)
 * 
 * Purpose:
 * 	Provide a way to edit data of any type or complexity (within browser limits)
 * Usage: 
 * 	var jse=new JSONEditor();
 * 	jse.load({foo:'bar'});
 * 	jse.render($("#target"));
 * About @tunnel,@context: 
 * 	The whole editor essentially recursively parses its _object creating a DOM tree on the element passed to render
 * 	To provide editing capabilities, As the tree is created, certain points have bound events that take a "tunnel"
 * 	argument
 * 	The tunnel is a function that calls its parent, this allows the recursion path to any node to be "traversed backwards"
 * 	up to the root. 
 * 	This reverse-recursive pattern generates a path to the node that originated the sequence of 
 * 	calls to tunnel (the leaf data-manipulation call) 
 * 	The tunnel takes two arguments, a string and a function.
 * 	The string builds the path reverse-recursively terminating in _render
 * 	The function passed to tunnel is created at the leaf-level and passed all the way to the root level
 * 	allowing it to take advantage of scope-changes through the recursive function path
 *
 * 	The function is usually called dfunc and it is created at the leaf, passed up the tree and called from the root
 * 	with the whole object as the first argument, the generated path as the second, and the node value as the last
 *	The dfunc generates a javascript string which will modify the _object 
 *
 *	So context/tunnel is essentially an execution path back to the root along which can be passed a callback with curried
 *	arguments from the leaf to be called from the root
 * 	
 * 	TODO: Better , or at least functional date handling 
 * 	TODO: More user friendly value editor that handles incompatible data-types more smoothly
 *
 */
var JSONEditor = function() {
	var _object={};
	var _state={};
	//returns the type of @obj as a string
	//returns unknown if type cannot be determined
	//relies heavily on underscore.js 
	var _type=function( obj) {
		if (_.isArray(obj)) return "array";
		if (_.isBoolean(obj)) return "bool";
		if (_.isNull(obj)) return "null";
		if (_.isNumber(obj)) return "number";
		if (_.isDate(obj)) return "date";
		if (_.isString(obj)) return "string";
		if (Object.prototype.toString.call(obj)=="[object Object]") return "hash";
		return "unknown";
	}
	// render an editor for the edit-value dialog
	// @param target (jQuery Object) - Where to place the editor
	// @param val			 - The value the editor will take initially
	// @param type (string)		- The initial type
	// @param on_submit (function)  - A callback to which is passed the new value once a new value is chosen
	var _render_editor=function(target,val,type,on_submit){
		//always start with blank slate
		target.empty(); 
		//create a raw value control
		var label=$("<label>",{text:"Raw Value"});
		var text_editor=$("<input>",{val: val,id:"value-target"});	
		target.append(label);
		target.append(text_editor);

		//create controls / behaviors dependent on the type selected
		switch (type) {
			case 'hash':
				on_submit("{}");
				$('#leaf-editor').remove();
			break;
			case 'array':
				on_submit("[]");
				$('#leaf-editor').remove();
			break;
			case 'number':
				if (_.isNaN(val)) val =0;

				var slider=$("<div>",{id:"slider"});
				slider.slider({
					value:val,
					change:function(e,ui) {
						$('#value-target').val(ui.value);		
					}
				});

				target.append(slider);
			break;
			case 'bool':
				var radios=$("<div>",{id:"radios"});
				var on_opt=$("<input>",{
					type:"radio",
					id:"radio-on",
					name:"bool-val",
					value:"true"});
				var on_label=$("<label>",{for:"radio-on",text:"On"});
				on_label.click(function() {
					$('#value-target').val("true");
				});
				var off_opt=$("<input>",{
					type:"radio",
					id:"radio-off",
					name:"bool-val",
					value:"false"});
				var off_label=$("<label>",{for:"radio-off",text:"Off"});
				off_label.click(function() {
					$('#value-target').val("false");
				});
				if (val)	
					on_opt.attr('checked',true) 
				else
					off_opt.attr('checked',true);
				radios.append(on_opt);
				radios.append(on_label);
				radios.append(off_opt);
				radios.append(off_label);
				target.append(radios);
				radios.buttonset();
			break;
			case 'date':
				text_editor.datepicker();		
			break;
		}




	}
	// Creates a dialog allowing the user to edit a value
	// @param val - The value being edited
	// @param type (string) - The current type of the value
	// @param on_submit (function) - A callback taking the new value 
	var _create_editor=function(val,type,on_submit) {
		$('#leaf-editor').remove();

		//setup html structure
		var editor=$("<div/>",{id:"leaf-editor"})
		var form=$("<form/>");
		var fieldset=$("<fieldset/>");
		form.append(fieldset);
		editor.append(form);
		var container=fieldset;
		container.append($("<label>",{text:"Data Type"}));
		var select_menu=$("<select>");

		//setup the data types menu
		options={
			'string':"Text",
			'number':"Number",
			'null':"Nothing",
			'date':"Date",
			'bool':"True/False",
			'array':"New List",
			'hash':"New Object"
		}
		_.each(options,function(val,key) {
			var option=$("<option>",{value:key,text:val,selected: key==type});
			select_menu.append(option);
		});
		var edit_area=$("<div>",{id:'leaf-editor-value'});
		//when the data type changes, render an appropriate editor
		select_menu.bind('change',function() {
			_render_editor(edit_area, val, $(this).val(),on_submit);
		});
		container.append(select_menu);
		container.append(edit_area);
		//setup the dialog
		editor.dialog({
			title:"Edit Value",
			height: 300,
			width: 300,
			modal: true,
			buttons: {
				"OK":function() {
					try {
						on_submit($("#value-target",this).val());
					} catch (e) {

						on_submit('"'+$("#value-target",this).val()+'"');
					}
					$(this).dialog('close');
				},
				"Cancel":function() {
					$(this).dialog('close');
				}
			}
				
		});
		editor.dialog('open');
		select_menu.trigger('change');
	}
	// A refactored function which executes when a parent node is hovered over
	// Shows a menu displaying an add and delete option
	// @param label (jQuery Object) - The label to attach the menu to
	// @param child_type (string) - We need this to pass to _add_node so that we know if we need to ask for a key name
	// @tunnel - See tunnel
	var _parent_hover=function(label,child_type,tunnel) {
			return function() {
						var node_menu=$("<span>",{class:'ui-widget-header ui-corner-all node-menu'});
						var add_button=$("<button>",{title:"Add Node"}).button({
							text: false,
							icons:{primary: "ui-icon-circle-plus"}
						}).click(_add_node(child_type,tunnel));
						var del_button=$("<button>",{title:"Delete Node"}).button({
							text:false,
							icons:{primary: "ui-icon-circle-close"}
						}).click(_del_node(tunnel));
						node_menu.append(add_button);
						node_menu.append(del_button);

						label.append(node_menu);
					}
	};

	//generates a generic delete node function
	//@param context (function) the context to call and pass back the dfunc up the tree
	var _del_node=function(context) {
		return function() {
			var dfunc=function(obj,path,node) {
				var exec="delete obj"+path;
				eval(exec);
				return obj;	
			}
			context("",dfunc);	
		}

	};

	//adds a node defaulting to N/A/null
	var _add_node=function(type,context) {
		return function() {
			var dfunc=function(obj,path,node) {
				if (type=='hash') {
					var name=prompt("Please enter a name","");
					var exec="obj"+path+"['"+name+"']=null;";
				} else {
					var exec="obj"+path+".push(null);";
				}
				eval(exec);
				return obj;
			};
			context("",dfunc);
		}
	};


	//Wraps the leaf-values of the tree , creates the editor on hover
	//@param context (function) - See top
	//@param obj - The actual value 
	//@param view (jQuery Object) - The visual representation of the object
	//@param type (string) - The type of the object required to pass to _create-editor 
	var _value_wrapper=function(context,obj,view,type) {
		var env=this;
		var edit=function() {
			//this is a change operation, so we create a function that changes the 
			//root to modify this node
			var on_submit=function(newval) {
				var dfunc=function(obj,path,node) {
					var exec="obj"+path+"="+newval;
					eval(exec);
					return obj;
				}
				context("",dfunc);
				return false;
			}	
			_create_editor(obj,type,on_submit);
			//node will be the leaf, obj will be the whole tree
			return false; //ensure event does not propagate
		};
		//show editing menu 
		$(view).hover(function() {
			//create editor interface 
			//kill other editors
			var leaf_menu=$("<span/>",{class:'ui-widget-header ui-corner-all leaf-menu'});
			var edit_button=$("<button>",{title:"Edit"}).button({
				text:"Edit",
				icons: {
					primary:"ui-icon-circle-triangle-e"
				}
			}).click(edit);
			var del_button=$("<button>",{title:"Remove"}).button({
				text:"Remove",
				icons: {
					primary: "ui-icon-circle-close"
				}
			}).click(_del_node(context));
			leaf_menu.append(edit_button);
			leaf_menu.append(del_button);
			view.append(leaf_menu);
		},function() {
			$('.leaf-menu').remove();
		});
		return view;	
	}
	
	//recursive core function to recurively display @obj 
	//recursion begins in public method render
	var _display=function(context,obj,type) {
		var el;
		//initialize the path back to the caller's context function
		var tunnel=function(str,dfunc) {
			context(str,dfunc);
		};

		if (type=='hash') {	
			el=$("<dl/>");
			_.each(obj,function(val,key,o) {
				var child_type=_type(val);
				var label=$("<dt>",{text:key});
				var is_parent=child_type=='hash' || child_type=='array';
				//modify the tunnel to build the path for encounteered hashes
				var tunnel=function(str,dfunc) {
					context("['"+key+"']"+str.toString(),dfunc);
				}

				var value_el=$("<dd>",{'data-type': child_type}).append(_display(tunnel,val,child_type));
				if (is_parent) {
					//toggle on click
					label.click(function() {
						value_el.toggle();
					});
					label.hover(_parent_hover(label,child_type,tunnel),function() {
						$('.node-menu').remove();
					});
				}
				el.append(label);
				el.append(value_el);
				
			});
			el.addClass('node-parent');
		} else if (type=='array') {
			el=$("<ul/>");
			_.each(obj,function(val,i,o) {

				var child_type=_type(val);
				var is_parent=child_type=='hash' || child_type=='array';
				var label=$("<div/>",{text:"-",title:i});

				//modify the tunnel to create path entry for array element i
				tunnel=function(str,dfunc) {
					context("["+i+"]"+str.toString(),dfunc);
				}
				var value_el=_display(tunnel,val,child_type);
				var list_el=$("<li>",{'data-type':child_type});

				//assign special behavior if this element is a parent
				if (is_parent) {
					label.click(function() {
						value_el.toggle();
					});
					label.hover(_parent_hover(label,child_type,tunnel),function() {
						$('.node-menu').remove();
					});
					list_el.append(label);
				}
				list_el.append(value_el);
				el.append(list_el);
			});
			el.addClass('node-parent');
		} else if (type=='bool') {
			el= _value_wrapper(tunnel,obj,$("<div>",{class: obj?'type-bool,type-bool-true':'type-bool,type-bool-false',text: obj?"TRUE":"FALSE"}),type);

		} else if (type=='null') {
			el=_value_wrapper(tunnel,obj,$("<div>",{class: 'type-null',text:"N/A"}),type);
		} else if (type=='unknown') {
			el=$("<div>",{class: 'type-unknown',text:"?"});
		} else {
			el=_value_wrapper(tunnel,obj,$("<div>",{class: 'type-'+type,text: obj}),type);
		}
		return el;

	}

	//public interface for JSEditor
	return {
		//takes a javascript hash, this loads the main object to be displayed into the editor
		load: function(obj) {
			_object={"/":obj};
		},
		//returns the current value of the editor
		value: function() {
			return _object["/"];
	       },
		//render the _object to the jQuery Object @target, name is the name of the form field
		render: function(target,name) {
			var instance=this; //need to pass through the closure 

			//the first argument to display here is actually the root terminator for calls
			//initiated at leaf-nodes via context("",dfunc). 
			displayed_tree=_display(function(str,dfunc) {
					//use the path stored in str to determine the path to the node that 
					//initiated the call up the tree .. determine its value
					var node=eval("_object"+str);
					//call the passed up callback function, it is called dfunc for delta-function, change-function
					//the function should change _object somehow.
					dfunc(_object,str,node);
					//re-render the object
					instance.render(target,name);

			},_object,_type(_object));
			var tab_container=$("<div>",{class:'tabs'});
			var tab_ul=$("<ul>");
			tab_ul.append($("<li>").append($("<a>",{href:"#explorer",text:"Editable Tree"})));
			tab_ul.append($("<li>").append($("<a>",{href:"#raw",text:"Raw"})));
			var explorer=$("<div>",{id:"explorer"});
			var raw=$("<div>",{id:"raw"});
			var textarea=$("<textarea name=\""+name+"\" rows='20' cols='40'></textarea>");
			explorer.append(displayed_tree);
			textarea.text(JSON.stringify(_object['/']));
			raw.append(textarea);
			tab_container.append(tab_ul);
			tab_container.append(explorer);
			tab_container.append(raw);	
			target.empty().append(tab_container);
			tab_container.tabs();

		}

	}
}
