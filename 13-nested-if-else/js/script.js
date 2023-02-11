// nested if-else

// nested if-else means we can write if-else conditions inside another if-else block.

//which one is greater ?
const a =Number(prompt('Enter the value of a'));
const b =Number(prompt('Enter the value of b'));
const c =Number(prompt('Enter the value of c'));

if(a > b){
    // console.warn(`a = ${a} is greater`);
    if(a > c) {
        console.warn(`a = ${a} is greater`)
    }
    else{
        console.warn(`c = ${c} is smaller`)
    }
}
else{
      if((b > a) && (b > c) ){
            console.warn(`b = ${b} is greater`)
      }
      else{
            console.warn(`c = ${c} is greater`)
      }
}