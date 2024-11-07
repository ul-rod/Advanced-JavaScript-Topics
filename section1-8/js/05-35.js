/**
 * 5.35
 * Method chaining
 * Calling multiple methods of a single object one after another
 * without assigning a return value for each method to a variable.
 */

// Simple example of "chaining" functions:
let str = " This is a story of a man named Brody, who was busy with 3 boys of his own. ";
let str_clean = str.replace("Brody", "Brady").toUpperCase().trim();
console.log("str_clean:", str_clean);

// Another simple example of "chaining" functions:
let beatles = ["John", "Paul"];
let beatlesStr = beatles.concat("Ringo", "George").sort().join(", ");
console.log("beatlesStr:", beatlesStr);

let student = {
  firstName: "Eddie",
  lastName: "van Halen",
  score: [],
  total: 0,
  average: 0,
  addScore: function(val){
    this.score.push(val);
    return this;
  },
  doTotal: function(){
    this.total = this.score.reduce(function(x, y){
      return x + y;
    }, 0);
    return this;
  },
  doAverage: function(){
    this.average = this.total / this.score.length;
    return this;
  }
}

student.addScore(99).addScore(89).addScore(93).doTotal().doAverage();
console.log("student:", student);
