const eatingPizza = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Pizza Done...")
        },2000);
    });
}; 
const meetingWithFriends = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Meeting Done...");
        },4000);
    });
};
const servicingCar = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Servicing Done...");
        },1000);
    });
};

async function executeTask(){
   console.log(await eatingPizza());
   console.log(await meetingWithFriends());
   console.log(await servicingCar());
}

executeTask();
