/*
   Micro Task Queue ----> Mid ()=>{}
   Macro Task Queue-----> Lower ()=>{}
   Next Tick Queue-----> Higher ()=>{}
*/
Promise.resolve().then(result=>{
    console.log("Promise is executed....");
});
Promise.resolve().then(result=>{
    console.log("Promise is executed....");
});
Promise.resolve().then(result=>{
    console.log("Promise is executed....");
});
Promise.resolve().then(result=>{
    console.log("Promise is executed....");
});
Promise.resolve().then(result=>{
    console.log("Promise is executed....");
});
process.nextTick(()=>{
    console.log("Next Tick is executed.....");
});