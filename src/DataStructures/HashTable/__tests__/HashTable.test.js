import HashTable from '../HashTable';

describe('HashTable', () => {
  it('should create empty table', () => {
    const table = new HashTable();
    expect(table.getKeys()).toEqual([]);
    expect(table.getValues()).toEqual([]);
  });

  it('should be able to put keys and values in table', () => {
    const table = new HashTable();
    table.put(3, 'Rooney');
    table.put(5, 'Ronaldo');
    table.put(8, 'Van persie');
    table.put(2, 'Benzema');
    table.put(9, 'Messi');
    table.put(11, 'Ronaldinho');
    table.put(544, 'Beckham');
    table.put(773, 'Scholes');
    expect(table.getKeys()).toEqual([3, 5, 8, 2, 9, 11, 544, 773]);
    expect(table.getValues()).toEqual([
      'Beckham',
      'Benzema',
      'Rooney',
      'Ronaldo',
      'Scholes',
      'Van persie',
      'Messi',
      'Ronaldinho',
    ]);
    expect(table.lists[5].length()).toEqual(2);
    table.put(37, 'Iniesta');
    expect(table.getKeys()).toEqual([3, 5, 8, 2, 9, 11, 544, 773, 37]);
    expect(table.getValues()).toEqual([
      'Beckham',
      'Benzema',
      'Rooney',
      'Ronaldo',
      'Scholes',
      'Iniesta',
      'Van persie',
      'Messi',
      'Ronaldinho',
    ]);
    expect(table.lists[5].length()).toEqual(3);
  });

  it('should be able to override keys and values in table', () => {
    const table = new HashTable();
    table.put(3, 'Rooney');
    table.put(5, 'Ronaldo');
    table.put(8, 'Van persie');
    table.put(2, 'Benzema');
    table.put(9, 'Messi');
    table.put(11, 'Ronaldinho');
    table.put(544, 'Beckham');
    table.put(773, 'Scholes');
    expect(table.getKeys()).toEqual([3, 5, 8, 2, 9, 11, 544, 773]);
    expect(table.getValues()).toEqual([
      'Beckham',
      'Benzema',
      'Rooney',
      'Ronaldo',
      'Scholes',
      'Van persie',
      'Messi',
      'Ronaldinho',
    ]);
    expect(table.lists[5].length()).toEqual(2);
    table.put(2, 'Iniesta');
    table.put(773, 'Xavi');
    expect(table.getKeys()).toEqual([3, 5, 8, 2, 9, 11, 544, 773]);
    expect(table.getValues()).toEqual([
      'Beckham',
      'Iniesta',
      'Rooney',
      'Ronaldo',
      'Xavi',
      'Van persie',
      'Messi',
      'Ronaldinho',
    ]);
    expect(table.lists[5].length()).toEqual(2);
  });

  it('should be able to get values by keys in table', () => {
    const table = new HashTable();
    table.put(3, 'Rooney');
    table.put(5, 'Ronaldo');
    table.put(8, 'Van persie');
    table.put(2, 'Benzema');
    table.put(9, 'Messi');
    table.put(11, 'Ronaldinho');
    table.put(544, 'Beckham');
    table.put(773, 'Scholes');
    expect(table.get(544)).toBe('Beckham');
    expect(table.get(773)).toBe('Scholes');
  });

  it('should be able to delete keys and values in table', () => {
    const table = new HashTable();
    table.put(3, 'Rooney');
    table.put(5, 'Ronaldo');
    table.put(8, 'Van persie');
    table.put(2, 'Benzema');
    table.put(9, 'Messi');
    table.put(11, 'Ronaldinho');
    table.put(544, 'Beckham');
    table.put(773, 'Scholes');
    expect(table.getKeys()).toEqual([3, 5, 8, 2, 9, 11, 544, 773]);
    expect(table.getValues()).toEqual([
      'Beckham',
      'Benzema',
      'Rooney',
      'Ronaldo',
      'Scholes',
      'Van persie',
      'Messi',
      'Ronaldinho',
    ]);
    expect(table.lists[5].length()).toEqual(2);
    expect(table.delete(2)).toBe(true);
    expect(table.delete(773)).toBe(true);
    expect(table.delete(51)).toBe(false);
    expect(table.getKeys()).toEqual([3, 5, 8, 9, 11, 544]);
    expect(table.getValues()).toEqual([
      'Beckham',
      'Rooney',
      'Ronaldo',
      'Van persie',
      'Messi',
      'Ronaldinho',
    ]);
    expect(table.lists[5].length()).toEqual(1);
  });

  it('should be able to check if key exists in table', () => {
    const table = new HashTable();
    table.put(3, 'Rooney');
    table.put(5, 'Ronaldo');
    table.put(8, 'Van persie');
    table.put(2, 'Benzema');
    table.put(9, 'Messi');
    table.put(11, 'Ronaldinho');
    table.put(544, 'Beckham');
    table.put(773, 'Scholes');
    expect(table.hasKey(2)).toBe(true);
    expect(table.hasKey(773)).toBe(true);
    expect(table.hasKey(51)).toBe(false);
  });
});
