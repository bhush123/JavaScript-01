// filter() -The filter() method returns or create a new array with all elements that satisfy the condition defined by the given function.
// filter() is a method of array.


// using for loop
const ages = [25, 35 ,45 ,65 ,75 ,85 ,95];

for(let i = 0; i < ages.length; i++){
    if( (ages[i] > 30) && (ages[i]<80)){

        // console.log(`${ages[i]}`) 
        // console.log(ages[i]);
    }
}


// using filter() method

let b = ages.filter((a) =>{
    return ((a > 30) && (a < 80));
})

console.log(b)
// console.log(`${b}`)
document.write(b)