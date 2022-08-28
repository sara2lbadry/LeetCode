/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    var product = 1
    for(var i = 0; i < nums.length; i++) {
        product *= nums[i]
        console.log(product)
    }
    if(product > 0)
        return 1
    if(product < 0)
        return -1
    else 
        return 0
    
};