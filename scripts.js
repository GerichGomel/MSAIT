/*let testStr="Привет#По1ка12Ар";

function ParceStr(str){
  let getStr = "";
  let pos1 = 0, pos2 = 0;
  for (let i = 0;i < str.length;i++){

    if (str[i] == '#' || isFinite( str[i] ) ) {
      getStr+=str.slice(pos1, pos2 );
      pos1 = i + 1;    
    }
    pos2++;
  }
  if ( (str[str.length-1] != "#") 
  || !isFinite( str[str.length-1] ) ) 
  getStr+=str.slice(pos1,str.length);
  return getStr;
}
console.log(ParceStr(testStr));
*/
function parseUrl (str){

  let protocolEnd = str.indexOf('://');
  
  let protocol = str.slice(0,protocolEnd);
  
  str = str.slice(protocolEnd+3);
  
  console.log(str)
  
  let hostEnd = str.indexOf('/');
  
  console.log(hostEnd)
  
  let host = str.slice(0,hostEnd);
  
  console.log(host)
  
  str = str.slice(hostEnd+1);
  
  console.log(str)
  
  let pathEnd = str.indexOf('?');
  let obj={

  }
  if (pathEnd === -1) {
    pathEnd=str.length;
  }
  
  let path = str.slice(0, pathEnd);
 
  str = str.slice(pathEnd+1)
  
  while (str.length > 1 ){
    let valueEnd = str.indexOf('&')
    if (valueEnd === -1) valueEnd = str.length
    obj[str.slice(0, str.indexOf('='))] = str.slice(str.indexOf('=') + 1, valueEnd)
    str = str.slice(valueEnd+1)
    console.log(str.length)
  }

  return {
  protocol:protocol,
  host:host,
  path:path,
  obj:obj
  };
  }
  
  
  let str = 'http://vasua.ivanov.ru/catalog/menu/?product_id=23&ct_id=2';
  
  let result = parseUrl(str);
  
  console.log(result);