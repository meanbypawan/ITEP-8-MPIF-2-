
function f1(){
  let interval = setInterval(()=>{
     console.log("Interval Running ");
     clearInterval(interval);
  },2000)
}  

f1();