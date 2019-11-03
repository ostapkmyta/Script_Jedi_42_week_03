//first task

var regex=/http(s)?:\/\/(www.)?\w+(\.\w+)*\.(com.net|com|net)/gi;

//third task

var regex=/\d{3}(?!$)/g;

function addCommas(money,reg){
  if(money.length%3 === 2 && reg === regex) {
    reg = /(^\$\d(?!$))|(\d{3}(?!$))/g;
  } else if(money.length%3 === 0 && reg === regex) {
    reg = /(^\$\d{2}(?!$))|\d{3}(?!$)/g;
  }
  return money.replace(reg,x=>x+",")  //like this
}
