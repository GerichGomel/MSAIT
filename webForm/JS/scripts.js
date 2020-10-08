document.addEventListener("DOMContentLoaded", ()=>{
  let butt = document.getElementById("butt")
  butt.addEventListener("click", parse)})

function parseStr(str, value){

  value = value.filter(val => val!='')
  
  for(let i = 1; i < value.length ;i++){

    while (str.indexOf(value[i]) !== -1)
    str = str.replace(value[i], value[0])
  }
  return str.split(value[0]).filter(val => val!='')
}

function parse() {
  let str = document.getElementById('parseStr').value
  let value = document.getElementById('parseValue').value
  document.getElementById('Str').value= parseStr(str, value.split(' '))
}


