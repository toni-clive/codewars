// https://www.codewars.com/kata/5d378318e04cd7001ad72a27/train/javascript

// Tags 
// Mathematics
// Fundamentals

// function doubleOrNothing(cash, wager, losses) {
//   //your code here
//   console.log(arguments)
//   for(let i=0 ;i<losses-1;i++){
    
//     wager*= 2
//   }
//     return cash<wager?  "I'll pay you back later": cash - wager
// }

function doubleOrNothing(cash, wager, losses) {
  //your code here
  let total = (2**(losses-1))*wager
    return total> cash ?"I'll pay you back later":cash - total
}


    console.log(doubleOrNothing(12, 2, 3), 4);
      console.log(doubleOrNothing(1124, 2, 10), 100);