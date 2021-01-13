var mergeTwoLists = function(l1, l2) {
    if (!l1 || !l2) {
        return l1 ? l1 : l2
    }
    let current1 = l1
    let current2 = l2
    let newHead = new ListNode()
    let currentNew = newHead
    while (current1 && current2) {
        if (current1.val < current2.val) {
            currentNew.next = current1
            current1 = current1.next
        } else {
            currentNew.next = current2
            current2 = current2.next
        }
        currentNew = currentNew.next
    }
    currentNew.next = current1 ? current1 : current2
    return newHead.next
};