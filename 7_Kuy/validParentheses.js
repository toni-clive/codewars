// https://www.codewars.com/kata/6411b91a5e71b915d237332d/train/javascript

// Tags 
// Strings
// Parsing
// Algorithms

function validParentheses(braces) {
  // Your code here
  //TODO 
  let stack = []
  for(let brace of braces){
    if(brace=='('){
      stack.push(brace)
      } 
    else if(brace==')'&& stack.length==0){
      return false
    }
    else{
      stack.pop()
    }
  }
  return stack.length==0
}