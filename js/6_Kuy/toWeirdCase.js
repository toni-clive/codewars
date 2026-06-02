// https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
// Tags 
// Strings
// Algorithms
function toWeirdCase(string){
  //TODO
  let letters = [];
  let e = 0
  for(let i = 0; i < string.length;i++){
     if(string[i]==' '){
      letters.push(string[i])
      e=0
    }
    else if(e%2){
      letters.push(string[i].toLowerCase())
      e++
    }
    else if(e%2==0){ 
      letters.push(string[i].toUpperCase())
      e++
    }
  }
  return letters.join('')
}