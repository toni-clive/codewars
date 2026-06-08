// https://www.codewars.com/kata/54599705cbae2aa60b0011a4/train/javascript
// Tags 
// Fundamentals
function one(arr, fun){
  // ...
  let t = 0
  for(let i = 0;i<arr.length;i++){
    if(fun(arr[i])) t++
  }
  return t==1|| false
}