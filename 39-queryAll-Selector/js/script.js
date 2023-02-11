// querySelectorAll -selects the all same name html element.

// let ele = document.querySelectorAll('img');
// console.log(ele);  //returns node list in the form of array index.

// function myFun(){
    
//     for(let i=0; i<ele.length; i++){
//         ele[i].setAttribute('src','https://images.pexels.com/photos/6605310/pexels-photo-6605310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
//     }
// }

// ---------------------------------second example to set different value on every element.

// let ele = document.querySelectorAll('li');  //returns node list in the form of array.
// let navigation = ['Home', 'About', 'Skill', 'Contact'];

// function myFun(){

//     for(let i=0; i<ele.length; i++){
        
//       ele[i].innerHTML = navigation[i];
    
//     }
// }


// ----------------------------------------to set diffrent image on every element.


let ele = document.querySelectorAll('img');  //returns node list in the form of array means in the form of index.

function myFun(){
    
    for(let i=0; i<ele.length; i++){
        
        ele[0].setAttribute('src', 'https://images.pexels.com/photos/6605310/pexels-photo-6605310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        ele[1].setAttribute('src', 'https://media.istockphoto.com/id/1399000045/photo/wedding-guests-clapping-hands-as-the-newlywed-couple-walk-down-the-aisle-joyful-bride-and.jpg?b=1&s=170667a&w=0&k=20&c=BVEqcua-bQik4loA3L-SAr1iS-Fg58haObnUwZNvr4k=');
        ele[2].setAttribute('src', 'https://media.istockphoto.com/id/1335304140/photo/beautiful-young-bride-and-groom-outside-in-field.jpg?b=1&s=170667a&w=0&k=20&c=GPbKMizjdt51uIQOWtS0OAHPgKNLoccvdp2XmuJ6-Ug=');
    }

}








