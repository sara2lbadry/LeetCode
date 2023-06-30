/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var result = []
    result = arr.filter((ele, i) => fn(ele, i))
    return result
};
