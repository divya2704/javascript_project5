function compareArrays(oldArr, newArr) {
  let added = [];
  let removed = [];
  let common = [];

  function exists(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) return true;
    }
    return false;
  }

  for (let i = 0; i < newArr.length; i++) {
    const item = newArr[i];
    if (exists(oldArr, item)) {
      common = [...common, item];
    } else {
      added = [...added, item];
    }
  }

  for (let i = 0; i < oldArr.length; i++) {
    const item = oldArr[i];
    if (!exists(newArr, item)) {
      removed = [...removed, item];
    }
  }

  return { added, removed, common };
}

const arr1 = ['Apple','Banana','Cherry'];
const arr2 = ['Mango', 'Banana', 'Apple'];

const result = compareArrays(arr1,arr2);
console.log("Added:", result.added);     
console.log("Removed:", result.removed); 
console.log("Common:", result.common);  
