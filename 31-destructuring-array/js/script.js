
let ele = document.getElementById('demo');

let arr = ['Bhushan', 25, 'Btech', 'Pune'];  //this is a array

// ele.innerText = `${arr}`;
// ele.innerHTML = `<h1>${arr}</h1>`;
// console.log(typeof arr);


// let [name, age, education, city] = arr;     //we given the reference of arr array that we defined above.

// console.log(name, age, education, city);
// console.log(`my name is ${name} and my city is ${city}`);


// let [name, education, city] = arr;
// console.log(name);
// console.log(education);
// console.log(city);

// add coma if we want skip any element or index of Array.
// let [name,, education, city] = arr;
// console.log(name);
// console.log(education);
// console.log(city);


let [name, age, education, city1, city2 = 'Mumbai'] = arr;

console.log(name);
console.log(age);
console.log(education);
console.log(city1);
console.log(city2);



