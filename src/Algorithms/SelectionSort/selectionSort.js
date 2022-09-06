export default function doSelectionSort(array) {
  if (array.length <= 1) {
    return array;
  }
  return performSort(array, array.length);
}

function performSort(array, lastIndex) {
  if (lastIndex === 1) {
    return array;
  }
  let max = -Infinity;
  let index = 0;
  for (let i = 0; i < lastIndex; i++) {
    if (array[i] > max) {
      max = array[i];
      index = i;
    }
  }
  if (index !== lastIndex - 1) {
    array[index] = array[lastIndex - 1];
    array[lastIndex - 1] = max;
  }
  return performSort(array, lastIndex - 1);
}
