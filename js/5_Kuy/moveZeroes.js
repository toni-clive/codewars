
function moveZeros(arr) {
  let f = 0;
  for(let i =1;i<arr.length;i++){
   if(arr[f]===0 && arr[i]!==0){
     let temp = arr[i]
     arr[i] = arr[f]
     arr[f] = temp
     f++;
     
   }
     if(arr[f]===0 && arr[i]===0){
     continue
     
   }
    
    else if(arr[f]!==0 ){
     f++;
     
   }
    
  }
  return arr
}
console.log(moveZeros([
  9, 0, 0, 9, 1, 2, 0,
  1, 0, 1, 0, 3, 0, 1,
  9, 0, 0, 0, 0, 9
]))
    console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
