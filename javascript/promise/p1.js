const first = (callback)=>{
    setTimeout(()=>{
        console.log("First task completed...");
        callback();
    },2000);
}

const second = (callback)=>{
    setTimeout(()=>{
        console.log("Second task completed...");
        callback();
    },1500);
}
const third = ()=>{
    setTimeout(()=>{
        console.log("Third task completed....");
    },900);
}
first(()=>{
  second(()=>{
   third();
  })
});