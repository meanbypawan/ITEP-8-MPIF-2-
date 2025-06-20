f1();
function f1(){
    console.log("Function Statement is executed and it is hoisted....");
}

const f2 = function(){
    console.log("Function Expression is executed and it is not hoisted..");
}


const f3 = ()=>{
    console.log("Arrow function is executed.....");
}

(function f4(){
    console.log("IIFE[Immediate Invoke Function Expression] is executed");
})();