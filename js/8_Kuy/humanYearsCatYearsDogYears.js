// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript
// Tags Fundamentals
var humanYearsCatYearsDogYears = function(h) {
  // Your code here!
  let v = [h,24,24]
  if(h>2){
    v[1]+= 4*(h-2)
    v[2]+= 5*(h-2)
  }
  else if(h<2){
    v[1]-=9
    v[2]-=9
  }
  
  return v;
}