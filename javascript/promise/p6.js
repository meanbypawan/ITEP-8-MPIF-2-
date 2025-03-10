const f1 = ()=>{
    return new Promise((resolve,reject)=>{
        reject("Promise is rejected....");
    });
}

f1().catch(err=>{
    console.log(err);
})