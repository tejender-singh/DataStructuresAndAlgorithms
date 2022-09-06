import doMergeSort from '../mergeSort';

describe('Merge Sort', () => {
  it('should sort an array', () => {
    let arr = [8, 3, 6, 9, 1];
    arr = doMergeSort(arr);
    expect(arr).toEqual([1, 3, 6, 8, 9]);
  });

  it('should return an empty array', () => {
    let arr = [];
    arr = doMergeSort(arr);
    expect(arr).toEqual([]);
  });

  it('should return an array with only one value', () => {
    let arr = [8];
    arr = doMergeSort(arr);
    expect(arr).toEqual([8]);
  });
});
