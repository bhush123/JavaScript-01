// note - if word has paranthesis called as method or function.
//        if word has no parenthesis called as property. eg. legnth is a property of array.

// map() creates a new array from calling a function for every array element. map() method calls a function once and performs operation for each element in an array.   ......refer this 


// use - map() method creates a new array and performs operation on each element.

//  Map() - map() is a method of array which takes a function and argument and in that argument we store whole array that we defined and then map() method performes 
//  operation on every element of array and creates a new array for every element.


const arr = [10, 20, 30, 40];

console.log(arr);   //before using map method

let b = arr.map((a) => {
    return a * 10 ;
});

console.log(b);        //after using map method



// ------------------------------------------

// map() method we can use for array obeject also.


const objArr = [
    {name: 'Bhushan', age:22, id:1},    // 0 index
    {name: 'Lalit' , age:24, id:2},     // 1 index
    {name: 'Rohit' , age:25, id:3}      // 2 index  .....  length of array is 3.
]

console.log(objArr);
console.log(objArr.length);
console.log(objArr[1])
console.log(objArr[1].age);

let c = objArr.map((d) => {
     return `my name is ${d.name} and my age is ${d.age}`
});

console.log(c)













