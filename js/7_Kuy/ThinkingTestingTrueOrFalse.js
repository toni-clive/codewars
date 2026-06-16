// https://www.codewars.com/kata/56d931ecc443d475d5000003/train/javascript
// Tags 
// Puzzles

function testit(n){
  let match = (n).toString(2).match(/1/g)
  return match?.length || 0
}