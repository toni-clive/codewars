// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript



function solution(str){
  const rStr = [...str]
  let end = rStr.length-1
  for(let i =0;end>i;i++){
    [rStr[i],rStr[end]] = [rStr[end],rStr[i]]
    end--;
  }
  return rStr.join('')
}


  console.log(solution('world'), 'dlrow');
  console.log(solution('hello'), 'olleh');
  console.log(solution(''), '');
  console.log(solution('h'), 'h');