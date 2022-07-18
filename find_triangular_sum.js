const triangularSum = function(nums) {
    if(nums.length===1) return nums[0];
    else {
        for(let i=0; i<nums.length-1; i++) {
            nums[i] = nums[i] + nums[i+1];
            if(nums[i] > 9) {
                nums[i] = nums[i] % 10;
            }
        }

    nums.pop();

    return triangularSum(nums);
    }

    
};