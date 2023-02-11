// setTimeout() -setTimeout() it is a timer, if we want to perform a function after some delay for one time then we
//               are going to use setTimeOut().

//setTimeout()method takes the two things first is function and second is delay.
//syntax :  setTimeout(functionName , milliseconds or delay )

// let ele = document.getElementsByClassName('demo')[0];  //we need to  specify index here because it returns htmlcollection in the form of array.
// let ele = document.querySelector('.demo');
// setTimeout(myFun , 2000);

// function myFun(){
   
//     ele.style.background = 'yellow';

// }


// using arrow function

let ele = document.querySelector('.demo');
setTimeout(()=>{
    
    ele.style.background = 'yellow';

},2000)
