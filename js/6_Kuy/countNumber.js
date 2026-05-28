// https://www.codewars.com/kata/5842f943c5c9b0f7140001e1/train/javascript



function countNumber(matrix, num) {
    //coding and coding..
  let total = 0
  for(let i = 0 ; i <matrix.length;i++){
    let left = 0
    let right = matrix[i].length-1
    while(left<=right){
    let mid = left+Math.floor((right-left)/2)
      if(matrix[i][mid]==num){
        total++;
        break
      }
      else if(matrix[i][mid]>num){
        right = mid-1;
        
      }
      else{
        left = mid+1
      }
    }

    }
    return total;
}

console.log(countNumber([
    [1, 3, 5, 7],
    [2, 4, 7, 8],
    [3, 5, 9, 10]],3),2)

console.log(countNumber([
    [62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    [63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],
    [64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],
    [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83],
    [66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84],
    [67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85]],81),5)