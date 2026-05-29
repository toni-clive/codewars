// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

// Tags
// Mathematics
// Algorithms

function findMissingLetter(array)
{
  for(let i =1;i<array.length;i++){
    let sum = array[i].charCodeAt(0)-array[i-1].charCodeAt(0)
    if(sum!=1){
      return String.fromCharCode(array[i-1].charCodeAt(0)+1)
    }
  }
  return ' ';
}