


// const promise = new Promise((resolve,reject) => {
//     asynchronous operation code
// })

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Resolve  means value   ;
// Reject means error

// Resolve :
// call when the operation is successful
// Reject :
// called when the operation is failed.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


//creating promise
let myPromise = new Promise((resolves, reject) => {
    // let success =false;
    let success = true;


    setTimeout(() => {


        if (success) {
            resolves("Promise resolved Successfully")
        } else {
            reject("Promise rejected")
        }

    }, 2000)

})

myPromise
    .then(result => console.log(result))//hence promise is resolved.
    .catch(error => console.log(error))//hence the promise is rejected.
    .finally(() => console.log("Promise execution finished")) //finally it works in either cases.
