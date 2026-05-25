// https://www.codewars.com/kata/557592fcdfc2220bed000042/train/javascript
// Tags 
// ASCII 
// ArtFundamentals
function pattern(n){
   // Happy Coding ^_^
  let rows = []
  for(let i =0;i<n;i++){
    let currentRow = []
    for (let j = 0; j<n;j++){
      let currentDigit = (i+j+1)%n|| n
    
      currentRow.push(currentDigit)
    }
    rows.push(currentRow.join(''))
  }
 
  return rows.join('\n');
}


      // console.log(pattern(  7),"1234567\n2345671\n3456712\n4567123\n5671234\n6712345\n7123456");
      // console.log(pattern(  1),"1");
      console.log(pattern(  4),"1234\n2341\n3412\n4123");
      // console.log(pattern(  0),"");
      // console.log(pattern(-25),"");