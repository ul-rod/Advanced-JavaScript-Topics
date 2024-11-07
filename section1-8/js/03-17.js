/**
 * 3.17
 * Understanding the Prototype of Functions
 *
 */

// Define simple function:
var test = function() {
  console.log("test");
};

// `apply`, `bind`, and `call` allow us to
// bind to `this` explicitly:
console.dir(test);
// function test()
//    <prototype>: function ()
//        apply: function apply()
//        bind: function bind()
//        call: function call()
