function f1(){
  return 100;
}

async function f2(){
  return 100;
}

console.log(f1()); // == undefined
f2().then(result=>{
    console.log(result);
})