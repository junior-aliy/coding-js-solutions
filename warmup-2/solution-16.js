function noTriples(nums){
  for (let i = 0; i < nums.length-2; i++) {
    let item = nums[i];
    if (nums[i+1] == item && nums[i+2] == item) 
    return false;
  }
  return true;
}
