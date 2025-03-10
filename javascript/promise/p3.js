const operation = (n)=>{
    return new Promise((resolve,reject)=>{
        n%2 ? reject("Given number is odd") : resolve("Given number is even");
    });
}


operation(11).then((resolveResult)=>{
    console.log(resolveResult);
}).catch((rejectedValue)=>{console.log(rejectedValue)});