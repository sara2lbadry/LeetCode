/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set()
    for (var i of nums) {
        if(set.has(i))
            return true
        else 
            set.add(i)
    }
    
    
    return false
    
    
};