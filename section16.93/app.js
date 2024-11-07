/**
 * Error Handling Strategies:
 * ----------------------------------------
 * Should help you determine what to do to fix issue.
 * Should not be too complex.
 * Should contain two parts:
 * 1) Should inform user of critical errors.
 * 2) Should be logged (preferably to the server).
 */

'use strict';

let modules = [
    {name:'module1', init() {}},
    {name:'module2', init(){throw new Error('init(): Critical data missing.')}}
];

const reportError = function(critical, msg, userMsg){
    if (critical) {
        const alertMsg = document.querySelector("#alertMessage");
        alertMsg.innerHTML = userMsg;
        document.getElementById("overlay").style.display = "flex";
    }

    logError(critical, msg);
};

const logError = function(severity, message){
    // ... //
}

for (let module of modules) {
    try {
        module.init();
    }
    catch(err) {
        let errMsg = `${module.name} did not load: ${err.message}`;
        let usrMsg = "Sorry, an unexpected error occurred.";
        reportError(true, errMsg, usrMsg);
    }
}
