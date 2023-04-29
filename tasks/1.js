/**
 * задача на цикл и массив и map
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//O(n)
var twoSum = function(nums, target) {
    //создаем мэп чтобы туда хранить элементы массива и их индекс
    const map=new Map();
    for(let i=0; i<nums.length; i++){
        //и главная логика в том чтобы не пробежаться по всему массиву, а сразу посмотреть есть ли элемент который равен target-nums[i], так поиск облегчится и мэп нужен чтобы это легко проверить и потом легко взять индекс
        if(map.has(target-nums[i])) return [i,map.get(target-nums[i])];
        //если нету такой разницы то этого текущего элемента сохраняем в мэп чтобы дальше поиск продолжать
        map.set(nums[i],i);
    }
};
