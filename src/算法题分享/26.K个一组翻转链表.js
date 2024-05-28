// 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

// 输入：head = [1,2,3,4,5], k = 2
// 输出：[2,1,4,3,5]

// 输入：head = [1,2,3,4,5], k = 3
// 输出：[3,2,1,4,5]

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

function createLinkList(arr){
  
}

function reverseLinkList(head, k) {
  let newLinkList = null
  while (head) {

    head = head.next
  }
}

const myReverse = (head, tail) => {
  let prev = tail.next;
  const headCopy = head;

  while (prev !== tail) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return [tail, headCopy];
}

const reverseKGroup = function (head, k) {
  const hair = new ListNode(0);
  hair.next = head;
  let pre = hair;

  while (head) {
    let tail = pre;
    // 查看剩余部分长度是否大于等于 k
    for (let i = 0; i < k; ++i) {
      tail = tail.next;
      if (!tail) {
        return hair.next;
      }
    }
    const nex = tail.next;
    [head, tail] = myReverse(head, tail);
    // 把子链表重新接回原链表
    pre.next = head;
    tail.next = nex;
    pre = tail;
    head = tail.next;
  }
  return hair.next;
};