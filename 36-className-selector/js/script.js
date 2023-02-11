// document.getElementsByClassName - it is a selector to select the html element.
//document.getElementsByClassName returns an HTML collection in the form of array. collection means its a array.


let ele = document.getElementsByClassName('nav-item');
console.log(ele);  
 ele[2].style.background = 'red'

 function myFun(){
    
    for(let i=0; i<ele.length; i++){

        ele[i].style.fontSize = '25px';
    }
 }


















