function max1020(a, b){
  if ((a >= 10 && a <= 20) && (b >= 10 && b <= 20)) { 
    return a > b ? a : b
  }
  if(a >= 10 && a <= 20) return a
  if(b >= 10 && b <= 20) return b
  return 0
}

max1020(11, 19)
