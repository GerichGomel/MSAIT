let testStr="Привет#По1ка12Ар";

function ParceStr(array){
  return array
    .split('')
    .filter(e => e !='#' && !isFinite(e))
    .join('')
}
console.log(ParceStr(testStr))

function ParceStr1(array){
  return array
    .split('')
    .reduce((accum, value) => {
      console.log(accum)
      if ( value !='#' && !isFinite(value) ) accum+=value
      return accum
    }, '')
  }
console.log(ParceStr1(testStr))

