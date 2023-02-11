// spread operator - using spread operator we can pass multiple arguments to the function but function takes arguments as much as required and neglect the rest argument.

function sum(a,b,c,d,e){     //function will take only first five arguments and neglect rest arguments because here only five variable to store the arguments.
    return a+b+c+d+e;
}

// let arr = [10, 20, 30, 40, 50];
let arr = [10, 20, 30, 40, 50, 60, 70, 80];  

let result = sum(...arr)   //calling function

console.log(result);

// console.log(typeof arr);






//..........................prepbytes classes

// spread operator ... (spread operator denoted by three dots)
// spread operator is used for copy or cloning one object data to another object.
// /spread operator is very important 
// clone means --to create a product that is very similar to another.

// let user = {     //first object

//        name : 'Bhushan',
//         age : 22,
//     address : 'Amravati',
//     contact : 9604380494

// }

// let clone = {...user  ,lastname : 'Sontakke'}   //second object
// console.log(user)
// console.log(clone)



// spread oprator also used for array to combines or coping one array to another.
// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,0]
// let arr3 =[...arr1,...arr2];
// console.log(arr3);


// let obj1 = {name :'Bhushan',x:22}
// let obj2 = {name :'Divyani',y:20}


// let obj3 = {...obj1, ...obj2}
// console.log(obj3)       //{name: 'Divyani', x: 22, y: 20}

// if we are having same name variable like name in both object then it will be considered last object variiable means name :'Divyani'.


// let obj1 = {name :'Bhushan',z:22}
// let obj2 = {name :'Divyani',y:20}
// let obj3 = {name :'BHush',y:23}
// let obj4 = {...obj1, ...obj2 , ...obj3}
// console.log(obj4)       //{name: 'BHush', z: 22, y: 23}

