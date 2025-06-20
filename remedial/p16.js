setTimeout(()=>{
    console.log("Macro Task Queue...");
},0);

Promise.resolve().then(()=>{console.log("Micro Task Queue....")});

process.nextTick(()=>{console.log("Next Tick Queue....")});