function arrayCount9(nums){
  let countNine = 0
  nums.forEach(num => {
    num === 9 ? countNine += 1 : null
  })
  return countNine
}

arrCount9([1, 2, 9, 9])
