export default function doMergeSort(array, start = 0, end) {
  if (end === undefined) {
    end = array.length - 1;
  }
  if (end < 0) {
    return array;
  }
  if (start === end) {
    return [array[start]];
  }
  let firstSortedArray = doMergeSort(
    array,
    start,
    Math.floor((start + end) / 2)
  );
  let secondSortedArray = doMergeSort(
    array,
    Math.ceil((start + end + 1) / 2),
    end
  );
  return mergeArray(firstSortedArray, secondSortedArray);
}

function mergeArray(firstSortedArray, secondSortedArray) {
  let mergedArray = [];
  for (
    let i = 0, j = 0;
    i < firstSortedArray.length || j < secondSortedArray.length;

  ) {
    if (i >= firstSortedArray.length) {
      mergedArray.push(secondSortedArray[j]);
      j++;
      continue;
    }
    if (j >= secondSortedArray.length) {
      mergedArray.push(firstSortedArray[i]);
      i++;
      continue;
    }
    if (firstSortedArray[i] < secondSortedArray[j]) {
      mergedArray.push(firstSortedArray[i]);
      i++;
    } else {
      mergedArray.push(secondSortedArray[j]);
      j++;
    }
  }
  return mergedArray;
}
