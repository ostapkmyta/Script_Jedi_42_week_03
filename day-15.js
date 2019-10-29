//FIRST TASK https://www.codewars.com/kata/training-js-number-22-unlock-new-skills-arrow-function-spread-operator-and-deconstruction/train/javascript

let shuffleIt = (arr, ...shuffle) => {
  for ([a, b] of shuffle){
    [arr[a],arr[b]]=[arr[b],arr[a]]    
  }
  return arr;
}


//SECOND TASK https://www.codewars.com/kata/training-js-number-23-methods-of-arrayobject-push-pop-shift-and-unshift/javascript

let infiniteLoop = (arr, d, n) => {
    for (let i = 0; i < n; i++) {
        if (d === 'left') {
            arr[0].push(arr[1].shift());
            arr[1].push(arr[2].shift());
            arr[2].push(arr[0].shift());
        } else {
            arr[0].unshift(arr[2].pop());
            arr[1].unshift(arr[0].pop());
            arr[2].unshift(arr[1].pop());
        }
    }
    return arr;
}

//THIRD TASK https://www.codewars.com/kata/572cb264362806af46000793

function threeInOne(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 3) {
        result.push(arr.slice(i, i + 3).reduce((a, b) => a + b))
    }
    return result;
}
