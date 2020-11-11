/* Notes:
* Think outload

* Ask clarifying questions to get detial
    about the problem

* Take tips seriously and add more questions
about them.



* Construct/ traverse data structures

* Implement system routines

* Distill large data sets to sinle values

* Transform one data set to another


*/


/* Perpare: 

* Study Quicksort & Mergesort
    * When are they efficent
    * When to use Radix, insertion
 * Traveling Salesman
 * Knapsack
 * What does NP-complete mean?
 * Trees
 * Adjasency list
 * Priority Queues
 * Build a hashTable from scatch
 
 * Trees
  * Binary
  * n-ary trees
  * Trie-trees
  * Black Red Trees
  * BFS
  * DFS
  * InOrder
  * PostOrder
  * PreOrder

* Heaps
    *Understand application/ When to use
    *Big O


* Graphs
    * Types
        * Objects and pointers
        * matrix
        * Adjacenty List
    * Traversal algorithms
        * BFS
        * DFS
    * Complexity
* Recursion
* Deadlock vs Lifelock

* Fundementals of "modern Concurrency constructs"
* n choose K

* mod % a negative number

* Read : https://sites.google.com/site/steveyegge2/five-essential-phone-screen-questions
* watch: https://www.youtube.com/watch?v=oWbUtlUhwa8&feature=youtu.be

*/

/* Problems to do:
* Split a string without spaces
* Stairs : Dynamic 
*/


function double(a){
    return a * 2;
}

let vDouble = a => a * 2;

let x = [1, 2, 3, 4];

let k = x.map(vDouble);

console.log(k);

let lastname = "bobby";

console.log(lastname);




let s = "aaaaaaa";
let wordDict = ["aaaa", "aa"];

let map = new Map();

let result = wordBreak(s, wordDict);

console.log("Result = " +  result);



function wordBreak(s, wordDict){
    if(wordDict.includes(s)){
        console.log("dict has this " + s);
        return true;
    }
     
     if(map.has(s)){
         return map.get(s);
     }
      
     
     for(let i = 1; i <= s.length; i++){
         let left = s.substring(0, i);
         
         if(wordDict.includes(left) && wordBreak(s.substring(i), wordDict)){
             
             console.log("made in in the if " + s);
             map.set(s, true); 
             return true;
         }
     }
     
     
     console.log(map);
     map.set(s, false);
     return false;
}


let nums = [1,2,3,4,5];
let n = 3;
let arr = [];
while(arr.length < n){
    var r = Math.floor(Math.random() * nums.length);
    if(arr.indexOf(r) === -1) arr.push(r);
}

arr.sort((a, b) => a - b);

let results = arr.map(function(value){
    return nums[value];
});



console.log("sub array " + results);


//-------------------------------------

let L = [
    { 
        name :'abc',
        rate : 10    
    },
    {
        name :'def',
        rate : 15
    },
    {
        name :'ghi',
        rate : 10
    },
    {
        name :'abc',
        rate : 12
    },
    {
        name :'xyz',
        rate : 100
    },
    {
        name :'ghi',
        rate : 12
    }
]


L.sort((a, b) => a.rate - b.rate);
let values = [];
let names = [];

L.forEach(function(a){
    values.push(a.rate);
    names.push(a.name);
});


console.log("Ordered List rates: " + values);
console.log("Ordered List names: " + names);


let myArr = [1, 2, 3, 4, 5];

let mySet = new Set(myArr);

console.log("Set pass Array : " + mySet.entries());
