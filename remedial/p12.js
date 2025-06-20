async function f1(){
   //throw new Error("Something wrong...."); 
   return "hello";
}

f1().then(result=>console.log(result))
.catch(err=>{console.log("Inside Catch : "+err)});