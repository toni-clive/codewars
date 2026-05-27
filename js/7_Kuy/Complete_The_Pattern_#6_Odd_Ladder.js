// https://www.codewars.com/kata/5574940eae1cf7d520000076/train/javascript
// Tags ASCII Art
// Fundamentals
function pattern(n){
  let output=[];
  // Happy Coding ^_^
  if(n%2==0) n--;
  for(let i =1;i<=n;i+=2){
    let currentRow = Array.from({length:i},(_,j)=>`${i}`)
    output.push(currentRow.join(''))
  }
  return output.join('\n')
}