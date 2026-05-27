// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

// Tags 
// Algorithms
function validBraces(braces){
  //TODO 
  const b = {"}":"{","]":"[",")":"("}
  let stack = []
  for(let brace of braces){
    if(b[brace] && b[brace]==stack[stack.length-1]){
      stack.pop()
    }
    else if(b[brace] && b[brace] !=stack[stack.length-1]){
      return false
    }
    else{
      stack.push(brace)
    }
    
  }
  return stack.length==0
}


console.log(validBraces("()"))