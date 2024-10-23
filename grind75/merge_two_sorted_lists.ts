/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let newListPlace = null;
  let newListHead = null; 
  let l1Place = list1, l2Place = list2;

  while(l1Place && l2Place) {
      let newNode = new ListNode(Math.min(l1Place.val, l2Place.val), null);

      if(l1Place.val <= l2Place.val) { 
          l1Place = l1Place.next;
          if(newListHead) {
              newListPlace.next = newNode;
              newListPlace = newListPlace.next;
          } else {
              newListHead = newNode;
              newListPlace = newListHead;
          }
      } else {
          l2Place = l2Place.next;
          if(newListHead) {
              newListPlace.next = newNode;
              newListPlace = newListPlace.next;
          } else {
              newListHead = newNode;
              newListPlace = newListHead;
          }
      }
  }

  // Add the remaining values of either list1 or list2 to the newList
  if(newListHead) {
          newListPlace.next = l1Place ? l1Place : l2Place;
  } else if(newListHead == null && (l1Place || l2Place)) {
      // This will be reached if one of the inputs was empty(null) to begin with
      newListHead = l1Place ? l1Place : l2Place;
  }

  return newListHead;
};