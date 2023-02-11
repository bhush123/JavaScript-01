// Note - every html elements or tags in javaScript is treated or considered as object because javaScript only understand Objects not directly html tags,
//that is why when our web page is loaded on browser that time browser creates DOM structure of our web page and inside DOM structure all the html tags or elements is treated as object then javaScript can understand html elements in the form of objects. 


// what is DOM-(Document Object Model).

// Document Object Model is such a technology, with the help of DOM we can manipulate or control or handle any html document from javaScript,
// means using document object model we can create html element ,we can remove existing element, we can replace existing elements etc. called as Document Object Model.

// Now coming to the HTML DOM methods, there are many methods in which users can access or manipulate HTML elements using JavaScript:

//  document.getElementById() Method           -this is a selector to select an html element for manupulation the html element from javaScript using DOM. and it is a method of DOM.
//  document.getElementsByClassName() Method   -this is a selector to select an html element for manupulation the html element from javaScript using DOM. and it is a method of DOM.
//  document.getElementsByTagName() Method     -this is a selector to select an html element for manupulation the html element from javaScript using DOM. and it is a method of DOM.
//  document.querySelector() Method            -this is a selector to select an html element for manupulation the html element from javaScript using DOM. and it is a method of DOM.
//  document.querySelectorAll() Method         -this is a selector to select an html element for manupulation the html element from javaScript using DOM. and it is a method of DOM.
//  document.createElement() Method            -createElement() is a method of DOM which is used to create html element inside html document using DOM from javaScript.       
//  document.createTextNode() Method     
//  appendChild() Method.
//  replaceChild() Method
//  removeChild() Method

//document.createElement() method------------------------------------
let btn = document.getElementsByTagName('button')[0];


btn.addEventListener('click', function(){

    let createNewElement = document.createElement('span');
    let createNewContent = document.createTextNode('Hello Bhushan');
    let existingElement = document.getElementsByClassName('demo')[0];

    console.log(createNewElement);
    console.log(createNewContent);
    console.log(existingElement);

    createNewElement.appendChild(createNewContent);
    existingElement.appendChild(createNewElement);   //append means to add somthing to a documents at last.

})

//insertBefore() method------------------------------------
let btn2 = document.getElementsByClassName('InsertBefore')[0];

btn2.addEventListener('click',()=>{
  
    let createNewElement = document.createElement('img');
        createNewElement.setAttribute('src','https://images.unsplash.com/photo-1672862817339-51ef2610a5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1209&q=80')
        createNewElement.setAttribute('width','300');

     let parent = document.getElementsByClassName('demo')[0];
     let existingElement = document.querySelector('#pune');

     parent.insertBefore(createNewElement , existingElement);

     console.log(parent);

})



//replaceChild() method------------------------------------

let btn3 = document.getElementsByClassName('replaceElement')[0];

btn3.addEventListener('click', ()=>{

      let newElement = document.createElement('p');
      let newContent = document.createTextNode('I am Web a Developer');
      
      newElement.appendChild(newContent);
      
      let parent = document.getElementsByTagName('div')[0];
      let existingElement = document.getElementsByTagName('h1')[0];
      
      parent.replaceChild(newElement, existingElement);
      
      
      console.log(parent);

})
 

//removeChild() method------------------------------------

let btn4 = document.getElementsByClassName('removeElement')[0];

btn4.addEventListener('click',()=>{

    let removeElement = document.querySelector('p');

    let parent = document.getElementsByClassName('demo')[0];

    parent.removeChild(removeElement);
    console.log(parent);

})
























