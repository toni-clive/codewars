// https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4/train/javascript
// Tags 
// Algorithms
// Arrays

function leastLarger(a,i) {
let leastLargerIndex;
let currMax
for (let index = 0; index < a.length; index++) {

    if(i==index)continue
    else if(currMax== undefined && a[index]>a[i]){
        currMax = a[index]
        leastLargerIndex = index
    }
    else if(a[index]>a[i] && currMax> a[index]){
        leastLargerIndex = index
        currMax = a[index]
    }
    }
  return leastLargerIndex>-1?leastLargerIndex:-1;
}
console.log(leastLarger([ 1, 2, 3, 4, 5, 0 ],5 ))
//    console.log( leastLarger( [4, 1, 3, 5, 6], 0 ), 3 );
//    console.log( leastLarger( [4, 1, 3, 5, 6], 4 ), -1 );
//    console.log( leastLarger( [1, 3, 5, 2, 4], 0 ), 3 )