//longest common subsequence: return length
var longestCommonSubsequence = function(text1, text2) {
    if(text1 == '' || text2 == ''){
        return 0;
    }
    
    let dp = new Array(text2.length + 1).fill(0).map(() => new Array(text1.length + 1));
    console.log(dp);
    for(let row = 0; row < dp.length; row++){
        for(let col = 0; col < dp[0].length; col++){
            if(row == 0 || col == 0){
                dp[row][col] = 0;
            }else if(text1[col - 1] === text2[row - 1]){
                dp[row][col] = dp[row - 1][col - 1] + 1;
            }else{
                dp[row][col] = Math.max(dp[row][col - 1], dp[row - 1][col]);
            }
        }
    }
    console.log(dp);
    return dp[text2.length][text1.length];
    
};

// longest common substring: return length
var findLength = function(A, B) {
    let res = 0;
     let same;
     let lastRow = new Array(B.length);
     
     for(let col = 0; col < B.length; col++){
         same = + (A[0] === B[col]);
         lastRow[col] = same;
         if(same && !res){
             res = 1;
         }
     }
     
     console.log(lastRow);
     
     
     for(let row = 1; row < A.length; row++){
         for(let col = B.length - 1; col > 0; col--){
             same = + (A[row] === B[col]);
             if(same){
                 lastRow[col] = lastRow[col-1] + 1;
                 res = Math.max(res, lastRow[col]);
             }else{
                 lastRow[col] = 0;
             }
         }
         
         same = + (A[row] === B[0]);
         lastRow[0] = same;
         if(same && !res){
             res = 1;
         }
     }
     
     return res;
 };
 
 // Partition Equal Subset Sum: Return T:F
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

// Maximum Sub Array //Kadanes Algorithum:
var maxSubArray = function(nums) {
    // Kadane's algorithum
     let currentSum = nums[0];
     let maxSum = nums[0];
     
     for(let i = 1; i < nums.length; i++){
         if(nums[i] < (currentSum + nums[i])){
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
 };

 // wordBreaker: 
 var wordBreak = function(s, wordDict) 
 {
     //s = "peanutbutter";
     //wordDict = ['pea', 'peanut', 'butter'];
     let memo = new Map();
     wordDict = new Set(wordDict);
     
     return helper(0);
     
     function helper(start){
         if(memo.has(start)){
             return memo.get(start);
         }
         
         if(start === s.length){
             return true;
         }
         
         for(let end = start + 1; end <= s.length; end++){
             let left = s.substring(start, end);
             console.log("Current word : " + left);
             if(wordDict.has(left) && helper(end)){
                     console.log("Found word : " + left + " at start " + start + " at end " + end);
                     memo.set(start, true);
                     return true;         
             }
         }   
         memo.set(start, false);
         return false;
     }
 };
     

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

/* Stairs: 1 or two steps:
function numWaysBottomUp(n){
    if(n == 0 || n == 1){
        return 1;
    }
    
    let nums = new Array(n + 1);
    nums[0] = 1;
    nums[1] = 1;
    for(let i = 2; i <= n; i++){
        nums[i] = nums[i - 1] + nums[i - 2];
    }
    return nums[n];
}

// Stairs mulitple ways: X = {1, 3, 5}
// num_ways(n) = num_ways(n -1) + nw(n -2) + nw(n-5);
// steps = [1, 3, 5];
function num_ways_X(n, steps){
    if(n == 0){
        return 1;
    }

    let total = 0;
    for(let step of steps){
        if(n - step >= 0){
            total += num_ways_X(n - step);
        }
    }

    return total;
}

// Stairs mulitple ways: X = {1, 3, 5} Bottom up:
// num_ways(n) = num_ways(n -1) + nw(n -2) + nw(n-5);
// steps = [1, 3, 5];
function num_ways_X(n, steps){
    if(n == 0){
        return 1;
    }

    let nums = new Array(n + 1);
    nums[0] = 1;
    
    for(let i = 1; i < n; i++){
        let total = 0;
        for(let j of steps){
        
            if(i - j >= 0){
                total += nums[i - j];
            }
        }
        nums[i] = total;
    }

    return nums[n];
}

*/
