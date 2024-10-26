function array667(nums){
  let counter = 0
  nums.forEach((num, idx, arr) => {
    if(arr[idx] === 6 && (arr[idx+1] === 6 || arr[idx+1] === 7)) counter++
  })
  return counter
}
