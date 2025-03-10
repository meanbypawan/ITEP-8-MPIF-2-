const firstTask = (n,callback)=>{
    setTimeout(()=>{
        console.log("Inside First : "+n);
        callback(n+2);
    },2000);
}

const secondTask = (n,callback)=>{
    setTimeout(()=>{
        console.log("Inside Second : "+n);
        callback(n+2);
    },1400);
}

const thirdTask = (n,callback)=>{
    setTimeout(()=>{
        console.log("Inside Third : "+n);
        callback(n+2);
    },900)
}
const fourthTask = (n)=>{
    setTimeout(()=>{
        console.log("Inside Fourth : "+n);
    },1700);
}
firstTask(10,(n)=>{
    secondTask(n,(n)=>{
        thirdTask(n,(n)=>{
            fourthTask(n);
        })
    })
})