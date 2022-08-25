/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var temp = magazine
    for(c of ransomNote) {
        if(temp.indexOf(c) !== -1)
            temp = temp.replace(c, "")
        else
            return false
    }
   
    return true
    
};