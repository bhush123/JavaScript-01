/*
1) what is java script  ?
Ans- javaScript is a scripting language of web page, which is used to make web pages intractive with users.
     and javascript is a client side as well as server side language.

     history of javaScript-
     It was created in 1995 by Brendan Eich.

     ECMA is a europiun computer management association company which is non-profit company and it is designed 
     the standardization of computer.
     javaScript have been declared open source by ECMA company and now ecma company is handling the javascript language ES-6 (ECMA Script).


 2) There are two types of programming language
    Q.differnce between-
     1)Compiled programming language.
       Ans- compiled programming language firstly compile the program and then execute the program,
           and here source code does not required at the time execution.
           eg. c,c++,java etc are compiled language.
           (compile means conversion of binary code to machine code)
     
    2)Iterpreted programming language.
    Ans- interpreted language does not compiled the program directly execute the program,
         and here source code is required at the time of execution.
         eg. javascript,python etc are iterpretd language.

         compiled programming language is faster than interpreted language.

        
3) There are two ways to write javaScript,
   1)Internal js and 2)Exeternal js.

   Internal Js means we write script inside head tag as well as body tag of html page.
   And External Js means We write script inside the js file means outside the html page.
   the advantage of external js is we can attach the external js file to the multiple html pages.

4) There Are two types of data type ?
 
   1) Primitive dataTypes
      In primitive data Type we have 8 type,
      1)String
      2)Number
      3)Boolean 
      4)Bigint
      5)undefined
      6)Infinity
      6)Null
      7)Nan (Not a number)
      8)

    2) Non-Primirive data type(reference data type)
       In Noniprimitive data type we have 3 types 
       1)Array 
       2)Object
       3)Regular Expression(symbol)

       javaScript is dynamic type language means we don't need to specify
       dataType of variable whether integer,float or string etc. because it is dymamically
       used by javaScript engine.

       In javaScript we need to use var,let and const to specify the datatype.
       it can hold any type values like string,number,boolean etc.
       
*/ 


// string
console.log('Bhushan');

//number
console.log(35)

//boolean
console.log(20>30)

//infinity
console.log(1/0)

//BigInt
console.log(123345n)

// Nan
console.log('2a'/2)

// null
console.log(null) //no value


// array
var arr=[1,2,3,4]
console.log(arr)

// object

var empId={
     name:'bhushan',
     age:22,
     address:'pune'
}
console.log(empId)
console.log(empId.age)