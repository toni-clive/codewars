// https://www.codewars.com/kata/5d50e3914861a500121e1958/train/javascript

function addLetters(...letters) {
  // your code here

  let sum = 0
  for (const num of letters) {
    sum+= num.charCodeAt(0)-96
  }
 sum= sum%26
    return sum? String.fromCharCode(sum%26+96):'z'
  

  
}


 const tests = [
    [['a', 'b', 'c'], 'f'],
    [['z'], 'z'],
    [['a', 'b'], 'c'],
    [['c'], 'c'],
    [['z', 'a'], 'a'],
    [['y', 'c', 'b'], 'd'],
    [[], 'z']
  ];

   tests.forEach(test => {
    const str = test[0].map(x => `"${x}"`).join(', ');
 console.log(str)
      console.log(addLetters(...test[0]), test[1]);
   })