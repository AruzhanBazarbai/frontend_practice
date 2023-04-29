/**
 * задача на замыкание
 * Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.
 */
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    // эта функция застряла в этой локальной области createCounter и поэтому он будет работать с изначальным значением n и в дальнейшем
    return function() {
        //n сначала будет возвращаться а потом увеличить свое значение на 1.
        return n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */