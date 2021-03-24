var geval = eval; // Using another name does a global eval
var x = "global", y = "global"; // Two global variables
function f() { // This function does a local eval
 var x = "local"; // Define a local variable
 eval("x += 'changed';"); // Direct eval sets local variable
 return x; // Return changed local variable
}
function g() { // This function does a global eval
 var y = "local"; // A local variable
 geval("y += 'changed';"); // Indirect eval sets global variable
 return y; // Return unchanged local variable
}
console.log(f(), x); // Local variable changed: prints "localchanged global": 
console.log(g(), y); 