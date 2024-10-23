function array123(nums){
  let isTrue = false
  nums.forEach((num, idx) => {
    nums[idx] === 1 && nums[idx +1] === 2 && nums[idx + 2] === 2 ? isTrue = true : isTrue = false
  })
  return isTrue
}

array123([1,3,4,1,2,3])
