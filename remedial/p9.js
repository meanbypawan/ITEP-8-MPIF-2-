console.log("At the start....");
const firstTask = (n)=>{
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        console.log("Inside First Task : "+n);
        resolve(n+2);
     },3000);
   });
}
const secondTask = (n)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         console.log("Inside Second Task : "+n);
         resolve(n+2);
      },5000);
    });
 }
 const thirdTask = (n)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         console.log("Inside Third Task : "+n);
         resolve(n+2);
      },3500);
    });
 }

 firstTask(10).then(result=>console.log(result));
 secondTask(12).then(result=>console.log(result));
 thirdTask(14).then(result=>console.log(result));
 console.log("At the end...");