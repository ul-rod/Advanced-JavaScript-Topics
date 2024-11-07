'use strict';

const firstWord = function(str) {
    return str.split(' ')[0];
};

const lastWord = function(str) {
    let wordArray = str.split(' ');
    return wordArray[wordArray.length - 1];
};

const getNewString = function () {
    try {
        let str = comm.getStr();
        return str;
    }

    catch (err) {
        let e = new Error("No communication string provided.");
        console.log(e);
        return null;
    }

    finally {
        console.log('getNewString() - Function completed.');
    }
};

let stmt = 'Error handling in JavaScript is critical.';

console.log('statement: ', stmt);
console.log('firstWord(): ', firstWord(stmt));
console.log('lastWord(): ', lastWord(stmt));
console.log('getNewString: ', getNewString());
