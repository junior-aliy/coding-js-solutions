function arrayFront9(nums){
  let isNine = false
  for(let i = 0; i < nums.length; i++){
    if(i <= 3) {
      if(nums[i] === 9) isNine = true
    }
  }
  return isNine
}

arrayFront9([1,2,3,9])
