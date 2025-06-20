console.log("At the start....");
const firstTask = (n)=>{
   console.log("First Task Is In Progress") 
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        console.log("First Task Is Completed: "+n);
        reject(n+2);
     },3000);
   });
}
const secondTask = (n)=>{
    console.log("Second Task Is In Progress")
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         console.log("Second Task Is Completed: "+n);
         resolve(n+2);
      },5000);
    });
 }
 const thirdTask = (n)=>{
    console.log("Third Task Is In Progress");
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         console.log("Third Task Is Completed : "+n);
         resolve(n+2);
      },3500);
    });
 }
 const fourthTask = (n)=>{
    console.log("Fourth Task Is In Progress");
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         console.log("Fourth Task Is Completed : "+n);
         resolve(n+2);
      },2500);
    });
 }
 firstTask(10)
 .then(result=>{return secondTask(result)})
 .then(result=>{return thirdTask(result)})
 .then(result=>{return fourthTask(result)})
 .catch(errResult=>{console.log(errResult)}); 
 console.log("At the end...");