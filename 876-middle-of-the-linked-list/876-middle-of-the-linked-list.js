/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let middle = head;
    var length = 0
    console.log(head)
    while(head){
        head = head.next
        length ++
        
    }
    for (var i = 0; i <= length / 2 -1; i ++) {
        middle = middle.next
        
    }
    console.log(middle)
    
    return middle

    
};