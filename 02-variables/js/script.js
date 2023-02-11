// variables are the containers to storing the data in memory.

// 3 ways to declare variables in javaScript 


// 1) var, 2) let, and 3) const are the keywords to declare the variables.
// a,b,x,y,bhushan,emId etc. are the variable.

// differnce var , let and const with example,


// 1) var -when we declare the variable with var then we can able to declare that variable again with same name and 
//        also able to re-assign or change the value.

console.log(userName)  // undefined error because in javascript code executes line by line means top to bottom and left to right first we have to declare.

var userName ='Bhushan';
var userName ='lalit';
console.log(userName, userAge)




// 2) let -when we declare the variable with let then we can not able to declare variable again with same name but here
//          value can re-assign. 

let userName ='karthik';
    userName ='vikrant';
  
// let userName ='vikrant'; -----can not declare again with same name but value can re-assign.
// let userName ='25';

console.log(userName)


// 3) const -when we declare the variable with const then we nither can declare variable again with same name and  nor
//          value can re-assign or change. 

const userName = 'Rutvik';
// const userName = 'bhushan';
// userName = 'vishal';

console.log(userName)


//by using let and var we can ovveride or change the value of variable everytime.
// by using const we can not ovveride or change the value of vaeiable once we declared.beacause this is the constant.


// identifiers - all variables identified with unique names like x,y,a,b etc. and these unique names called as identifiers.


// The scope of a var variable is functional scope. 
// The scope of a let variable is block scope. 
// The scope of a const variable is block scope. It can be updated and re-declared into the scope.



// javaScript is dynamic type language means we don't need to specify
// dataType of variable whether integer,float or string etc. because it is dymamically
// used by javaScript engine.

// In javaScript we need to use var,let and const to specify the datatype.
// it can hold any type values like string,number,boolean etc.