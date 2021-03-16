//Book Code
var s = "test"; // Start with a string value.
s.len = 4; // Set a property on it.
var t = s.len; // Now query the property.

var s = "wrapper";
//created new method for string s
s.len = 4;
//method discarded after use
var t = s.len;
console.log(t)
