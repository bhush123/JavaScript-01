// document.getElementsByTagName - it returns HTML collection in the form of array.
//it is a selector which select the html element by tag name.

let target = document.getElementsByTagName('p');
console.log(target);

function myFun(){
    
    for(let i=0; i<target.length; i++){
        target[i].style.fontFamily = 'monospace'
        target[i].style.textTransform = 'upperCase'
    }
}











