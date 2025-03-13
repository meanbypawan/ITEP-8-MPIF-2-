const firstName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Merry");
        },2000);
    });
}

const middleName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("John rejected...");
        },1500);
    });
}

const lastName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Alexan");
        },800);
    })
}

Promise.race([firstName(),middleName(),lastName()])
.then(result=>{
    console.log("Race resolved...");
    console.log(result);
}).catch(err=>{
    console.log("Race rejected...");
    console.error(err);
})