function right2(str){
  if(str.length < 3) return str
  if(str.length === 3) return str.substring(1) + str.substring(0, 1)
  else return str.substring(Math.round(str.length / 2)) + str.substring(0, Math.round(str.length / 2))
}
