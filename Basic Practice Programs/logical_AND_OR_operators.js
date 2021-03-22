var o = { x : 1 };
var p = null;
o && o.x // => 1: o is truthy, so return value of o.x
p && p.x // => null: p is falsy, so return it and don't evaluate p.x

var a=0,b=0
if (a == b) stop(); // Invoke stop() only if a == b
(a == b) && stop(); // This does the same thing

// If max_width is defined, use that. Otherwise look for a value in
// the preferences object. If that is not defined use a hard-coded constant.
var max = max_width || preferences.max_width || 500;

// Copy the properties of o to p, and return p
function copy(o, p) {
    p = p || {}; // If no object passed for p, use a newly created object.
    // function body goes here
   }
   
