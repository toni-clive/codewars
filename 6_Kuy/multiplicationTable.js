// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
// Tags 
// Arrays
// Fundamentals

function multiplicationTable(size) {
  let table=Array.from({length:size},(_,i)=>  Array.from({length:size},(_,j)=>(i+1)*(j+1))
  )

  return table // insert code here
}

console.log(multiplicationTable(3, [[1, 2, 3], [2, 4, 6], [3, 6, 9]]))