function endUp(str){
  let lastThreeChar = str.slice(str.length - 3)
  if(str.length <= 3) return str.toUpperCase()
  return str.replace(lastThreeChar, lastThreeChar.toUpperCase())
}

endUp("hello js")
