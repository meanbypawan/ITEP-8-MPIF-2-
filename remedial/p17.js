function f1(){
    let x = 2000;
    return function f2(){
      console.log("Inside Function F2 : "+x);
    }
}
/*
  Closure :-  
  Function f2 will form the closure and in closure it will maintain the value of x
  Memory Of Function F1 is called Lexical Scope|Lexical Env.
  Closure allows inner function to access outer function state|variable.
*/
// const inner = f1();
// inner();
f1()();
/*
  What are the advantages of using closure :-
   1. We can achieve data encapsulation using closure
   2. Help in javascript Curring
   3. Avoid global pollution
  Disadvantage :-
    It consume some extra memory to manage lexical Scope. 
*/
