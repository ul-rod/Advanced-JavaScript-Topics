'use strict';

let obj = {
    data: 32345,
    getData() {
        return this.data;
    }
}

function asyncTest(bool) {
    return new Promise((resolve, reject) => {
        let a = obj.getData();
        if (bool) {
            resolve(`(Success) ${a}`);
        } else {
            reject('Failed!');
        }
    })
};

/* This works:
asyncTest(false)
    .then(
        resp => console.log("Resolved: ", resp),
        mssg => console.warn("Rejeced: ", mssg),
    );
*/

/* This works:
asyncTest(false)
    .then(resp => console.log("Resolved: ", resp))
    .catch(msg => console.warn("Rejeced: ", msg));
*/

/* This works:
(async function data(){
    try {
        let resp = await asyncTest(false);
        console.log(resp);
    }
    catch(e) {
        console.warn(e);
    }
})();
*/

