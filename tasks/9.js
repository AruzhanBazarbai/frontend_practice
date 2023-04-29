/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * @param {number} x
 * @return {boolean}
 */
//это задача для работы с числами но я решила превратить в строку и работать с ней
var isPalindrome = function(x) {
    const str=x.toString();
    const tempStr=str.split("").reverse().join("");
    return str===tempStr;
    
};