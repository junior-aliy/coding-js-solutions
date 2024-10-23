function countXX(str){
  let countX = 0
  for(let i = 0; i < str.length; i++) {
     if(str.charAt(i).includes("x") && str.charAt(i + 1).includes("x")) countX += 1
  
  }
   return countX
}

countXX("jsxxxtm")
