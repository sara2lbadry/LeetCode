/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var stack = s.split(" ")
   console.log(stack)
    
    return stack.filter(item => item !== '').reverse().join(" ");

    
};