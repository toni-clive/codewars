// https://www.codewars.com/kata/5983cba828b2f1fd55000114/train/javascript
// Fundamentals

function oddOne(arr) {
  // Code here
  for(let i = 0; i < arr.length; i++){
    if(arr[i]&1){
      return i
    }
  }
  return -1
}