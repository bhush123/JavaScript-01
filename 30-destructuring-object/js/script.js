// What is object Destructuring in JavaScript?
// JavaScript Object Destructuring is an expression which allows us to access the data from objects like arrays, objects, maps and assign it to new variables.

let obj = {name:'Bhushan', age:22, gender:'Male'};     //this is a object.
  
// console.log(obj.name);
// console.log(typeof obj);


// let {name,age,gender} = obj;   //we given the reference of defined object. here we have obj is a reference of defined object.    //this is a destructing object.or it is a destructing object expression. 

// console.log(name , age , gender);
// console.log(`my name is ${name} and my age is ${age}`);


// we can change the variable name  also

let {name:a, age:b, gender:c} = obj;

console.log(`my name is ${a} and my gender is ${c}`);






