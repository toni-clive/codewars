// https://www.codewars.com/kata/525a566985a9a47bc8000670/train/javascript

function rotate(matrix,direction){
  let newM = Array.from({length:matrix[0].length},(_,i)=>[])
if(direction=='clockwise'){
   for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < matrix[row].length; column++) {
         newM[column][matrix.length-row-1] = matrix[row][column]
         
      }     
   }
}
else{
   for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < matrix[row].length; column++) {
         newM[matrix[0].length-column-1][row] = matrix[row][column]
         
      }     
   }
}
  return newM
}



let matrix = [
			[1,2,3],
			[4,5,6],
			[7,8,9],
			[10,11,12]
		];
		console.log(rotate(matrix, 'counter-clockwise'), [[3,6,9,12],[2,5,8,11],[1,4,7,10]] );
		// console.log(rotate(matrix, 'clockwise'), [[10,7,4,1],[11,8,5,2],[12,9,6,3]] );
// matrix = [
// 			[1,2,3],
// 			[4,5,6],
// 			[7,8,9]]
// 		console.log(rotate(matrix, 'clockwise'), [[7,4,1],[8,5,2],[9,6,3]] );

//       		matrix = [
// 			[1,2,3]
// 		];
      
		// console.log(rotate(matrix, 'counter-clockwise'), [[3],[2],[1]] );
		// console.log(rotate(matrix, 'clockwise'), [[1],[2],[3]] );
		// console.log(rotate(rotate(matrix, 'clockwise'), 'clockwise'), [[3,2,1]] );