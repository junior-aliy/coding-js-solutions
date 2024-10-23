function stringBits(str){
  let resText = ""
  for(let i = 0; i < str.length; i += 2) {
    resText += str[i]
  }
  return resText
}

stringBits("hello js")
