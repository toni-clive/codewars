// https://www.codewars.com/kata/5a3e1319b6486ac96f000049/train/javascript
// Tags
// Arrays
// Fundamentals
function pairs(ar){
 //..
  let c = 0
  for(let i =0;i<ar.length;i+=2){
    let [f,s] = [ar[i],ar[i+1]]
    if(Math.abs(f-s)==1) c++
  }
  return c
};

console.log(pairs([1,2,5,8,-4,-3,7,6,5]), 3)