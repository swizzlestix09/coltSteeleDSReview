/* SINGLY LINKED LISTS
* A list that contains a head, tail and length property.
* Each list consists of nodes, and each node has a value and
* a pointer to another node/null.
head    length = 4   tail
 [1] => [2] => [3] => [4] => null
* do not have indexes
* connected via nodes with a next pointer
* random access is not allowed - have to
* traverse list to find item
* node- piece of data & reference to next
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// var first = new Node( 'Hi' );
// first.next = new Node( 'My' );
// first.next.next = new Node('name');
// first.next.next.next = new Node('is');
// first.next.next.next.next = new Node('Angie :)');

// console.log(first);

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //create a new node
  //if head is null
  //make head equal new node, and tail equal new node
  //if head is not null
  //set next property of tail to new node,and set tail property to new nove
  //increment length

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  //remove tail from linked list
  //create variable to store node next to tail
  //variable for head
  //iterate through list
  //if this.next.next === undefined
  pop(){
    if (!this.head) {
      return undefined;
    }
    var current = this.head;
    var nextToLast;
    while(current.next){
      nextToLast = current;
      current = current.next
    }
    var lastItem = this.tail
    delete this.tail;
    this.tail = nextToLast;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return lastItem;
  }

  shift() {
    var afterHead;

    if (!this.head) {
      return undefined;
    }
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    afterHead= this.head;
    delete this.head;
    this.head = afterHead.next;

    this.length--;
    return afterHead;
  }

  unshift(val) {

    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head
      this.head = newNode;
    }

    this.length++;
    return this
  }

  get(num) {
    //traverse list, returning item at that index
    var counter = 0;
    if (!this.head) {
      return undefined;
    }
    var current = this.head
    while(current) {
      //if there is a next, set current to next
      //if counter matches num, return node
      //else
      //increment counter

    }
    //if number is greater than or eq. to list, return undefined
    //when match found, return node found
  }
}

var intro = new SinglyLinkedList();
var my = new Node("My");
var name = new Node("Name");
var is = new Node("Is");
var angie = new Node("Angie");
intro.push(my);
intro.push(name);
//console.log('head' ,intro.head, 'tail', intro.tail);
intro.push(is);
intro.push(angie);
console.log( 'popped', intro.pop() , intro, intro.tail);
console.log('head' ,intro.head, 'tail', intro.tail);
console.log( 'shifted', intro.shift());