// Math is a built-in or pre-defined object of javascript which is used to perform mathematical operations on the Number type. Math is not a constructor function.
// math object has some properties.

console.log(typeof Math);    //object
console.log(typeof(Math));
console.log(Math); 

console.log(Math.PI);

let r = 5 ;

console.log(Math.PI * r * r);

console.log(Math.pow(5,2));  // 5 is a base and 2 is a power value. pow() is a method of math object which is used to calculate power of any number or constant.
console.log(Math.sqrt(25));  // sqrt() is a method of math object which is used to calculate square root of any number.
console.log(Math.cbrt(27));  // cbrt() is a method of math object which is used to calculate cube root of any number.
console.log(Math.ceil(4.8));  //ceil() method gives current value if we entered floating value.
console.log(Math.floor(4.2)); //floor() method gives next value if we entered floating value.
console.log(Math.round(4.4)); //round() method is a combination of ceil() and floor() method means if we enter 4.4 it gives current value means 4 , and if we enter 4.5 or 4.6 it gives next value means 6. below the .5 it gives current value and above the .5 it gives next value.
console.log(Math.round(4.5));
console.log(Math.round(4.7));
console.log(Math.abs(-1530)); // absolute or abs() method returns only positive value of negative value. 


let otp = Math.random() * 10000;  //random() is a method of math object which is used to generate otp number.

console.log(Math.trunc(otp));     //trunc() is a method of math object which is used to takes only integer part of floating number.

console.log(Math.min(-2, -5, 8, 10))  // to find min value.
console.log(Math.max(-2, -5, 8, 10))  // to find max value.









