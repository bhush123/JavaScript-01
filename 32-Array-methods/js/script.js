
let arr = ['Bhushan','Rohit', 'Vishal', 'Kartik', 'Arnav', 'Somesh', 'Parshya', 'Yellow', 'Jenny', 'Macki'];
console.log('Length of array is', arr.length);
console.log(`Length of arrry is ${arr.length}`);

// Array Methods--------------------------

console.log(arr);
console.log(arr.sort());   //sort() is a method of array which is used to sort an array in ascending order and returns the sorted array.
console.log(arr.reverse()); //reverse() is a method of array which is used to reverse the array.
console.log(arr.unshift('Bhavesh')); //unshift() is a method of array and is used to add the new element in existing array at first or beggining of array and returns new length of array.
console.log(arr);
console.log(arr.push('Vaibhav')); //push() is a method of array which is used to add the new element in existing array at last and returns new length of array.
console.log(arr);
console.log(arr.shift()); //shift() is a method of array which is used to remove the first element of array and returns the removing element of array.
console.log(arr);
console.log(arr.pop()); //pop() is a method of array which is used to remove the last element of array and returns the removing element of array.
console.log(arr);
console.log()
console.log(arr.join()); //join() is a method of array which is used to convert all array elements into a string.
console.log()
console.log(arr.slice(4, 7));  //slice() is a method of array which is used to fetches the elements from array between that indices which we provided. 
console.log(arr.splice(3, 4)); // here  3 is a index value and 4 is count of index after 3 index value.means elements will be fetched from 3 index to 7 index but last will not be included.
                                //splice() is a method of array which is used to fetches the elements from array for that we have to provide one index value and count value. 