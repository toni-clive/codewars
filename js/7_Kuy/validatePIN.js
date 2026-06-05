// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
// Tags 
// Regular Expressions
// Fundamentals
function validatePIN (pin) {
  //return true or false
  return /^(\d{4}|\d{6})$/.test(pin)
}