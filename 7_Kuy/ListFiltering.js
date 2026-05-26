// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
// Tags 
// Lists
// Filtering
// Data Structures
// Fundamentals
function filter_list(l) {
  let newL = []
  for(let i =0; i< l.length;i++){
    if(typeof l[i]== 'number'&& l[i]>-1){
      newL[newL.length] = l[i]
    }
  }
  return newL
  // Return a new array with the strings filtered out
}