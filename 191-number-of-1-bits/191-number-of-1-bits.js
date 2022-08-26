/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    n = n.toString(2)
    var count = 0
    
    for(var i = 0; i < n.length; i++) {
        if(n[i] === '1') {
            count += 1
        }
        
    }
    return count
    
};