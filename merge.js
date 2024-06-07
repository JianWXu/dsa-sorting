function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;
  while (1 < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;

  //   normal case
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

module.exports = { merge, mergeSort };
