// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
// Tags
// Fundamentals

function bmi(weight, height) {
  let res = weight/ height**2
  if(res<=18.5) return "Underweight"
  if(res<=25) return "Normal"
  if(res<=30) return "Overweight"
  return "Obese"
}