// https://www.codewars.com/kata/5434283682b0fdb0420000e6/train/javascript
// Tags 
// Fundamentals
// Strings

function caffeineBuzz(n) {
let res = ''
    if(n%3==0 && n%4==0) res+= "Coffee"
  else if(n%3==0) res+= "Java"
   if((n%3 ==0 || n%4==0) && n%2==0) res+= "Script"
  return res|| 'mocha_missing!'
}

function caffeineBuzz(n) {
  if(n%3==0 && n%4==0) return "CoffeeScript"
  if(n%6==0) return "JavaScript"
  if(n%3==0) return "Java"
    return 'mocha_missing!';
}


console.log(caffeineBuzz(4), "Java");