import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.start.next).toBe(null);
    expect(linkedList.toString()).toBe('');
  });

  it('should append node to linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.start.next).toBe(null);

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.toString()).toBe('1,2');
  });

  it('should insert node to linked list at correct index', () => {
    const linkedList = new LinkedList();

    expect(linkedList.start.next).toBe(null);

    linkedList.append(1);
    linkedList.append(2);
    linkedList.insert(31, 1);

    expect(linkedList.toString()).toBe('1,31,2');
  });

  it('should delete first node from linked list where value matches', () => {
    const linkedList = new LinkedList();

    expect(linkedList.start.next).toBe(null);

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.deleteItem(3);

    expect(linkedList.toString()).toBe('1,2,4');
  });

  it('should revers order of linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.start.next).toBe(null);

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.reverse();

    expect(linkedList.toString()).toBe('4,3,2,1');
  });

  it('should find first index from linked list where value matches', () => {
    const linkedList = new LinkedList();

    expect(linkedList.start.next).toBe(null);

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(2);
    linkedList.append(4);

    expect(linkedList.findIndex(2)).toBe(1);
  });
});
