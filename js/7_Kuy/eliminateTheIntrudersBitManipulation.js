// https://www.codewars.com/kata/5a0d38c9697598b67a000041/train/javascript
// Tags 
// Bits
// Strings
// Fundamentals


function eliminateUnsetBits(number) {
  // your code here
  let n = number.replace(/0/g,'')
  if(n) return parseInt(number.replace(/0/g,''),2)
  return 0
}