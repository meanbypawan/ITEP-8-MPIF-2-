
function info(greet,puntuation){
    console.log("Name : "+greet+"  "+this.name+"  "+puntuation);
    console.log("Age : "+greet+"  "+this.age);
}
let obj = {name:"cheeku",age:40};
let newInfo = info.bind(obj,"hello","!");

newInfo();
/*
let obj = {name: "Cheeku",age: 40};
info.apply(obj,["hello","."]);
*/
/*
let obj = {name: "Cheeku", age: 35};
let obj2 = {name: "Peeku",age: 40};
info.call(obj,"hello");
info.call(obj2,"hii");
*/

