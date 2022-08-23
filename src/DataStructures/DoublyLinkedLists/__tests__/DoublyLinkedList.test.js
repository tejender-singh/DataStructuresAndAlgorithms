import DoublyLinkedList from '../DoublyLinkedList';

describe('DoublyLinkedList', () => {
  it('should create empty linked list', () => {
    const doublyLinkedList = new DoublyLinkedList();
    expect(doublyLinkedList.start.next).toBe(null);
    expect(doublyLinkedList.start.prev).toBe(null);
    expect(doublyLinkedList.toString()).toBe('');
  });

  it('should append node to linked list', () => {
    const doublyLinkedList = new DoublyLinkedList();

    doublyLinkedList.append(1);
    doublyLinkedList.append(2);

    expect(doublyLinkedList.toString()).toBe('1,2');
  });

  it('should insert node to linked list at correct index', () => {
    const doublyLinkedList = new DoublyLinkedList();

    doublyLinkedList.append(1);
    doublyLinkedList.append(2);
    doublyLinkedList.insert(31, 1);

    expect(doublyLinkedList.toString()).toBe('1,31,2');
  });

  it('should delete first node from linked list where value matches', () => {
    const doublyLinkedList = new DoublyLinkedList();

    doublyLinkedList.append(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);
    doublyLinkedList.append(4);
    doublyLinkedList.deleteItem(3);

    expect(doublyLinkedList.toString()).toBe('1,2,4');
  });

  it('should contain correct value of prev and next', () => {
    const doublyLinkedList = new DoublyLinkedList();

    doublyLinkedList.append(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);
    doublyLinkedList.append(4);

    const first = doublyLinkedList.start.next;
    const second = doublyLinkedList.start.next.next;
    const third = doublyLinkedList.start.next.next.next;
    const fourth = doublyLinkedList.start.next.next.next.next;

    doublyLinkedList.print();
    expect(first.next).toBe(second);
    expect(first.prev).toBe(null);
    expect(second.next).toBe(third);
    expect(second.prev).toBe(first);
    expect(third.next).toBe(fourth);
    expect(third.prev).toBe(second);
    expect(fourth.next).toBe(null);
    expect(fourth.prev).toBe(third);
  });

  it('should find first index from linked list where value matches', () => {
    const doublyLinkedList = new DoublyLinkedList();

    doublyLinkedList.append(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);
    doublyLinkedList.append(2);
    doublyLinkedList.append(4);

    expect(doublyLinkedList.findIndex(2)).toBe(1);
  });
});
