function stringE(str){
  let eCount = 0
  for(let i = 0; i <= str.length - 1; i++){
    str[i] === "e" ? eCount += 1 : undefined
  }
  return eCount >=1 && eCount <= 3
}

stringE("e Hello e")
