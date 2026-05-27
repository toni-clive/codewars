// https://www.codewars.com/kata/54f8b0c7a58bce9db6000dc4/train/javascript
// Tags 
// Arrays
// Algorithms
function rotate(array, n) {
  let arr=[]
  for(let i =0;i<array.length;i++){
    let pos = ((n+i)%array.length)
    if(pos <0){

        arr[array.length-(-1*pos)]=array[i]
    }
    else{
            arr[pos]=array[i]
    }    
  };
  return arr
}
     console.log(rotate([1, 2, 3, 4, 5], -5))
        // console.log(rotate([1, 2, 3, 4, 5], 0))
        // console.log(rotate([5, 1, 2, 3, 4], 1))
        // console.log(rotate([4, 5, 1, 2, 3], 2))
        // console.log(rotate([3, 4, 5, 1, 2], 3))
        // console.log(rotate([2, 3, 4, 5, 1], 4))