function extraEnd(str){
  let tripleEnd = ""
  for(let i = 0; i < 3; i++){
    tripleEnd += str.substring(str.length - 2, str.length)
  }
  return tripleEnd
}
