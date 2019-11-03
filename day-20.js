//first task

function countAnimals(animals,count){
  var res = [];
  count.map(a=>res.push(animals.split(a).length-1));
  return res;
}

//second task

function findSimilarity(str,word){
 var regstr=word[0]                             
          +word.slice(1,-1).replace(/./g,".")  
          +word.slice(-1);                     
var reg1=new RegExp("^"+regstr+"$")
return str.split(' ').filter(a=>reg1.test(a)).join(" ")
}

//third task


var regex = RegExp(/^(-9|9).*0{4}$/);
