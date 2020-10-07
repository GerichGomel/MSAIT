let testStr="Привет1#По1ка12Ар";

function ParceStr(str){
  return str.replace(/[\d\#]/g,"");
}
console.log(ParceStr(testStr));