function mergeSorted(arr1, arr2) {
  let i = 0, j = 0;
  const merged = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged[merged.length] = arr1[i];
      i++;
    } else {
      merged[merged.length] = arr2[j];
      j++;
    }
  }

  while (i < arr1.length) {
    merged[merged.length] = arr1[i];
    i++;
  }

  while (j < arr2.length) {
    merged[merged.length] = arr2[j];
    j++;
  }

  return merged;
}
const a = [1,5, 7];
const b = [2, 4,8];

const result = mergeSorted(a, b);
console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8]
