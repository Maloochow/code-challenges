var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0)
    dummy.next = head
    let first = head
    let second = dummy
    for (let i = 1; i <= n; i++) {
        first = first.next
    }
    while (first != null) {
        first = first.next
        second = second.next
    }
    
    second.next = second.next.next
    return dummy.next
}


// var removeNthFromEnd = function(head, n) {
//     let current = head
//     let counter = 1
//     while (current) {
//         current = current.next
//         counter++
//     }
//     let position = counter - n - 1
//     if (position < 1) {
//         return head.next
//     }
//     counter = 1
//     current = head
//     while (counter < position) {
//         current = current.next
//         counter++
//     }
//     current.next = current.next.next
//     return head
// };