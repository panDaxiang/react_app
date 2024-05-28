const list = {
  value: 100,
  next: {
    value: 200,
    next: {
      value: 300,
      next: {
        value: 400,
        next: {
          value: 500,
          next: null
        }
      }
    }
  }
}

/** 
 * 原链表 1 => 2 => 3 => 4 => 5 => null 新链表 null
 * 原链表 2 => 3 => 4 => 5 => null 新链表 1 => null
 * 原链表 3 => 4 => 5 => null 新链表 2 => 1 => null
 * 原链表 4 => 5 => null 新链表 3 => 2 => 1 => null
 * 原链表 5 => null 新链表 4 => 3 => 2 => 1 => null
 * 原链表 null 新链表 5 => 4 => 3 => 2 => 1 => null
 */

function reverseLinkList(linkList){
  let newLinkList = null
  while(linkList){
    const next = linkList.next
    linkList.next = newLinkList
    newLinkList = linkList
    linkList = next
  }

  return newLinkList
}

console.log(reverseLinkList(list));