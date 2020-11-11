/*  Replace
replace a char in a string
this replaces the '.' with '[.]'
let newAddress = address.replace(/\./g, '[.]');
*/

/* forEach(doesn't change) & map(changes)
Good to remember how the arr.forEach() and the arr.map()
anomomous values work (value, index, array) => 
*/

/* indexOf() returns -1 if not found
     if(!(J.indexOf(S[i]) == -1)) x++;   
*/

/* Manipulating and array Basic
let arr = [1, 2]    
arr.push(2) // [1, 2, 2]
arr.shift() // [2, 2] returns 1
arr.pop()  // [2] returns 2 from the end
arr = [1, 2, 3];
arr.unshift(4); // [4, 1, 2, 3]
arr.unshift(5, 6) // [5, 6, 4, 1, 2, 3];
*/

/* fill arrays
[1, 2, 3].fill(4)                // [4, 4, 4]
[1, 2, 3].fill(4, 1)             // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2)          // [1, 4, 3]
Array(3).fill(4)                 // [4, 4, 4]

// A single object, referenced by each slot of the array:
let arr = Array(3).fill({}) // [{}, {}, {}]
arr[0].hi = "hi"            // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
*/

/* Sort array
arr.sort((a,b) => a - b)  // [1, 2, 3]
arr.sort((a,b) => b - a)  // [3, 2, 1]
*/

/* find a value in another array and then set that value at current
index of calling array

nums.map((value) => numsCopy.indexOf(value))
find the first occurance in another array, and return that index
*/

/* Shallow Copy of array
    nums = [1, 2, 3];
    let numsCopy = [...nums];
*/

/* filter values of an array
    [1, 2, 3].filter(x => x%2 === 0) // return if even
    // returns [2]
*/

/* .slice() // no parameters will return a copy
[1, 2, 3, 4, 5].slice(0, 3);
[1, 2, 3]
Starts at index 0, stops at index 3
*/

/* Deep copy for nexted arrays
nestedNumbers = [[1], [2]];
numbersCopy = JSON.parse(JSON.stringify(nestedNumbers));

numbersCopy[0].push(300);
console.log(nestedNumbers, numbersCopy);

// [[1], [2]]
// [[1, 300], [2]]
// These two arrays are completely separate!
*/

/* .concat() combindes arrays
[1, 2, 3].concat(4); // [1, 2, 3, 4]
[1, 2, 3].concat([4, 5]); // [1, 2, 3, 4, 5]
*/

/* .map coverts by passing in a number:
numbers = [1, 2, 3];
double = (x) => x * 2;

numbers.map(double);
*/

/* Number() and + ''
    will convert a string to a number
    Number('1'); // returns 1
    1 + ''; // returns '1'
*/

/* turn the digits of a number in an array
let n = 234;
let digits = [...n + ''].map(a => Number(a));
// digits : [2,3,4]
*/


/* Slice non-destructive
[1, 2, 3, 4].slice(0, 1) // returns 1
*/

/* Splice destructive
[1, 2, 3, 4].splice(1, 1)// return [2] left [1,3,4]
*/

/* Create a Map and check
let myMap = new Map();
myMap.set(a, "yes");
myMap.has(a); // returns true
myMap.get(a); // returns "yes"
*/