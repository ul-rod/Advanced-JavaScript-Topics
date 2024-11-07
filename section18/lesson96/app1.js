"use strict";

// Example of a Factory Function:
const factoryFun = function(newNum) {
    let num = 100;
    return {
        sum () {
            return num * newNum;
        }
    };
};

var ffun = factoryFun(5);
// console.log(ffun.sum());
// 500
