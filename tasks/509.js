/**
 * @param {number} n
 * @return {number}
 */
//задача на число и рекурсию- число фибоначи
var fib = function(n) {
    if(n===0) return 0;
    if(n===1) return 1;
    return fib(n-2)+fib(n-1);
};