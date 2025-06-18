// Lodash-like _.get
function get(obj, path, defaultValue = undefined) {
  if (!obj || typeof path !== 'string') return defaultValue;

  const keys = path.replace(/\[(\d+)]/g, '.$1').split('.');

  return keys.reduce((acc, key) => {
    if (acc && key in acc) {
      return acc[key];
    }
    return defaultValue;
  }, obj);
}

// Lodash-like _.set
function set(obj, path, value) {
  if (typeof path !== 'string') return obj;

  const keys = path.replace(/\[(\d+)]/g, '.$1').split('.');
  let current = obj;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (i === keys.length - 1) {
      current[key] = value;
    } else {
      if (!(key in current) || typeof current[key] !== 'object') {
        current[key] = /^\d+$/.test(keys[i + 1]) ? [] : {};
      }
      current = current[key];
    }
  }

  return obj;
}
// Example Usage
const user = {
  id: 1,
  profile: {
    name: 'Divya',
    location: {
      city: 'Bangalore'
    }
  },
  tags: ['Javascript']
};
// _.get examples
console.log('GET Examples:');
console.log('City:', get(user, 'profile.location.city'));           // "Chennai"
console.log('Age (default):', get(user, 'profile.age',25));        // 30
console.log('First Tag:', get(user, 'tags[0]'));                    // "dev"
console.log('Second Tag (default):', get(user, 'tags[1]'));        // "none"
// _.set examples
set(user, 'profile.age', 22);
set(user, 'tags[1]', 'lead');

// Final Object Output
console.log('\nFinal Object After Set:');
console.log(user)
