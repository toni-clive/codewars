// 
// Tags 
// Strings
// Fundamental
// sAlgorithms

function countConsonants(str) {
// Your code here!
let unique = new Set()
for(let c of str){
    if(/[aeiou]/i.test(c)==false && /[a-z]/i.test(c)){
        unique.add(c.toLowerCase())
    }

}
return  unique.size
}

console.log(countConsonants('5qLJkT0mjgh5fwQ,2:Omi,O5'),11)
       console.log( countConsonants("sillystring", 7));
       console.log( countConsonants("aeiou", 0));
       console.log( countConsonants("abcdefghijklmnopqrstuvwxyz", 21));
       console.log( countConsonants("Count my unique consonants!!", 7));
       console.log( countConsonants("bcdfghjklmnpqrstvwxyz", 21));