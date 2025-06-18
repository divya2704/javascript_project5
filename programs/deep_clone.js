function isObject(value) {
  return value && typeof value === 'object';
}

function deepClone(value, seen = new WeakMap()) {
  // Handle primitives and functions
  if (value === null || typeof value !== 'object') {
    return value;
  }

  // Handle circular references
  if (seen.has(value)) {
    return undefined
  }

  // Handle Date
  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  // Handle Array
  if (Array.isArray(value)) {
    const clonedArr = [];
    seen.set(value, clonedArr);
    for (const item of value) {
      clonedArr.push(deepClone(item, seen));
    }
    return clonedArr;
  }

  // Handle Object
  const clonedObj = {};
  seen.set(value, clonedObj);
  for (const key in value) {
    if (Object.hasOwnProperty.call(value, key)) {
      clonedObj[key] = deepClone(value[key], seen);
    }
  }

  return clonedObj;
}
const original = {
  user: {
    name: "Divya",
    skills: ["HTML","CSS","Javascript"],
    created: new Date()
  }
};

// Introduce a circular reference
original.self = original;

const cloned = deepClone(original);

console.log(cloned);