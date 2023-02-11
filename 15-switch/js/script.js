
// we use the switch statement when we have the multiple conditions but we want to execute one of them.
// break statement is used to  break execution of  the remaining cases if any one case execute once.

/*
 syntax:
 switch(choice)
 {
      case 1: code;
      break;
  
      case 2: code;
      break;
  
      case 3: code;
      break;
  
      case 4: code;
      break;
     
      default:
              code;

 }
*/


const day = 'Wensday';

switch(day)
{
    case Monday:
             document.write('its Monday');
            break;

    case Tuesday:  
                document.write('its Tuesday');
            break;
            
    case Wensday:
                document.write('its wensday');
            break;            

    case Thusday:
               document.write('its sunday');
            break;
            
    default:
            document.write('Wrong choice')

               
}















