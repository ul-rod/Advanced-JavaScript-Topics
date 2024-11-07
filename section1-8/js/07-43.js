/**
 * 7.43
 * Using the Namespace pattern
 */

// Create a variable (namespace):
var MYAPP = MYAPP || {};

// Create an IIFE:
(function(namespace) {
  // These variables will remain "private"
  // or scoped only within this IIFE:
  var prompt = "Welcome,",
      prompt2 = "How are you?",
      prompt3 = "Good to see you again.",
      counter = 0,
      users = [];

  // This method will remain private, too:
  var newUser = function(user) {
      for (let i = 0; i < users.length; i++) {
          if (users[i].toUpperCase() === user.toUpperCase()) {
              return false;
          }
      }
      namespace.addUser(user);
      return true;
  };

  // The following methods are "public" and can
  // be accessed via the namespace object:
  namespace.greeting = function(user){
      var greeting = prompt + " ";
      if (newUser(user)) {
          greeting += prompt2;
      } else {
          greeting += prompt3;
      }
      console.log(greeting);
      counter++;
  };

  namespace.addUser = function(user) {
      users.push(user);
  };

  namespace.numberOfGreetings = function() {
      console.log("Total number of greetings: " + counter);
  };

})(MYAPP);

MYAPP.greeting("Mary"); // Welcome, How are you?
MYAPP.greeting("Mary"); // Welcome, Good to see you again.
MYAPP.greeting("Rod"); // Welcome, How are you?
MYAPP.numberOfGreetings(); // Total number of greetings: 3
