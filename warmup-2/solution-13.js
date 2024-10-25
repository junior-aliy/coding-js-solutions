function altPairs(str){
  let newTxt = ""
  for(let i = 0; i <= str.length - 1; i += 4) {
    if(i == str.length - 1) newTxt = newTxt + str[i]
    else newTxt = newTxt + str[i] + str[i + 1]
  }
  return newTxt
}
