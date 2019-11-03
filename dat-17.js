//first task https://www.codewars.com/kata/training-js-number-29-methods-of-arrayobject-concat-and-join/train/javascript

function bigToSmall(arr){
  let result = [];
  for(const a of arr){
   result= result.concat(a);
   result.sort((a, b) => b - a);
  }
    return result.join('>');
}

//second task  http://www.codewars.com/kata/573156709a231dcec9000ee8

const head = n => +String(n)[0];
const tail = n => +String(n).split('').slice(-1)[0];
const tailAndHead = a => {
   let result = [];
   a.reduce ((p,c) => {
    result.push(tail(p) + head(c));
    return p = c;
   });
   return result.reduce((p,c) => p*c);
}


//third task 

const blackAndWhite = arr => {
  if(!Array.isArray(arr)) return 'It\'s a fake array';
  if(arr.includes(13) && arr.includes(5)) return 'It\'s a black array';
  else return 'It\'s a white array';
}


