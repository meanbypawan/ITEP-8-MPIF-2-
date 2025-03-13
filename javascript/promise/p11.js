const roomCleaning = ()=>{
    console.log("Room cleaning is in progress..."); 
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        reject("Room cleaning failed...");
       },2000);
    });
}

const removingGarbage = ()=>{
    console.log("Removing garbage is in progress...");
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve("Garbage removed....");
       },1500);
    });
}

Promise.all([roomCleaning(),removingGarbage()])
.then(results=>{
  console.log(results[0]+"\n"+results[1]);
  console.log("Reward : Got a Ice-cream");
})
.catch(err=>{
  console.error(err);
  console.log("Icr-cream lost");
});