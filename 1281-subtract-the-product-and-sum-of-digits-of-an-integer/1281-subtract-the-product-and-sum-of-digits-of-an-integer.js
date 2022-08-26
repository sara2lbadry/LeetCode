/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n = n.toString().split("")
    var product = 1
    var sum = 0
    for(var i = 0; i < n.length; i++){
        console.log(n[i])
        product *= n[i]
        console.log(product)
        sum += Number(n[i])
        console.log(sum)

        
    }
    
    return product - sum
};