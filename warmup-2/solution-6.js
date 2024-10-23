function stringSplosion(str){
  let resText = ""
  for(let i = 0; i < str.length + 1; i++){
    resText += str.substring(0, i)
  }
  return resText
}

stringSplosion("code")
