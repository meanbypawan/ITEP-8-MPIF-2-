function f1(...x){
  console.log(x);
  for(let val of x)
     console.log(val);
}

f1(20,"hello",true);

let customer = {id:100,cname:"ABC",age:25,contact:"9009111222",balance:500000,address:"Indore"};
let {id,cname,contact} = customer;
console.log(id+"  "+cname+"  "+contact);
console.log(`Id : ${id}, Name: ${cname}, Contact : ${contact}`);
/* 
let id = customer.id;
 let name = customer.name;
 let contact  = customer.contact;
*/ 