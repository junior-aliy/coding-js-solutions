function has271(nums){
  let isTrue = false
  for(let idx = 0; idx < nums.length - 1; idx++){
    if(nums[idx] == 2 && nums[idx+1] == 7 && nums[idx+2] == 1) isTrue = true
  }
  return isTrue
}
