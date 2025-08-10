class Solution {
  // Function to find two indices of numbers that add up to the target
  twoSum(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numMap.has(complement)) {
        return [numMap.get(complement), i];
      }
      numMap.set(nums[i], i);
    }
    return null; // if no pair matches
  }
}

/* 
Map
The Map object holds key-value pairs and remembers the original insertion order of the keys.
Any value (both objects and primitive values) may be used as either a key or a value.

Example usage --->:
const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1
*/

// Test the Solution
const solution = new Solution();
const nums = [3, 4, 5, 6];
const target = 7;
const result = solution.twoSum(nums, target);
console.log("result--->", result); // Output: [0, 1]

/* 
  Approach Explanation:
  1. We use a Map to store numbers we've seen and their indices
  2. For each number in the array:
     - Calculate what number we need to add to make target (complement)
     - If we've seen that number before, we found our pair!
     - If not, store current number and index in Map
  3. Keep doing this until we find a pair or finish the array
  
  Example: If array is [3,4,5,6] and target is 7
  - First number 3: Need 4 (7-3), haven't seen 4 yet, store 3
  - Second number 4: Need 3 (7-4), found 3 in Map! Return [0,1]
  */
