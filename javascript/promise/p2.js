/*
  Promise is an object :-
*/
let p = new Promise((resolve,reject)=>{
   //resolve();
    reject();
});
p.then(()=>{
    console.log("Then executed | Promise fullfilled");
}).catch((err)=>{
    console.log("Catch executed | Promise is rejected");
});