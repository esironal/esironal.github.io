 JSON Editor 
 Author: Thomas W Devol (vajrapani666)
 
 Purpose:
 	Provide a way to edit data of any type or complexity (within browser limits)
 Usage: 
 	var jse=new JSONEditor();
 	jse.load({foo:'bar'});
 	jse.render($("#target"),"field-name");
 About @tunnel,@context: 
 	The whole editor essentially recursively parses its _object creating a DOM tree on the element passed to render
 	To provide editing capabilities, As the tree is created, certain points have bound events that take a "tunnel"
 	argument
 	The tunnel is a function that calls its parent, this allows the recursion path to any node to be "traversed backwards"
 	up to the root. 
 	This reverse-recursive pattern generates a path to the node that originated the sequence of 
 	calls to tunnel (the leaf data-manipulation call) 
 	The tunnel takes two arguments, a string and a function.
 	The string builds the path reverse-recursively terminating in _render
 	The function passed to tunnel is created at the leaf-level and passed all the way to the root level
 	allowing it to take advantage of scope-changes through the recursive function path

 	The function is usually called dfunc and it is created at the leaf, passed up the tree and called from the root
 	with the whole object as the first argument, the generated path as the second, and the node value as the last
	The dfunc generates a javascript string which will modify the _object 

	So context/tunnel is essentially an execution path back to the root along which can be passed a callback with curried
	arguments from the leaf to be called from the root
 	
 	TODO: Better , or at least functional date handling 
 	TODO: More user friendly value editor that handles incompatible data-types more smoothly

