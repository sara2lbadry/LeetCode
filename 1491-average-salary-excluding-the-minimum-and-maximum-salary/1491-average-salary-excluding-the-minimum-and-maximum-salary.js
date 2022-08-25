/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    var max = Math.max(...salary)
    var min = Math.min(...salary)
    var sum = 0
    var count = 0
    
    for(var i = 0; i < salary.length; i++){
        if(salary[i] !== max && salary[i] !== min) {
            sum += salary[i]
            count++
        }
    }
    
    return sum/count
};