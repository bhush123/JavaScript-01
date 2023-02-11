
//input dataType bydefault is string that's why we have to write here Number() or parseInt() or parseFloat() to convert into number dataType.                  


function cal(bhushan){    
    const firstNumber =Number(document.getElementById('inpValue1').value);
    const secondNumber = parseFloat(document.getElementById('inpValue2').value);
    const ele = document.getElementById('result');
    const operator = bhushan.value;

     switch(operator){
        
        case 'Addition':
            ele.innerText =`addition of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`; 
        break;

        case 'Substraction':
            ele.innerText =`substraction of ${firstNumber} and ${secondNumber} is ${firstNumber - secondNumber}`; 
        break;

        case 'Multiplication':
            ele.innerText =`multiplication of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}`; 
        break;

        case 'Division':
            ele.innerText =`division of ${firstNumber} and ${secondNumber} is ${firstNumber / secondNumber}`; 
        break;
     }


}