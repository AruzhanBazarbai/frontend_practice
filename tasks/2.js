/**
 * задачка на рекурсию и на linked list и еще использую метод библиотеки Math
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order, and each of their nodes contains a single digit. 
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // создаем рекурсию, k-остаток
    const recF=(l1,l2,k)=>{
        if(!l1 && !l2 && !k) return null;
        const val=(l1 ? l1.val : 0) + (l2 ? l2.val : 0)+k; //сумма чисел если есть и + остаток от прежних чисел
        const node=new ListNode(val%10,recF(l1?.next,l2?.next,Math.floor(val/10))); //создаем новый node, в котором значение остаток от деления на 10. то есть даже если сумма не больше 10 будет возвращаться та же сумма. и на next записываем результат следующих вызовов рекурсии чтобы был связь
        return node; //возвращаем node

    }
    return recF(l1,l2,0); //возвращаем результат
};