function frontTimes(str, n){
  let resStr = ""
  for(let i = 0; i < n; i++) resStr += str.substr(0, 3)
  return resStr
}

frontTimes("salom js", 3)
