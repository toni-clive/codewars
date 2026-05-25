// https://www.codewars.com/kata/59cfe5b023daccfd07000048/train/javascript
// Tags 
// Puzzles
// Restricted
function numberOfFolds(n) {
  let c = 1
  let counter = 0
  while(c<n){
    c= 2*c
    counter++;
  }
    return counter
}