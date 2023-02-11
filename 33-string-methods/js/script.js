//  string- string is a primitive data type which is used to store multiple charecters in a single variable.

let str = 'Hello My Name Is Bhushan And I Am From Pune';
console.log(str.length);   //in string empty space has a index value.
console.log(typeof str);  //string
console.log(str);


// every charecter has index value 

// sring methods----------//split means divide or break two or more parts.
console.log(str.split('')); //split() is a method of string which is used to splits a string into an array of subtrings.The split() method returns the new array.
console.log(str.split(' '));
console.log(str.charAt(20));  //charAt() is a method of string which is used to know the charecter at specified index value. It returns the charecter of specified index value.
console.log(str.indexOf('s'))  // indexOf() is a method of string which is used to know the index value of specified charecter. It returns the index value of first occurence of specified charecter. 
console.log(str.lastIndexOf('s')) //  lastIndexOf() is a method of string which is used to know the index value of specified charecter. It returns the index value of last occurence of specified charecter. 
console.log(str.charCodeAt(15))  //charCodeAt() used to know the aski value of specified index value charecter.
console.log(str.slice(12));
console.log(str.slice(12, 16)); //last not to be included.
console.log(str.slice(12, -4));
console.log(str.substr(5));      //same like a slice method
console.log(str.substr(5, 12));
console.log(str.substring(8));    //substring() method works same like slice method.but does not work with negative index.
console.log(str.substring(10, 15));  //last not to be included.
console.log(str.toLowerCase()); // toLowerCase() is a method of string which is used to convert charecteres upperCase to lowerCase. 
console.log(str.toUpperCase()); // toUpperCase() is a method of string which is used to convert charecteres lowerCase to UpperCase. 



let str1 = 'Bhushan';
let str2 = 'Rohit';
let str3 = 'vishal';

console.log(str1.concat(str2)); //concat() is a method of string which is used to combine two or more strings and returns a new string.

console.log(str1.concat(str2,str3));
console.log(str1.concat(str2,' ',str3));
console.log(str1.concat(`${str2}${str3}`));
console.log(str1.concat(`${str2} ${str3}`));

console.log(str1+str2+str3);
console.log(str1.concat(' ',str2))

console.log(str1+str2);
console.log(str1+' '+str2);















