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

Promise.allSettled([firstName(),lastName(),middleName()])
.then(results=>{
    console.log(results);
})