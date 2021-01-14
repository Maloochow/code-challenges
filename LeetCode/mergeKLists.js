
var mergeKLists = function(lists) {
    let k = lists.length
    if (k === 0 ) {
        return null
    }
    let interval = 1
    while (interval < k) {
        for (let i = 0; i < k; i += interval*2) {
            lists[i] = merge2Lists(lists[i], lists[i+interval])
        }
        interval *= 2
    }
    return lists[0]
}

function merge2Lists(list1, list2) {
    if (!list1 && !list2) {
        return null
    }
    let head = new ListNode
    let current = head
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1
            current = current.next
            list1 = list1.next
        } else {
            current.next = list2
            current = current.next
            list2 = list2.next
        }
    }
    if (list1) {
        current.next = list1
    } else {
        current.next = list2
    }
    return head.next
}