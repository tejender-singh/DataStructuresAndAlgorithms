import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.start).toBe(null);
    expect(linkedList.end).toBe(null);
    expect(linkedList.toString()).toBe('');
  });

  it('should append node to linked list', () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.start.item).toBe(1);
    expect(linkedList.end.item).toBe(2);
    expect(linkedList.toString()).toBe('1,2');
  });

  it('should insert node to linked list at correct index', () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.insert(31, 1);

    expect(linkedList.start.item).toBe(1);
    expect(linkedList.end.item).toBe(2);
    expect(linkedList.toString()).toBe('1,31,2');
  });

  it('should insert node to linked list at 0 index', () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.insert(31, 0);

    expect(linkedList.start.item).toBe(31);
    expect(linkedList.end.item).toBe(2);
    expect(linkedList.toString()).toBe('31,1,2');
  });

  it('should insert node to linked list at last index', () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.insert(31, 2);

    expect(linkedList.start.item).toBe(1);
    expect(linkedList.end.item).toBe(31);
    expect(linkedList.toString()).toBe('1,2,31');
  });

  it('should delete first node from linked list where value matches', () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.deleteItem(3);

    expect(linkedList.start.item).toBe(1);
    expect(linkedList.end.item).toBe(4);
    expect(linkedList.toString()).toBe('1,2,4');
  });

  it('should revers order of linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.reverse();

    expect(linkedList.start.item).toBe(4);
    expect(linkedList.end.item).toBe(1);
    expect(linkedList.toString()).toBe('4,3,2,1');
  });

  it('should find first index from linked list where value matches', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(2);
    linkedList.append(4);

    expect(linkedList.findIndex(2)).toBe(1);
  });

  it('should get item at index from linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(2);
    linkedList.append(4);

    expect(linkedList.getItemAtIndex(1)).toBe(2);
  });

  it('should delete item at index from linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(2);
    linkedList.append(4);

    expect(linkedList.deleteItemAtIndex(1)).toBe(2);
    expect(linkedList.toString()).toBe('1,3,2,4');
  });

  it('should delete first item from linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(2);
    linkedList.append(4);

    expect(linkedList.deleteItemAtIndex(0)).toBe(1);
    expect(linkedList.toString()).toBe('2,3,2,4');
  });

  it('should delete last item from linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(2);
    linkedList.append(4);

    expect(linkedList.deleteItemAtIndex(4)).toBe(4);
    expect(linkedList.toString()).toBe('1,2,3,2');
  });
});
