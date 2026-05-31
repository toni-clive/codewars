

function sqrtApproximation(number) {
    if(!number) return 0
    let left = 0;
    let right = number
    while(left<=right){
        let mid = left+ Math.floor((right-left)/2)
        if(mid**2==number)return mid
        else if(mid**2>number) right= mid-1
        else{
            left = mid+1
        }
    }
  return [right,left];
}

console.log(sqrtApproximation(5), [2, 3]);
console.log(sqrtApproximation(4) , 2);
    console.log(sqrtApproximation(9) , 3);
    console.log(sqrtApproximation(16) , 4);
    console.log(sqrtApproximation(25) , 5);
    console.log(sqrtApproximation(36) , 6);
    console.log(sqrtApproximation(49) , 7);
    console.log(sqrtApproximation(100) , 10)
    console.log(sqrtApproximation(0) , 0)