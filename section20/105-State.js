/**
 * State:
 * ----------------------------------------
 * A JavaScript program stores data in variables and objects.
 * The contents of these storage locations at any given moment
 * while the program is running is considered its state.
 */

var MAINAPP = (function(app){

  // The data, `currentUser` and `users`
  // represent the current state at any given moment.
  var currentUser = 0;
  var users = [{
      firstName: "John",
      lastName: "Lennon",
      instruments: []
    },
    {
      firstName: "Paul",
      lastName: "McCartney",
      instruments: []
    },
    {
      firstName: "Ringo",
      lastName: "Starr",
      instruments: []
    },
    {
      firstName: "George",
      lastName: "Harrison",
      instruments: []
    },
  ];

  // If we were to call one of these methods and it
  // changes the current user or adds a new property
  // to a user, we will be changing the state.
  var setCurrentUser = function(userId){
    if (userId >= 0 && userId < users.length) {
      currentUser = userId;
    }
    else {
      return false;
    }
  };
  var addInstrument = function (userId, instrument) {
    if (userId >= 0 && userId < users.length) {
      users[userId].instruments.push(instrument);
    }
    else {
      return false;
    }
  };

})(MAINAPP || {});
