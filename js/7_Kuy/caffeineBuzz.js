// https://www.codewars.com/kata/5434283682b0fdb0420000e6/train/javascript


function caffeineBuzz(n) {
let res = ''
    if(n%3==0 && n%4==0) res+= "Coffee"
  else if(n%3==0) res+= "Java"
   if((n%3 ==0 || n%4==0) && n%2==0) res+= "Script"
  return res|| 'mocha_missing!'
}


console.log(caffeineBuzz(4), "Java");