/**
 * 3.15
 * Understanding the "this" (keyword) binding:
 * - "this" is established at runtime
 * - "this" is determined by how the function is invoked (not where the function is invoked)
 * - "this" is an object
 */

// Global variable:
var name = "Fred (global)";

// Object definition:
var obj1 = {
  name: "obj1",
  func1: function() {
    console.log("From func1() -------------");
    console.log("obj1", obj1);
    console.log("this", this);
    console.log("this.name", this.name);
  }
};

// Invoke method in obj1:
obj1.func1();

// Object definition 2:
var obj2 = {
  name: "obj2",
  func2: obj1.func1
};

// Invoke the method in object 2:
obj2.func2();

// Create another obj:
var obj3 = {
  name: "obj3",
  fun3: obj2.func2,
  // Object in an object:
  obj4: {
    name: "obj4",
    func4: function() {
      console.log("From obj4.func4() -------------");
      console.log("obj3.obj4", obj3.obj4);
      console.log("this", this);
      console.log("this.name", this.name);
    }
  }
};

// Invoke the method in obj3:
obj3.fun3();

// Invoke the obj in an obj's method:
obj3.obj4.func4();
