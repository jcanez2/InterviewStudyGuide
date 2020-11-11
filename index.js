//#region extra Stuff
/*
console.log("Hello Sir!");

let inner = document.getElementById("demo").innerHTML;
console.log(inner);

document.getElementById("demo").innerHTML = "Thank you for working!";


let proj = {name: "jesus", age:39};

document.getElementById("demo").innerHTML = JSON.stringify(proj);

let myString = document.getElementById("demo").innerHTML;
console.log("this is the string from the html tag" + myString);


let newProj = JSON.parse(myString);

console.log("here is an element of this object : " + newProj.name + " \nhere is another : " + newProj.age);


var node = document.createElement('p');
var textNode = document.createTextNode("This, is my water element!");

//node.appendChild(textNode);


document.getElementById("demo").appendChild(node);

let thisString = document.getElementById("demo").innerHTML;
*/


/*
let thisString = "Hello, operator are you there, yet?"


let reversedString = reverseStringInplace(thisString);
console.log("This is the orginal string: " + thisString);
console.log("This is the reversed string: " + reversedString);  

reverseWordsOnly(thisString);



function reverseStringInplace(s){
  return s.split(" ").reverse().join(" ");
}

function reverseWordsOnly(s){
  
  let wordArr = s.split(" ");
  console.log("where is this" + wordArr);
  for(let i = 0; i < wordArr.length; i++){
      wordArr[i] = reverseWord(wordArr[i]);
  }

  console.log("WordArr after running reverseWord :  " +  wordArr)

  let newString = wordArr.join(" ");
  console.log("Here is the end product : " + newString)
  
 /*
 var out = '';
 var word = '';
 for (var i=0;i<str.length;i++) {
     // your punctuation characters
     if (',.!? '.indexOf(str[i]) == -1) {
        word += str[i];
        }
     else {
         out += word.split('').reverse().join('');
         out += str[i];
         word = '';
     }
 }
  return out;


}

function reverseWord(str){
  //return s.split("").reverse().join("");
  
  let splitWord = s.split("");
  console.log(splitWord);

  let newWordArr = [];

  for(let e of splitWord){
    //console.log("this si a letter : " + e);
    
    if(e "" || e !== ","){
      console.log("This is a letter: " + e);
    }
    else{
      console.log('This is not : ' + e);
    }
    
   let hasPun = 0;
   var out = '';
   var word = '';
   for (var i=0;i<str.length;i++) {
       // your punctuation characters
       if (',.!? '.indexOf(str[i]) == -1) {
          word += str[i];
          }
       else {
           out += word.split('').reverse().join('');
           out += str[i];
           word = '';
           hasPun = 1;
       }
   }
    console.log("here is the outputs out/word : " + out + " / " + word);
    if(hasPun){
      return out;
    }

    return word.split('').reverse().join('');
}

let findTheComma = "where is the, in this word?";

let findArr = findTheComma.split('');
console.log(findArr);
for(let i =0; i < findArr.length; i++){
  if(findArr[i] === ','){
    console.log("Found the ',' at index " + i);
  }
}
let index = 0;
for(let e of findArr){
  if(e === ','){
    console.log("Antoher Found the ',' at index " + index);
    break;
  }
  index++;
}

console.log("This is the Value of Index : " + index);


findArr.forEach( (d) => {
  console.log("d = " + d + " and it's index is " + index);
  if(d === ','){
    console.log("Last Found the ',' at index " + index);
  }
});



let string1 = "";

function myFunction(item, p) {
  string1 += p + " : " + item + "\n";
}



var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

console.log(string1);


function reverseWords(s) {
  return s.replace(/[a-z]+/ig, function(w){return w.split('').reverse().join('')});
}

console.log(reverseWords("This is fun, hopefully.")); // sihT si nuf, yllufepoh. 


var sentence = "This is fun, hopefully.";
sentence.split(/\b/)
        .map(w => w.split(/(?=\S)/)
                   .reverse()
                   .join("") )
    .join("");

console.log(sentence);

*/


/* Fruit into Basket:

let myMap = new Map();
    let maxCount = 0;
    let start = 0;
    
    for(let end = 0; end < tree.length; end++){
        
        if(myMap.has(tree[end])){
            myMap.set(tree[end], myMap.get(tree[end]) + 1);
        }else{
            myMap.set(tree[end], 1);
        }
        
        if(myMap.size > 2){
            myMap.set(tree[start], myMap.get(tree[start] ) - 1);
            if(myMap.get(tree[start]) == 0){
                start++;
                myMap.delete(tree[start -1]);
            }else{
                start++;
            }  
        }
        
        if(maxCount < end - start + 1){
            maxCount = end - start + 1;
        }
    }
    
    return maxCount;

*/



/* 1108. Defanging an IP Address

var defangIPaddr = function(address) {
    let newAddress = address.replace(/\./g, '[.]');
    return newAddress;
};

*/





/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
/* Closest Binary Search Tree
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
*/



/* trapping rain water

let largest = height[0];
    let largestIndex = 0;
    let water = 0;

    for(let i=1; i<height.length; i++) {
                
        // if height i is greather than i -1 
        // then there is the potential for water
        if (height[i] > height[i-1]) {
            
            // what is the max water level
            let fill = Math.min(largest, height[i]);
            
            
            // fill in the water between largest and i
            for(let j=largestIndex+1; j<i; j++) {
                if (height[j] < fill) {
                    water = water + (fill - height[j]);
                    height[j] = fill;
                }
            }
            
			// update largest if necessary
            if (height[i] > largest) {
                largest = height[i];
                largestIndex = i;
            }
            
        }
        
    }
    return water;

*/


/* 388. LongestAbsolute File Path
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

*/


/* 200. Numeber of Islands
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


/*

function solution(A){
  let rows = [];

  let numRows = 1;

  for(let i =0; i < A.length; i++){
    if(A[i] > A[i -1]){
      numRows++
    }
  }

  return numRows;
}


function solution(A){
  A.sort();
  let sum = A.reduce((a, b) => a + b);

  let half = Math.floor(sum/ 2);

  let canMake = new Array(half + 1);
  canMake[0] = true;

  for(let i = 1; i < canMake.length; i++){
      canMake[i] = false;
  }

  for(let value of A){
    for(let i = half; i >= value; i--){
      canMake[i] = canMake[i] || canMake[i - value];
    }
  }

  let largestValue = 0;
  for(let i = half; i > 0; i--){
    if(canMake[i]){
      largestValue = i;
      break;
    }
  }

  let leftIn = sum - largestValue;

  return Math.abs(leftIn - largestValue);
}

*/

/*
let input1 = [1, 2, 3, 11, 5, 6, 7, 8, 9, 10, 3, 2, 1];
//let input1 = [1];
let input2 = ["+1A", "+3E", "-1A", "+4F", "+1A", "-3E", "+1A", "-1A", "+1A"];
let input3 = [1, 2, 3, 11, 5, 6, 7, 8, 9, 10, 11, 5, 6, 6];
let arrive = [1, 2, 6, 5, 3];
let leave = [5, 5, 7, 6, 8];
*/


/*
let x = 0;
find(input2);
findServerLoadDifference(input1);
testFunction();
findGreatestSubArrayKLength(input3, 3);
numChairsNeeded(arrive, leave);

console.log(findLatestTime("2?:3?"));
console.log(findLatestTimeSameNumer("??:??"));
*/



//#region 
/****************
function runFunction(tree){
  let myMap = new Map();
  let maxCount = 0;
    let start = 0;
    
    for(let end = 0; end < tree.length; end++){
        
        if(myMap.has(tree[end])){
            myMap.set(tree[end], myMap.get(tree[end]) + 1);
        }else{
            myMap.set(tree[end], 1);
        }
        
        if(myMap.size > 2){
            myMap.set(tree[start], myMap.get(tree[start] ) - 1);
            if(myMap.get(tree[start]) == 0){
                start++;
                myMap.delete(tree[start -1]);
            }else{
                start++;
            }  
        }
        
        if(maxCount < end - start + 1){
            maxCount = end - start + 1;
        }
    }
    
    console.log("the max length is : " + maxCount);
}

*/
//#endregion
/*

// various tests
function testFunction(){
  let sNum = "1234";
  let num = parseInt(sNum) + 1;
  console.log("num = " + num);
}

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

// Find the difference in server loads
function findServerLoadDifference(loads){ 

  loads.sort( (a , b) =>  b - a);
  console.log("Loads = " + loads);
  let serverALoad = 0;
  let serverBLoad = 0;

  for(let load of loads){
      if( serverALoad > serverBLoad){
          serverBLoad += load;
      }else{
          serverALoad += load;
      }
  }

  let loadDifference = Math.abs(serverALoad - serverBLoad);

  console.log("Server Load Difference = " + loadDifference);

}


console.log(" x = " + x);

// sliding window: Array X is greater than array Y if the first
// non-matching element in both arrays has a greater value in X
// than in Y.
function findGreatestSubArrayKLength(arr, k){
  console.log("arr = " + arr);
  let end = k + 1;
  let largestSlice = arr.slice(0, k);
  let currentSlice;
  console.log("here is the first slice = " + largestSlice);
  for(let start = 1; end <= arr.length; start++){
      currentSlice = arr.slice(start, end);
      console.log("currentSlice = " + currentSlice)
      
      let isCurrentBigger = findBigger(largestSlice, currentSlice);
      console.log(isCurrentBigger);

      if(isCurrentBigger){
        largestSlice = currentSlice;
      }

      end++;
  }

  
  // largest contiguous subarray of length k
  console.log("This is the largest subArray Size " + k + " : = " + largestSlice);
  function findBigger(lS, cS){
    console.log("In function " + lS + " : " + cS);
    for(let i = 0; i < k; i++){
        console.log("in Forloop : cS[i] = " + cS[i] + " lS[i] = " + lS[i]);  
      if(cS[i] > lS[i]){
          return true;
      }else if(lS[i] > cS[i]){
          return false;
      }
    }
    return false;
  }
}

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

// find times with missing questions marks:
function findLatestTime(time){
  if(time.indexOf('?') == -1){
    console.log(time);
    return time;
  }

  let thisSplit = time.split(':');

  thisSplit[0] = getValidHours(thisSplit[0]);
  thisSplit[1] = getValidMinutes(thisSplit[1]);

  let newTime = thisSplit.join(':');

  return newTime;

  //let valid = timeIsValid(time);

  //console.log("is valid? = " + valid);


  function getValidHours(hoursCheck){
    let firstIndex = hoursCheck.indexOf('?');
    if(firstIndex == -1){
      return hoursCheck;
    }
    let newHours = "";
    if(hoursCheck[0] == '?' && hoursCheck[1] == '?'){
      return '23';
    }else if(hoursCheck[0] == '?'){
        let onesPlace = parseInt(hoursCheck[1]);
        if(onesPlace < 4){
          newHours += '2';
        }else{
          newHours += '1';
        }
        newHours += hoursCheck[1];
    }else if(hoursCheck[1] == '?'){
      let tensPlace = parseInt(hoursCheck[0]);
      let sOnesPlace = '';
      if(tensPlace < 2){
        sOnesPlace = '9';
      }else{
        sOnesPlace = '3';
      }
      newHours = hoursCheck[0] + sOnesPlace;
    }
    return newHours;
  }

  function getValidMinutes(minutesCheck){
    if(minutesCheck.indexOf('?') == -1){
      return minutesCheck;
    }

    let newMinutes = "";

    if(minutesCheck[0] == '?' && minutesCheck[1] == '?'){
      return '59';
    }

    if(minutesCheck[0] == '?'){
      newMinutes += '5' + minutesCheck[1];
    }else{
      newMinutes += minutesCheck[0] + '9';
    }

    return newMinutes;
  }


  function timeIsValid(thisTime){
    let timeSplit = thisTime.split(':');

    let hours = parseInt(timeSplit[0]);
    let minutes = parseInt(timeSplit[1]);

    if(hours <= 23 && minutes <= 59){
      return true;
    }
    else{
      return false;
    }
  }
}

// find the largest valid time using the same number
function findLatestTimeSameNumer(timeSN){
  
  let checkTime = timeSN;
  for(let i = 9; i >= 0; i--){
    let sI = i.toString();
    //checkTime.replace(/?/g, sI);
    checkTime = checkTime.replace(/[?]/g, sI);
    let valid = timeIsValid(checkTime);
    if(valid){
      return checkTime;
    }else{
      checkTime = timeSN
    }
  }

  return timeSN;


  function timeIsValid(thisTime){
    let timeSplit = thisTime.split(':');

    let hours = parseInt(timeSplit[0]);
    let minutes = parseInt(timeSplit[1]);

    if(hours <= 23 && minutes <= 59){
      return true;
    }
    else{
      return false;
    }
  }
}
*/

/* Height Checker Google Python
def solution(arr):
  rows=[]
  #traversing through each element in array
  for height in arr:
    found=-1
    #checking with already available rows
    for i in range(len(rows)):
      if height < rows[i]:
        found = i
    #if that height can be put in already available rows
    if found!=-1:
      rows[found]=height
    #else create a new row
    else:
      rows.append(height)
  #return nno of rows
  return len(rows)

print("Number of rows required: ",solution([5,4,3,6,1]))

*/



let input1 = [1, 2, 3, 11, 5, 6, 7, 8, 9, 10, 3, 2, 1];
//let input1 = [1];
let input2 = ["+1A", "+3E", "-1A", "+4F", "+1A", "-3E", "+1A", "-1A", "+1A"];
let input3 = [1, 2, 3, 11, 5, 6, 7, 8, 9, 10, 11, 5, 6, 6];
let arrive = [1, 2, 6, 5, 3];
let leave = [5, 5, 7, 6, 8];


//console.log(helloFunction("Hello world"));
console.log(helloFunction("??:00"));

function helloFunction(time){
  let count = 1;
  let indexs = [];
  let numQuestion = 0;
  for(let i = 0; i < time.length; i++){
    if(time[i] == '?'){
      indexs.push(i);
      numQuestion++;
    }
  }

  if(numQuestion == 4){
    
    return 1440;
  }

  let timeSplit = time.split(':');

  if(timeSplit[1][1] == '?'){
    count = 10;
  }

  if(timeSplit[1][0] == '?'){
    count *= 6;
  }


  if(timeSplit[0][0] == '?' && timeSplit[0][1] != '?' &&  parseInt(timeSplit[0][1]) < 4){
    count *= 3;
  }

  if(timeSplit[0][0] == '?' && timeSplit[0][1] != '?' &&  parseInt(timeSplit[0][1]) > 3){
    count *= 2;
  }

  if(timeSplit[0][0] == '?' && timeSplit[0][1] == '?'){
    count *= 24;
  }

  if(timeSplit[0][1] == '?' && timeSplit[0][0] == '2'){
    count *= 4;
  }

  if(timeSplit[0][1] == '?' && timeSplit[0][0] != '?'  && timeSplit[0][0] != '2'){
    count *= 10;
  }
  return count;
}

console.log(findMax([1, 1, -10, 3, -10, 3, -10]));


function findMax(arr){
  
  if(arr.length <= 3){
    return arr.length;
  }

  let maxSub = 0;
  
  for(let i = 0; i < arr.length; i++){
    
    
    let value = arr[i];
    let values = [];

    for(let j = 0; j < arr.length; j++){
      if(arr[j] == value){
        values.push(j)
      }
    }

    console.log("values = " + values);
    let differenceSum = 0;

    for(let k = 1; k < values. length; k++){
      differenceSum = differenceSum + ((values[k] - values[k-1]) - 1);
    }

    let tempSum = 0;
    if(differenceSum < 4){
      let maxAdd = arr.length - values.length;
      if(maxAdd >= 3){
        tempSum = 3 + values.length;
      }
      else{
        tempSum = maxAdd + values.length;
      }
        maxSub = Math.max(maxSub, tempSum);

    }
    /*
    if(differenceSum < 4){
      tempSum = 3 + differenceSum + values.length;
      maxSub = Math.max(maxSub, tempSum);
    }
    */
  }

  return maxSub;



}