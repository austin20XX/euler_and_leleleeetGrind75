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

function middleNode(head: ListNode | null): ListNode | null {

  let stepper = head;
  let halfStepper = head;

  let alternator = 1;

  while(stepper != null) {
    if(alternator % 2 == 0 ) {
        halfStepper = halfStepper.next;
    }
    stepper = stepper.next;
    alternator++;
  }

  return halfStepper;
};