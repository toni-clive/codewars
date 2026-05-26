// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
// Fundamentals

function enough(cap, on, wait) {
  // your code here
  const res = on+wait
  if(res>cap){
    return res-cap
  }
  return 0
}