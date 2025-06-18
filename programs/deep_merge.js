// Deep Merge Utility Function
function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

function deepMerge(target, ...sources) {
  if (!sources.length) return target;

  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    const result = { ...target };

    for (const key in source) {
      if (isObject(source[key])) {
        if (!(key in target)) {
          result[key] = deepMerge({}, source[key]);
        } else {
          result[key] = deepMerge(target[key], source[key]);
        }
      } else if (Array.isArray(source[key])) {
        result[key] = Array.isArray(target[key])
          ? [...target[key], ...source[key]]
          : [...source[key]];
      } else {
        result[key] = source[key];
      }
    }

    return deepMerge(result, ...sources);
  }

  return target;
}

// Example Objects
const a = { 
  name: "Divya", 
  info: { 
    age: 22, 
    city: 'Nellore',
    skills: ["JS"] 
  } 
};

const b = { 
  info: { 
    city: "Bangalore",
    skills: ['HTML','CSS'] 
  }
}

// Perform Deep Merge
const merged = deepMerge(a, b);

// Output the Result
console.log('a:',a)
console.log('b:',b)
console.log("Merged Result:");
console.log(merged)


