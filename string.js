function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  for (let char of s) {
    console.log(`Processing character: ${char}`);
    count[char] = (count[char] || 0) + 1;
    console.log(`Updated count: char = ${char}`);
    console.log(`Current count: ${JSON.stringify(count)}`);
  }

  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

// Example usage in console:
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false

// You can test with your own strings in console:
// isAnagram("yourWord1", "yourWord2")
