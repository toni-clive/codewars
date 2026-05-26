// https://www.codewars.com/kata/576400f2f716ca816d001614/train/javascript
// Tags 
// Fundamentals
// Recursion
// Algorithms

function reduce(fraction) {
  //simplify me!
                  let s = Math.min(...fraction)
  function helper(n){
                  
  if(fraction[0]%n ==0 && fraction[1]%n ==0){
    return [fraction[0]/n,fraction[1]/n]
                  }
    
    return Math.max(...fraction) % n!=0 ? helper(Math.max(...fraction) % n):helper(Math.min(...fraction) % n)
  }
  return helper(s)
}
console.log(reduce([ 10956590, 13611876 ]))
// console.log(reduce([45, 120]))