// what is the loop ---
// Ans -if we want to execute the same code again and again ,each time with a different value called as loop.


// There are two types of loop 
// 1)entry control loop - In entry control loop first we check the condition and then decides loop will be executed or not.
// eg. for loop and while loop.

// 2)exit control loop - In exit control loop first we execute the loop and after that we check the condition at the end of the loop.
//  eg. do while loop.

// these are three expressions of loop-
// Initialization - starting point of loop.
// condition - condition means decides how many times loop will be executed.
// Increment or decrement - steps to increase and steps to decrease.


// ----------------------------------------------------------
///##  WHILE LOOP ###

// Ans -if we want to execute the same code again and again ,each time with a different value called as while loop.
        // but in the case of  while loop first we do initialization outside of the loop then we write the condition and at the end of the while loop we write increment or decrement.

//syntax of while loop:

// initialization;

//while(condition)
//{

      //write your logic;

      //increment or decrement;
//     a++;        //you must write inecrement end of the while loop.

//}


// --------------------------------------------------------------------
///##  FOR LOOP ##

// Ans -if we want to execute the same code again and again ,each time with a different value called as for loop.
        // In the case of for loop we write initialization ,condition and incerement or decrement in single statement.

//syntax of for loop:
 
// for(initialization; condition; increment or decre.)
//    {
           //your logic;
//    }


// ---------------------------------------------------------------
/// ## do while loop
//In this loop once your program will be executed and then checks the condition ture or false at the end of the loop.
//and if condition is false then loop will be terminated and if condition is true then loop will be continued.

//syntax of do while loop is:

//initialization;

// do{
        
//       write your logic here;
//     
//    increment or decrement;
//    }
//    while(conditiion);




// ---------------------

// for(let i=1; i<=10; i++){
    
//     console.warn(i);
// }


// -------------------------

// let i=1;                //initialization

// while(i<=10){           //condition

//     console.warn(i);
//     i++;                 //increment or decrement
// }


// ---------------------------
// false condition example of do while loop 

// let i=11;
// do{
//      console.warn(i);
//      i++;
//   }while(i<=10);

// true condition example of do while loop

// let i=5;               //initialization
// do{
//      console.warn(i);
//      i++;               //increment or decrement
//   }while(i<=10);       //condition



// difference between while loop and do-while loop -

//         while loop                                          do while loop

// 1) while loop is a entry control loop                 1) do-while loop is exit control loop because here
//    beacause here first we chech the condition           we execute the code first and then checks the condition
//    and then execute the code.                           at end of the loop.      
   

// 2) while loop is also known as pre-test-loop.         2) do-while loop is also known as post-test-loop.  
   
// 3) In while loop semicolon is not a compulsury        3) In do-while loop semicolon is a compulsury at the              
//    at the end of the loop.                               end of the loop.



// difference between while loop and for loop -

//               while loop                                              for loop

// 1) The initialization and the condition checking             1) The initialization , condition checking  and  the iteration             
//    is done at the beginning of the loop.                        is done at the beginning of the loop.       
  
// 2) while loop is used when we dont'know                      2) for loop is used when we already known the iteration.
//    the iteration.           

// 3) if the condition is not mentioned in while loop           3) if the condition is not mentioned in for loop then loop
//    then raise the compilation error.                            will be execute infinite times.

// 4) In while loop we dont't write                             4) In for loop we write initialization ,condition and iteration 
//    initialization, condition , and iteration in                 in a single statement. 
//    a single statement.