function doubleX(str){
  let countX = 0
  for(let i = 0; i < str.length; i++){
    if(str.charAt(str.indexOf("x")).includes("x") && str.charAt(str.indexOf("x") + 1).includes("x")) countX++
  }
  return countX > 1 ? true : false
}

doubleX("jsxcodingxx")
