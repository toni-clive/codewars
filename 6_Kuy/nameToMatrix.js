// https://www.codewars.com/kata/5a91e0793e9156ccb0003f6e/train/javascript

function matrixfy(str) {
  if(!str) return 'name must be at least one letter'
  const size=Math.ceil(Math.sqrt(str.length))
  let matrix=Array.from({length:size},(_,i)=>Array.from({length:size},(_,j)=>  str[j+(i*size)]||'.' ))
  return matrix
}

console.log(matrixfy('Beyonce'), [['B', 'e', 'y'], ['o', 'n', 'c'], ['e', '.', '.']])