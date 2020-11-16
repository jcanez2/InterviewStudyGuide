/* 1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
----------------------------------------------------------------
var twoSum = function(nums, target) {
    var map = new Map();
    for (let i = 0; i < nums.length;i++) {
        if(map.has(nums[i])) {
            return [map.get(nums[i]),i];
        }
        map.set(target - nums[i],i);
    }
};
*/

/* 2. Add Two Numbers 
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
-----------------------------------------------------------------
var addTwoNumbers = function (l1, l2) {
    if (!l1 && !l2) return null;
    if (!l1) return l2;
    if (!l2) return l1;

    let result = new ListNode();
    const tmp = result;
    let carry = 0;

    while (l1 || l2 || carry) {

        let sum = ((l1) ? l1.val : 0) + ((l2) ? l2.val : 0) + carry;
        carry = parseInt(sum / 10);
        sum = sum % 10;

        result.val = sum;

        l1 = (l1) ? l1.next : null;
        l2 = (l2) ? l2.next : null;

        result.next = ((l1 || l2) || carry) ? new ListNode() : null;
        result = result.next;
    }

    return tmp;
}
*/

/* 3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.
--
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
--
let i = 0;
let j = 0;

let ans = 0;

let x = new Set();

while (i < s.length && j < s.length) {
	while ( x.has(s[j])) {
		x.delete(s[i]);
		i++;
	}
		x.add(s[j]);
		j++;
		ans = Math.max(ans,j-i);
}
return ans;
||
var lengthOfLongestSubstring = function(s) {
    let left =0;
    let right =0;
    let set = new Set();
    let maxLen = 0;
    while(right<s.length){
        let char = s.charAt(right);
        if(!set.has(char)){
            set.add(char);
            maxLen = Math.max(maxLen, set.size)
            right++
        } else{
            set.delete(s.charAt(left));
            left++;
        }
    }
    return maxLen;
};
*/

/* 4. 
Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays.
Follow up: The overall run time complexity should be O(log (m+n)).
----
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
----
var findMedianSortedArrays = function(nums1, nums2) {
    var index = 0;
    var concatArray = nums1.concat(nums2);
    concatArray = concatArray.sort(sortNumber);
    if(concatArray.length % 2 == 0){
        index = concatArray.length / 2;
        return (concatArray[index] + concatArray[index-1])/2
    } else {
        index = Math.floor(concatArray.length / 2);
        return concatArray[index];
    }
};

function sortNumber(a,b){
   return a - b;
}
||
const findMedianSortedArrays = (a, b) => {
    let c = a.concat(b).sort((a, b) => a - b);

    const half = c.length / 2 | 0;

    if (c.length % 2)
        return c[half];

    return (c[half] + c[half - 1]) / 2;
}
*/

/* 5. Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.
----
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
----
var longestPalindrome = function(s) {

    for(let C = s.length-1; C >= 0; C--){
        let L = 0; 
        let R = C;
        while(R < s.length){
            let subString = s.substring(L, R + 1);
            if(isAPalindrom(subString)){
                return subString;
            }
            L++;
            R++;
        }
    }
    return "";
};


function isAPalindrom(str){
    let L = 0;
    let R = str.length - 1;
    while(L < R){
        if(str[L] != str[R]){
            return 0;
        }
        R--;
        L++;
    }
    
    return 1;
}
||
var longestPalindrome = function(s) {
    let longest = '';
    const findLongestPalindrome = (str, i, j) => {
        while(i >= 0 && j < str.length && str[i] === str[j]) {
            i -= 1;
            j += 1;
        }
        // slice the qualified substring from the second last iteration
        return str.slice(i + 1, j);
    }
    for (let i = 0; i < s.length; i++) {
        // palindrome can center around 1 or 2 letters
        const current1 = findLongestPalindrome(s, i, i);
        const current2 = findLongestPalindrome(s, i, i + 1);
        const longerPalindrome = 
              current1.length > current2.length ? current1 : current2;
        if (longerPalindrome.length > longest.length) {
            longest = longerPalindrome;
        } 
    }
    return longest;
};
*/

/* 6. ZigZag Conversion
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
(you may want to display this pattern in a fixed font for better legibility)
P   A   H   N
A P L S I I G
Y   I   R
----
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
----
var convert = function (s, numRows) {
    const len = s.length
  if (!len) return ''
  if (len === 1 || numRows === 1) return s
  
  //  array approach
  //  break s in to array
  //  reverse array at between sections
  //  PAYPALISHIRING =>  [[P, A, Y, P],[0, L, A, 0], [I, S, H, I], [0, I, R, 0], [N, G]]
  
 const arr = []
 const between = numRows - 2
 const coverage = numRows + between
 let start = 0
 let end = numRows

 while (start < len) {
   const main = s.slice(start, end)
   arr.push(main.split(''))

   const section = s.slice(end, end + between).padEnd(between, '0')
   arr.push(['0', ...section.split(''), '0'].reverse())

   start += coverage
   end += coverage
 }

 let res = ''
 for (let i = 0; i < numRows; i++) {
   for (const col of arr) {
     if (col[i] && col[i] !== '0') res += col[i]
   }
 }
 return res
}
*/


/* 20. Valid Parentheses
Given a string s containing just the 
characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
----
Input: s = "()[]{}"
Output: true
Input: s = "([)]"
Output: false
----
var isValid = function(s) {
    
    let i = 0;
  let arr = s.split('');

  const set = new Set();
  set.add('()');
  set.add('{}');
  set.add('[]');

  while (i < arr.length) { // while is < 4 : 0 : 1 : -1
      
    let pair = `${arr[i]}${arr[i + 1]}`;  // pair = {[ : pair = []
      
     if(set.has(pair)){ // if the splice of the two positons is a pair of matiching brackets then // False : True
         arr.splice(i, 2) // remove those brackets from the array splice([])  new array = {}
         i = Math.max(i - 2, 0); // set I back two positions  i = -1
     }else{
         i++; // if not a matching pair move to the next character
     }
      
  }

  return arr.length > 0 ? false : true; // is array empty
};
*/

/* Merge k Sortted Lists
You are given an array of k linked-lists lists, 
each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.
----
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
----
var mergeKLists = function(lists) {
// Create and empty array to save the values from the linked lists
let listOfValues = [];
// iterate trough the array of linked lists
lists.forEach((linkedList) => {
// for each linked list continue iterating until the current linked list node == null
while(linkedList){
// push the current value of the node to the listOfValues array
listOfValues.push(linkedList.val);
// move to the next node if this node becomes null we are at the end of the list
linkedList = linkedList.next;
}
});
// sort the list in asending order
listOfValues.sort((a, b) => {return a - b});
// create a holder for the head node
let headHolder = new ListNode();
// create a node to iterate through the linked list.
let listIteratorNode = headHolder;
// take each value of the array an perfrom the following
listOfValues.map((x) => {
// create a new node with the value of the node being the value from the array
// and place it as the .next of the current node
listIteratorNode.next = new ListNode(x, null);
// move the iterator to the newly created node
listIteratorNode = listIteratorNode.next;
})
// We are returning the head node which is the .next of the head holder
return headHolder.next;
};
||
var mergeKLists = function(lists) {
    if(!lists || !lists.length) return null;
    
    const values = []
    
    lists.forEach(list => {
        while(list) {
            values.push(list.val)
            list = list.next;
        }
    })
    
    if(!values.length || !values) return null;
    
    const newList = new ListNode()
    let current = newList;
    
    values.sort((a, b) => a - b).forEach((val, idx) => {
        current.val = val;
        
        if(idx < values.length - 1) {
			current.next = new ListNode();
			current = current.next;
		}
    })
    
    return newList;
};
*/

/* 53. 
Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.
Follow up: If you have figured out the O(n) solution, 
try coding another solution using the divide and conquer approach, which is more subtle.
----
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
----
let currentSum = nums[0];
    let maxSum = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(nums[i]  < (currentSum + nums[i])){
            currentSum += nums[i];
        }
        else{
            currentSum = nums[i];
        }
        
        if(currentSum > maxSum){
            maxSum = currentSum;
        }
    }
    
    return maxSum;
*/

/* 63. Unique Paths II
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
The robot can only move either down or right at any point in time. 
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

Note: m and n will be at most 100.
----
Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
----
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const dp = Array(m)
    .fill(null)
    .map(() => Array(n));

  // Check if first item is i an obstacle
  if (obstacleGrid[0][0]) dp[0][0] = 0;
  else dp[0][0] = 1;

  // First row path
  for (let i = 1; i < dp.length; i++) {
    if (obstacleGrid[i][0]) dp[i][0] = 0;
    else dp[i][0] = dp[i - 1][0];
  }

  // First column path
  for (let j = 1; j < dp[0].length; j++) {
    if (obstacleGrid[0][j]) dp[0][j] = 0;
    else dp[0][j] = dp[0][j - 1];
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (obstacleGrid[i][j]) dp[i][j] = 0;
      else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};
*/

/* 88. Merge Sorted Array
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space 
(size that is equal to m + n) to hold additional elements from nums2.
----
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
----
const merge= (nums1,m,nums2,n)=> {
	nums1.splice(m, n, ...nums2);
    nums1.sort((a,b)=> a-b);
};
||
var merge = (nums 1, m, num2, n ) = {
  const totalElements = m + n;

  let nums1Pointer = 0;
  let nums2Pointer = 0;
  
  // we're using num1 as our reference, since it's size = m+n. We know we won't exceed that size.
  while (nums1Pointer < totalElements) {
  
	  // ensure the loop keeps moving(and we don't have an infinite loop), incremement nums1 pointer
	  nums1Pointer++;
  }
   return nums1;
}
*/

/* 105. Construct Binary Tree From Preorder and InOrder Traversal
Given preorder and inorder traversal of a tree, construct the binary tree.
Note:
You may assume that duplicates do not exist in the tree.
----
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
    3
   / \
  9  20
    /  \
   15   7
----
var buildTree = function(preorder, inorder) {
    const n = inorder.length;
    const map = new Map();
    inorder.forEach((num, index) => map.set(num, index));
    
    let index_pre = 0;
    
    return treeBuilder(0, n - 1);
    
    function treeBuilder(left, right) {
        if (left > right) return null;
        
        const curr_val = preorder[index_pre++];
        const curr_node = new TreeNode(curr_val);
        
        const curr_index = map.get(curr_val);
        
        curr_node.left = treeBuilder(left, curr_index - 1);
        curr_node.right = treeBuilder(curr_index + 1, right);
        
        return curr_node;
    }
};
||
var buildTree = function (preorder, inorder) {
  let preIdx = 0;
  function helper(start, end) {
    if (start >= end) {
      return null;
    }
    let rootIdx = inorder.indexOf(preorder[preIdx]);
    const n = new TreeNode(preorder[preIdx]);
    preIdx++
    n.left = helper(start, rootIdx);
    n.right = helper(rootIdx + 1, end);
    return n;
  }
  return helper(0, preorder.length);
};
*/

/* 127. Word Ladder
Given two words (beginWord and endWord), and a dictionary's word list, 
find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list.
Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
----
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5
Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
 Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0
Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
----
var alphabet = 'abcdefghijklmnopqrstuvwxyz';

// @param {string} beginWord
// @param {string} endWord
// @param {string[]} wordList
// @return {number}
//
var ladderLength = function(beginWord, endWord, wordList) {
    if (wordList.length === 0) return 0;
    if (wordList.indexOf(endWord) === -1) return 0;
    var dict = new Set(wordList);
    var beginArr = [beginWord];
    var endArr = [endWord];
    var result = 2;
    while (beginArr.length) {
        if (beginArr.length > endArr.length) {
            var tmp = beginArr;
            beginArr = endArr;
            endArr = tmp;
        }
        var newArr = [];

        for (var beginWord of beginArr) {
            var wordArr = beginWord.split('');
            for (var i = 0; i < wordArr.length; i++) {
                var oldChar = wordArr[i];
                for (var char of alphabet) {
                    if (char === wordArr[i]) continue;
                    wordArr[i] = char;
                    var word = wordArr.join('');
                    if (endArr.indexOf(word) > -1) return result;
                    if (dict.has(word)) {
                        newArr.push(word);
                        dict.delete(word);
                    }
                }
                wordArr[i] = oldChar;
            }
        }

        beginArr = newArr;
        result++;
    }
    return 0;
};
||
var ladderLength = function(beginWord, endWord, wordList) {
    const graph = {};
    const fullWordList = [beginWord, ...wordList];
    
    // construct adjacency list
    for(let word of fullWordList) {
        const arr = [];
        for(let otherWord of fullWordList) {
            if(word === otherWord) continue;
            let i = 0
            let diff = 0;
            // compare the char difference between the two words
            while(i < word.length || i < otherWord.length) {
                if(word[i] !== otherWord[i]) diff++;
                i++;
            }
            // if the difference is only 1 char add to the adjacency list 
            if(diff === 1) arr.push(otherWord);
        }
        graph[word] = arr;
    }
    
    //BFS
    const queue = [[beginWord, 1]];
    const visited = new Set();
    
    while(queue.length) {
		// gen is the generation depth 
        const [node, gen] = queue.shift();
        if(node === endWord) return gen;
        if(visited.has(node) || !graph[node]) continue;
        visited.add(node);
        
        for(let vertex of graph[node]) {
            queue.push([vertex, gen+1]);
        }
    }    
    return 0;
};
*/

/* 151. Reverse Words in a String
Input: s = "the sky is blue"
Output: "blue is sky the"
Input: s = "  hello world  "
Output: "world hello"
Input: s = "a good   example"
Output: "example good a"
----
var reverseWords = function(s) {
    
    
    s = s.trim();
    
    let stringArr = s.split(' ');
    
    stringArr = stringArr.filter( function(value , index, arr){
      return value != '';  
    });
    
   
    
    let reversedArr = stringArr.reverse();
    let reversedString = reversedArr.join(' ');
    return reversedString;
    
};
||
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};
*/

/* 199. Binary Tree Right Side View
Given a binary tree, imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom.
----
Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
----
var rightSideView = function(root) {
    
  const result = []

  var traverse = function(node,level){
      if (!node) return
      result[level] = node.val
      traverse(node.left,level+1)
      traverse(node.right,level+1)
  }
  
  traverse(root,0)
  return result
};
||
var rightSideView = function(root) {
    if (!root) {
        return [];
    }
    var nodes = [root.val], size = 1;
    var queue = [root];
    
    while (queue.length) {
        size = queue.length;
        while (size --) {
            var node = queue.splice(0, 1)[0];
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        if (queue.length) {
            nodes.push(queue[queue.length - 1].val);
        }
    }
    
    return nodes;
};
*/

/* 

*/

/* 200. Number of Islands
var numIslands = function(grid) {
    let numberIslands = 0;
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] == '1'){
                numberIslands++;
                sinkTheIsland(grid, i, j);
            }
        }
    }
    
    return numberIslands;
};

function sinkTheIsland(grid, i , j){
    if( i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] == '0'){
        return;
    }
    
    grid[i][j] = '0';
    
    sinkTheIsland(grid, i + 1, j);
    sinkTheIsland(grid, i - 1, j);
    sinkTheIsland(grid, i, j + 1);
    sinkTheIsland(grid, i, j - 1);
}
*/

/* 253. Meeting Rooms II
Given an array of meeting time intervals consisting of start and end times 
[[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.
----
Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
----
var minMeetingRooms = function(intervals) {
    let ans = 0;
    const n = intervals.length;
    
    // queue of meetings in progress
    let m = [];
    
    // sort by start time
    intervals = intervals.sort(([a],[b]) => a - b);
    
    for(let i = 0; i < n; i++) {
        const next = intervals[i];
        // look for meetings which have ended and shift from queue
        while(m.length && m[0] <= next[0]) m.shift();
        m.push(next[1]);
        // sort queue by end time
        m = m.sort((a,b) => a - b);
        // if current meeting in progress is higher than max, update max
        ans = Math.max(ans, m.length);
    }
    
    return ans;
};
||
function minMeetingRooms(intervals) {
  const starts = intervals
    .concat()  // make sure shallow copy, otherwise when sort 'ends', 'starts' will change too
    .map(a => a[0])
    .sort((a, b) => a - b);

  const ends = intervals
    .map(a => a[1])
    .sort((a, b) => a - b);

  let room = 0;
  let endIdx = 0;
  for (let i = 0; i < intervals.length; i++) {
    if (starts[i] < ends[endIdx]) {
      room++;
    } else {
      endIdx++;
    }
  }
  return room;
}
*/

/* 257. Binary Tree Paths
Given a binary tree, return all root-to-leaf paths
----
   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
----
var binaryTreePaths = function(root) {
    
    let paths = [];
    
    pushPaths(root , "");
    
    return paths;
    
    function pushPaths(node, str){
        if(node == null){
            return;
        }
        
        
        str += node.val;
        
        
        if(node.left == null && node.right == null){
            paths.push(str);
        }
        
        str += "->"
        
        pushPaths(node.left, str);
        pushPaths(node.right, str);
    }
};
||
var binaryTreePaths = function(root) {
    const res = [];
    
    preOrder(root, "");
    
    return res;
    
    function preOrder(node, str) {
        if (node == null) return;
        
        str = str + node.val;
        
        // leaf
        if (node.left == null && node.right == null) {
            res.push(str);
            return;
        }
        
        str += "->";
        
        if (node.left) preOrder(node.left, str);
        if (node.right) preOrder(node.right, str);
    }
};
*/

/* 270. Closest Binary Search Tree Value
Given a non-empty binary search tree and a target value, find the value in the BST
 that is closest to the target.

Note:
Given target value is a floating point.
You are guaranteed to have only one unique value in the BST that is closest to the target.
----
Input: root = [4,2,5,1,3], target = 3.714286

    4
   / \
  2   5
 / \
1   3

Output: 4
----
var closestValue = function(root, target) {
    let t = root;
    let que = [];
    traverse(root);
    let differences = que.map(function(d){
        return Math.abs(d - target);
    });
    
    let smallestDiff = Math.min(...differences);
    
    return que[differences.indexOf(smallestDiff)];
    
    
    
    
    
    function traverse(node){
        if(node == null){
           return;
        }
        
        que.push(node.val);
        
        traverse(node.left);
        traverse(node.right);
    }
    
    console.log(differences);
};
||
var closestValue = function(root, target) {    
    var closestValue = root.val;
    while (root != null) {
        closestValue = Math.abs(root.val - target) < Math.abs(closestValue - target) ? root.val : closestValue;
        root = target <  root.val ? root.left : root.right;
    }
    return closestValue;
};
*/

/* 344. Reverse String
Write a function that reverses a string. The input string is given as an array of characters char[].
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
You may assume all the characters consist of printable ascii characters.
----
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
----
var reverseString = function(s) {
    let j = s.length -1;
    let i = 0;
    
    while(i < j){
        let holder = s[i];
        s[i] = s[j];
        s[j] = holder;
        i++;
        j--;
    }

    // s.reverse();
};
*/

/* 388. Longest Absolute File Path
Suppose we have the file system represented in the following picture:
We will represent the file system as a string where "\n\t" mean a 
subdirectory of the main directory, "\n\t\t" means a subdirectory 
of the subdirectory of the main directory and so on. 
Each folder will be represented as a string of letters and/or digits. 
Each file will be in the form "s1.s2" where s1 and s2 are strings of 
letters and/or digits.

For example, the file system above is represented as 
"dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext".

Given a string input representing the file system in the explained format, 
return the length of the longest absolute path to a file in the 
abstracted file system. If there is no file in the system, return 0.
----
Input: input = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"
Output: 20
Explanation: We have only one file and its path is "dir/subdir2/file.ext" of length 20.
The path "dir/subdir1" doesn't contain any files.
Input: input = "a"
Output: 0
Explanation: We don't have any files.
----
var lengthLongestPath = function(input) {
    let stack = [],  maxFound = 0, currentLength = 0;
    
    for(let row of input.split('\n'))
        {
            const level = row.lastIndexOf('\t')+1;
            while(level<stack.length)  
                    currentLength-=stack.pop(); 
            
            let lengthOfSegment = row.length-level;
            
            if(row.indexOf('.')==-1) //is directory
                stack.push(lengthOfSegment), currentLength+=lengthOfSegment;
            else
                maxFound = Math.max(maxFound,currentLength+lengthOfSegment +level);
            
        }
    
    return maxFound;
};
*/

/* 416. Partition Equal Subset Sum
Given a non-empty array nums containing only positive integers, 
find if the array can be partitioned into two subsets such that 
the sum of elements in both subsets is equal.
----
Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
----
var canPartition = function(nums) {
    
    let sum = nums.reduce((a, b) => a + b);
    
    let canNotPartitionEqually = sum % 2;
    
    if(canNotPartitionEqually){
        return false;
    }
    console.log(sum);
    
    let half = sum / 2;
    
    let totals = new Array(half + 1);
    
    
    totals.fill(false);
    
    totals[0] = true;
    
    for(let num of nums){
        for(let i = half; i >= num; i--){
            totals[i] = totals[i] || totals[i - num];
                if(totals[half])
                    return true;
        }   
    }
    
    return totals[half];
};
||
var canPartition = function(nums) {
    const n = nums.length;
    
    let sum = 0;
    
    for (const num of nums) {
        sum += num;
    }
    
    const target = sum / 2;
    
    if (!Number.isInteger(target)) return false;
    
    return subset(n - 1, 0, 0, target);
    
    function subset(index, sum1, sum2, target) {
        // base cases
        if (index < 0) {
            if (sum1 == target && sum2 == target) return true;
            else return false;
        }
        
        if (sum1 > target || sum2 > target) return false;
        
        return subset(index - 1, sum1 + nums[index], sum2, target) || subset(index - 1, sum1, sum2 + nums[index], target);
    }
    
};
*/

/* 441. Arranging Coins
You have a total of n coins that you want to form in a staircase shape, 
where every k-th row must have exactly k coins.
Given n, find the total number of full staircase rows that can be formed.
n is a non-negative integer and fits within the range of a 32-bit signed integer.
----
var arrangeCoins = function(n) {
    let blocksNeeded = 1;
    let steps = 0;
    while(n >= blocksNeeded){
        n = n - blocksNeeded;
        steps++;
        blocksNeeded++;
    }
    return steps;
};
*/

/* 443. String Compression
Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, 
but instead be stored in the input character array chars. 
Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.
----
Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
Input: chars = ["a"]
Output: Return 1, and the first character of the input array should be: ["a"]
Explanation: The only group is "a", which remains uncompressed since it's a single character.
Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
----
var compress = function(chars) {
    let  i = 0
    let index = 0
    
    while(i < chars.length){
	
        let j = i
        
        while(j < chars.length && chars[i] === chars[j]) j++
        
		// write compress letter
        chars[index++] = chars[i]
        
		// write number for compressed letter
        if(j - i > 1){
		
			// if the number is >= 10 the string version will have a length of 2 instead of 1
            let num = (j - i).toString()  
            for(let k = 0; k < num.length; k++){
                chars[index++] = num[k]
            }
        }
		// Even though there are nested while loops the time is N because i is updated to j
        i = j
    }
	
	// Since the "compressing" is done in place index returns the updated version
    return index
};
*/



/* 994. Rotting Oranges
In a given grid, each cell can have one of three values:
the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent 
(4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse 
until no cell has a fresh orange.  If this is impossible, return -1 instead.
----
Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
----
var orangesRotting = function(grid) {
    let nFresh = 0;
    let rottenQueue = [];
    let iterations = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1) {
                nFresh++;
            } else if (grid[i][j] === 2) {
                rottenQueue.push([i, j]);
            }
        }
    }
    
    function rotOrange(i, j) {
        if(i < 0 || i > grid.length - 1) return;
        if(j < 0 || j > grid[0].length - 1) return;
        if(grid[i][j] === 1) {
            grid[i][j] = 2;
            nFresh--;
            rottenQueue.push([i, j]);
        }
    }
    
    while(rottenQueue.length > 0) {
        let levelLen = rottenQueue.length;
        while(levelLen > 0) {
            let [i, j] = rottenQueue.shift();
            rotOrange(i - 1, j);
            rotOrange(i, j + 1);
            rotOrange(i + 1, j);
            rotOrange(i, j - 1);
            levelLen--;
        }
        if(rottenQueue.length > 0) iterations++;
    }
    
    return nFresh > 0 ? -1 : iterations;
};
*/


/* 975. Odd Even Jump
Google (Intern):
var oddEvenJumps = function(A) {
    
    if(A.length == 1){
        return 1;
    }
    
    let timesGotToEnd = 1;
    
    for(let i = 0; i < A.length; i++){
        getToEnd(i);
    }
    
    function getToEnd(index){
        
        let stillJumping = true;
        let oddOrEven = 1;
        let jumpFrom = index;
        while(stillJumping){
            
            if(oddOrEven % 2 == 1){
                jumpFrom = lookForBigger(jumpFrom);
            }else{
                jumpFrom = lookForSmaller(jumpFrom);
            }
            
            //console.log("jumpFrom = " + jumpFrom);
            
            
            if(jumpFrom == -1){
                stillJumping = false;
            }
            
            if(jumpFrom == A.length -1){
                timesGotToEnd++;
                stillJumping = false;
            }
            oddOrEven++;
        }  
    }
    
    function lookForBigger(ix){
        let smallestValue = Infinity;
        let smallestValueIndex = -1;
        
        for(let i = ix + 1; i <= A.length; i++){
                if(A[i] >= A[ix]){
                    
                    if(A[i] < smallestValue ){
                        smallestValue = A[i];
                        smallestValueIndex = i;
                    } 
                }
        } 
        
        return smallestValueIndex;
    }
    
    function lookForSmaller(ix){
        let biggestValue = -1;
        let biggestValueIndex = -1;
        for(let i = ix + 1; i <= A.length; i++){
                if(A[i] <= A[ix]){
                    
                    if(A[i] > biggestValue){
                        biggestValue = A[i];
                        biggestValueIndex = i;
                    }
                }
        }
        return biggestValueIndex;
    }
    return timesGotToEnd;  
};

*/

/* 686 Repeated String Matching
Given two strings a and b, return the minimum number of times 
you should repeat string a so that string b is a substring of it. 
If it is impossible for b​​​​​​ to be a substring of a 
after repeating it, return -1.

Notice: string "abc" repeated 0 times is "",  
repeated 1 time is "abc" and repeated 2 times is "abcabc".
----
let numRepeats = b.length / a.length;
    numRepeats = Math.ceil(numRepeats);
    console.log(a.repeat(numRepeats) + " : " + numRepeats);
    let checkString = a.repeat(numRepeats);
    
    if(checkString.includes(b)){
        return numRepeats;
    }
    
    numRepeats++;
    checkString = a.repeat(numRepeats);
    if(checkString.includes(b)){
        return numRepeats
    }else{
        return -1;
    }
||
var repeatedStringMatch = function(A, B) {
    const n = Math.ceil(B.length / A.length);
    if (A.repeat(n).includes(B)) return n;
    if (A.repeat(n + 1).includes(B)) return n + 1;
    return -1;
};
*/

/* Checkin and Checkouts:
// Find CheckIn and CheckOuts:
function find(arr) {
  if (!arr || arr.length === 0) return null;
  const obj = {};
  for (let i = 0; i < arr.length; i += 1) { // O(n)
      if (arr[i][0] === '+') obj[arr[i].substr(1)] = (obj[arr[i].substr(1)] += 1) || 1;
  }
  return Object.entries(obj).sort((a, b) => { // O(k log k) where k = 260
      if (a[1] === b[1]) {
          return a[0].localeCompare(b[0]);
      }
      x =  b[1] - a[1];
  })[0][0];
}

console.log(" x = " + x);

*/


/* 1170. Compare Strings by Frequency of the Smalles Character
Let's define a function f(s) over a non-empty string s, which calculates the frequency of the smallest character in s. For example, if s = "dcce" then f(s) = 2 because the smallest character is "c" and its frequency is 2.

Now, given string arrays queries and words, return an integer array answer, where each answer[i] is the number of words such that f(queries[i]) < f(W), where W is a word in words
----
Input: queries = ["cbd"], words = ["zaaaz"]
Output: [1]
Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").
----
var numSmallerByFrequency = function(queries, words) {
    const wordVals = words.map(getLowestCharFrequency);
  
  // Sort in descending order of value so that we can
  // short circuit our comparison search of words and queries.
  // This can save many iterations depending on the input size.
  wordVals.sort((a, b) => b - a);
  
  return queries.map(query => {
    const queryVal = getLowestCharFrequency(query);
    let wordsWithHigherValue = 0;
    
    for (const wordVal of wordVals) {
      if (queryVal < wordVal) wordsWithHigherValue++;
      
      // Here's the short circuit so we only iterate through
      // values larger than the current query value.
      else break;
    }
    
    return wordsWithHigherValue;
  });
}

function getLowestCharFrequency(str) {
  let lowestChar = 'z';
  let lowestFrequency = 0;
  
  for (const char of str) {
    if (char === lowestChar) {
      lowestFrequency++;
    } else if (char < lowestChar) {
      lowestChar = char;
      lowestFrequency = 1;
    }
  }
  
  return lowestFrequency;
||
    
    let wordVals = words.map(getLowestCharFrequency);
    
    let queryVals = queries.map(getLowestCharFrequency);
    
    let values = [];
    
    let numWords = 0;
    for(let i = 0; i < words.length; i++){
        
        for(let j = 0; j < queries.length; j++){
            console.log(wordVals[i] + " > " + queryVals[j]);
            if(wordVals[i] > queryVals[j]){
                numWords++;
            }
        }
        values.push(numWords);
        numWords = 0;   
    }
    
    console.log("wordVals : " + wordVals);
    console.log("queryVals : " + queryVals);
    
    values = values.filter( value => value != 0);
    
    return values;
    
    
    function getLowestCharFrequency(wordFromList){
        let lowestChar = 'z';
        let lowestFrequency = 0;
        
        for(let char of wordFromList){
            if(char == lowestChar){
                lowestFrequency++;
            }else if(char < lowestChar){
                lowestChar = char;
                lowestFrequency = 1;
            }
        }
        
        return lowestFrequency;
    }
   /
};
*/


/* ???. Max Chairs Needed
There are n guests who are invited to a party. The k-th guest will attend the party at time S[k] and leave the party at time E[k].

Given an integer array S and an integer array E, both of length n, return an integer denoting the minimum number of chairs 
you need such that everyone attending the party can sit down.
----
Input: S = [1, 2, 6, 5, 3], E = [5, 5, 7, 6, 8]
Output: 3
Explanation:
There are five guests attending the party. 
The 1st guest will arrive at time 1. We need one chair at time 1.
The 2nd guest will arrive at time 2. There are now two guests at the party, so we need two chairs at time 2.
The 5th guest will arrive at time 3. There are now three guests at the party, so we need three chairs at time 3.
The 4th guest will arrive at time 5 and, at the same moment, the 1st and 2nd guests will leave the party.
There are now two (the 4th and 5th) guests at the party, so we need two chairs at time 5.
The 3rd guest will arrive at time 6, and the 4th guest will leave the party at the same time.
There are now two (the 3rd and 5th) guests at the party, so we need two chairs at time 6. 
So we need at least 3 chairs.
----
// calculate number of chairs needed
function numChairsNeeded(arriving, leaving){
  let all = [];

  for(let i = 0; i < arriving.length; i++){
    all.push([arriving[i], 1]);
    all.push([leaving[i], -1]);
  }

  all.sort(function(a, b) { 
    if( a[0] == b[0]){
        return a[1] - b[1];
    }
    
    return a[0] - b[0]

  });

  let maxChairs = 0;
  let curretChairs = 0;

  for(let i = 0; i < all.length; i++){
      
      curretChairs += all[i][1];  
      if(curretChairs > maxChairs){
        maxChairs = curretChairs;
      }
  }

  console.log("Max Chairs Needed = " + maxChairs);
  console.log("All = " + all);
}
|| Python
def cal_chairs(starts, ends):
    all = [(s, 1) for s in starts] + [(e, -1) for e in ends]
    all = sorted(all)
    num = 0
    largest = 0
    for pos, t in all:
        num += t
        if largest < num:
            largest = num
    return largest


*/


/* fibonacci
// iterative:
function fibonacci(num){
  let a = 1;
  let b = 0;
  let temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

// recursive
function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

// DP solution:
function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}


*/

