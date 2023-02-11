// setInterval() - setInterval() method is a timer if we want to perform a function after some delay for everytime then we 
//                 are going to use setInterval() method.

// syntax -  setInterval(functionName , milisecond or interval or delay);
    



let ele = document.querySelector('#demo');

setInterval(clock, 1000);

function clock(){
    
    let currentDate = new Date();
    
    let hourse = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    
    ele.innerText = `${hourse} : ${minutes} : ${seconds}`;
    // ele.innerHTML = `<h1> ${hourse} : ${minutes} : ${seconds} </h1>`;
 
}










