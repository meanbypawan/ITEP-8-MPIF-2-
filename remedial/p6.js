(function(){
    console.log("IIFE is executed....");
})();

(function(x){
    console.log(x);
})("Hello...");