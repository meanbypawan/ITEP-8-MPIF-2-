const firstTask = (n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("First Task Is Done : "+n);
            resolve(n+2);
        },2000);
    });
}

const secondTask = (n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Second Task Is Done : "+n);
            resolve(n+2);
        },1400);
    })
}

const thirdTask = (n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Third Task Is Done : "+n);
            resolve(n+2);
        },900);
    })
}

const fourthTask = (n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Foruth Task Is Done : "+n);
            resolve(n+2);
        },1600);
    })
}

firstTask(10).then(result=>{return secondTask(result)})
.then(result=>{return thirdTask(result)})
.then(result=>{return fourthTask(result)});
