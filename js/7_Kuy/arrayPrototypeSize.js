// http://codewars.com/kata/58638bd2210be9a9690001f7/train/javascript
// Tags 
// Arrays
// Fundamentals
Array.prototype.size = function() {
  let total = 0
  for(let i = 0; i<this.length;i++){
    total+=1
  }
  return total;
};