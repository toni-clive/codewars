// https://www.codewars.com/kata/57a2ab1abb994466910003af/train/javascript
// Tags 
// Puzzles
// Games
function splitOddAndEven(n) {
  //coding here...
  let final = []
  let strNum = `${n}`
  let isEven = !(strNum[0]%2)
  let current = [strNum[0]]
  for(let i = 1;i<strNum.length;i++){
    if(strNum[i]%2==0 && isEven){
      current.push(strNum[i])
    }
    else if(strNum[i]%2 && !isEven){
      current.push(strNum[i])
    }
    else{
      final.push(+current.join(''))
      isEven = !isEven
      current.length = 0
      current.push(strNum[i])
    }
  }
        final.push(+current.join(''))
return final
  
}

console.log(splitOddAndEven(123)  ,  [1,2,3])