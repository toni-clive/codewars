

function rotateAgainstClockwise(matrix, times) {
    // happy coding ;)
for(let loop =0;loop%4<times;loop++){
     for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
           let temp = matrix[i][j]
            matrix[i][j]= matrix[j][i] 
           matrix[j][i] = temp
        }
        
     }
     for(let k = 0;k<Math.floor(matrix[0].length/2);k++){
        let temp = matrix[k]
        matrix[k] = matrix[matrix.length-k-1]
        matrix[matrix.length-k-1] = temp
     }
}
  return matrix
}


// console.log(rotateAgainstClockwise([[1, 2],[3, 4]], 1), [[2, 4],[1, 3]]);
    console.log(rotateAgainstClockwise([[1, 2],[3, 4]], 2), [[4, 3],[2, 1]]);
    console.log(rotateAgainstClockwise([[1, 2],[3, 4]], 3), [[3, 1],[4, 2]]);
    console.log(rotateAgainstClockwise([[1, 2],[3, 4]], 4), [[1, 2],[3, 4]]);