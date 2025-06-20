/*
  undefined :- It variable is declared but not initialized is called undefined.
  Type of undefined is undefined.
  We can not use undefined in arithmetic calculation.
  We can not use undefined in json.
  
  null :-   Creating reference which is not pointing to any object.
  var ref = null.
  2. var ref = "hello";
     ref = null;
  3. Type of null is object
  4. We can use null in json.   

*/

console.log(20+ null); // 20
console.log(20+undefined); // NaN
console.log(undefined == null); // true
console.log(undefined === null); // false