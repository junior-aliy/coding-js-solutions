function intMax(a, b, c){
  const numArr = [a, b, c]
  let bigNum = a
  numArr.forEach(num => {
    if(bigNum <= num) bigNum = num
  })
  return bigNum
}

intMax(0, 5, -1)
