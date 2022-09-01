/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const visit = new Set();
    let str = n.toString().split('')

    while (!visit.has(n)) {
        visit.add(n);
        let sum = 0;
        digits = n.toString().split('');
        for (const digit of digits) {
            sum += Math.pow(parseInt(digit), 2)
        }
        n = sum;

        if (n == 1) 
            return true;
    }

    return false;

 
};