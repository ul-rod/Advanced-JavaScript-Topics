/**
 * 3.21
 * Constructor invocation and the value of `this`
 */

// Define new constructor function:
// Again, note the uppercase "A":
function Author(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
  this.books = [];
  this.addBook = function(bookName) {
    this.books.push(bookName);
    console.log("this.books: ", this.books);
  }
}

var walt = new Author("Walt", "Whitman");
walt.addBook("Leaves of Grass");
console.log(walt);
// Object { firstName: "Walt", lastName: "Whitman", books: (1) […], addBook: addBook(bookName) }

var james = new Author("James", "Joyce");
james.addBook("Ulysses");
console.log(james);
// Object { firstName: "James", lastName: "Joyce", books: (1) […], addBook: addBook(bookName) }
