/* Notes:
* Think outload

* Ask clarifying questions to get details
    about the problem

* Take tips seriously and add more questions
about them.



* Construct/ traverse data structures

* Implement system routines

* Distill large data sets to sinle values

* Transform one data set to another


*/


/* Perpare: 

* Study Quicksort & Mergesort : done
    * When are they efficent : done
    * When to use Radix, insertion : done
 * Traveling Salesman : research done
 * Knapsack : research done
 * What does NP-complete mean? : done 
 *      A problem p in NP is
 *      // NP = Non-Deterministic Poly time: poly time to check but ...
 *      // P stand for poly time
 *      //NP-complete if every other problem in NP can be transformed 
 *      //(or reduced) into p in polynomial time.
 *      // NP complete is a problem that is NP-Hard but also
 *      // has a Non-determinstic poly time alogorithm.
 * Trees : done
 * Adjasency list : done
 * Priority Queues : done
 * Build a hashTable from scatch : done
 
 * Trees : done
  * Binary : done
  * n-ary trees : done
  * Trie-trees  : done
  * Black Red Trees : done
  * BFS : done
  * DFS : done
  * InOrder : done
  * PostOrder : done
  * PreOrder : done

* Heaps
    *Understand application/ When to use : done
    *Big O : done


* Graphs
    * Types
        * Objects and pointers : done
        * matrix : done
        * Adjacenty List : done
    * Traversal algorithms
        * BFS : done
        * DFS : done
    * Complexity : done
* Recursion : done
* Deadlock vs Lifelock : done

* Fundementals of "modern Concurrency constructs"
* n choose K : done : n! / ((n - k )! * k!)

* mod % a negative number : done

* Read : https://sites.google.com/site/steveyegge2/five-essential-phone-screen-questions
* watch: https://www.youtube.com/watch?v=oWbUtlUhwa8&feature=youtu.be : done

*/

/* Problems to do:
* Split a string without spaces : done
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

//====================================================

class Queue{
    

    constructor(){
        this.elements = [];
    }

    enqueue(ele){
        this.elements.push(ele);
    }

    dequeue(){
        
       if(this.elements.isEmpty()){
           return 'Underflow';
       }     
       return this.elements.shift();
    }

    isEmpty(){
        return this.elements.length === 0;
    }
}

class Graph{

    // defining vertex array and adjacentcy list
    constructor(numberOfVertices){
        this.numberOfVertices = numberOfVertices;
        this.AdjacencyList = new Map();
    }

    //====functions===============
    addVert(newVert){
        if(this.AdjacencyList.has(newVert)){
            return 'This vertex already exists.';
        }

        this.AdjacencyList.set(newVert, []); // us a set instead of an array
        
        return newVert;
    }

    deleteVert(removedVert){
        console.log("deleting : " + removedVert);
        if(!this.AdjacencyList.has(removedVert)){
            return 'vertex does not exist';
        }

        this.AdjacencyList.delete(removedVert);

        let iterValues = this.AdjacencyList.values();
        for(let verts of iterValues){
            console.log("values of each key "+verts);
            let index = verts.indexOf(removedVert);
            console.log("index of removded vert =  " + index);
            if(!(index === -1)){
                console.log("vert to remove "+ verts.slice(index, index+1));
                verts.splice(index, 1);
            } 
        }
        
        // remove all unreachable nodes:
        let listOfReachables = this.dfsWholeTree('A');
        console.log('Reachable from A = ');
        
        listOfReachables.forEach((value) => console.log(" " + value + " is reachable"));
        
        
        
        console.log('Deleting all unreachable');
        let allKeys = new Set([...this.AdjacencyList.keys()]);
        allKeys.forEach((values) => console.log(" " + values + " is a key"));

        let unreachable = new Set([...allKeys].filter(x => !listOfReachables.has(x)));
        unreachable.forEach((value) => console.log(value + ' is not reachable'));

        unreachable.forEach((vertex) => this.AdjacencyList.delete(vertex));



        
    }

    addEdge(fromVert, toVert){
        if(!this.AdjacencyList.has(fromVert)){
            return 'starting edge does not exist';
        }

        this.AdjacencyList.get(fromVert).push(toVert);
        
        return fromVert + " -> " + toVert + " Added";
    }

    printGraph(){
        console.log("====Printing Graph=====");
        let verticies = this.AdjacencyList.keys();
        for(let vertex of verticies){
            console.log(vertex + ':');
            this.AdjacencyList.get(vertex).forEach(
                function(destination){
                    console.log(vertex + " -> " + destination);
                }
            );
            console.log("//=======================");
        }
    }

    // DFS
    dfsWholeTree(startVertex){
        let visited = new Set();
                 
        return helper(startVertex, this.AdjacencyList);



        function helper(origin, list){
            // set node as visited get vertices
            // check each vert if not vot visited -> visit
            visited.add(origin);   
            //console.log("size of set for vertex origin : " + (list.get(origin).length));
            

            if(list.get(origin).length == 0){
                console.log(origin)
                return;
            }

            console.log(origin + " -> ")
            
            let vertexIt = list.get(origin);
            for(let vertex of vertexIt){
                if(!visited.has(vertex)){
                    helper(vertex, list);
                }
            }

            return visited;
            
        }

    }

    dfsFromTo(start, end){
        
        
        console.log("=="+ start + " =find=> "+ end+ "==")
        let visited = new Set();
        let notFound = true;


        helper2(start, end, this.AdjacencyList);

        
        function helper2(start, end, list){
            visited.add(start);
            if(list.get(start).length == 0){
                console.log(start)
                return "reached end of graph " + end + " not found";
            }
            
            let slink = start;

            let vertexIt = list.get(start);
            for(let vertex of vertexIt){
                if(!visited.has(vertex)){
                    if(vertex === end){
                        if(notFound){
                            console.log(slink + " -> " + end + " : found");
                        }
                        notFound = false;
                        return;
                    }
                    else
                    {
                        if(notFound){
                            console.log(slink + ' -> ' + vertex);
                            helper2(vertex, end, list);
                        }
                    }
                }
            } 

        }

        return 'vertex not found';
    }

    // bfs()
    bfs(start){
        console.log("//======BFS====")
        //create visited
        let visited = new Set();
        let que = new Array();
        // create a queue
        let q = new Queue();

        // add starting vertext to queue
        visited.add(start);
        que.push(start);

        
        // check all elements in tree
        while(que.length !== 0){
            // get the elemet from the queue
            let element = que.shift();
            console.log(element);

            // get the list for the current vertex
            let vertices = this.AdjacencyList.get(element);
            vertices.forEach((vertex) => {
                if(!visited.has(vertex)){
                    visited.add(vertex);
                    que.push(vertex);
                }
            });

        }
        

    }

}


let g = new Graph(6);

let newVerts = ['A', 'B', 'C', 'D', 'E', 'F'];

// add vertices to graph
newVerts.forEach((vert) => g.addVert(vert));

// add edges to graph
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('A', 'D');
g.addEdge('B', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'A');
g.addEdge('C', 'F');
g.addEdge('E', 'F');

// print Graph
console.log("//========Graph========");
g.printGraph();

// Do a dfs()
console.log("//==========DFS==========")
g.dfsWholeTree('A');
g.bfs('A');


// Do a dfs() for a specific element
console.log('//======DFSFromTo===========')
g.dfsFromTo('A', 'F');
g.dfsFromTo('A', 'Q');


//========Testing=================

console.log("\n//==============Testing============\n");
g.printGraph();
g.deleteVert('D');
g.printGraph();
g.bfs('A');


//=============Tree testing===================
class Node{

    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    //======functions======
    // insert(data)
    insert(val){
        let newNode = new Node(val);

        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }
    // insertNode(node, newNode)
    insertNode(root, nNode){
        if(nNode.val < root.val){
            if(root.left === null){
                root.left = nNode;
            }else{
                this.insertNode(root.left, nNode);
            }
        }else{
            if(root.right === null){
                root.right = nNode;
            }else{
                this.insertNode(root.right, nNode);
            }
        }
    }

    // remove(data)
    remove(val){
        this.root = this.removeNode(this.root, val);
    }

    removeNode(nNode, val){
        if(nNode === null){
            return null;
        }else if(val <  nNode.val){
            nNode.left = this.removeNode(nNode.left, val);
            return nNode;
        }else if(val > nNode.val){
            nNode.right = this.removeNode(nNode.right, val);
            return nNode;
        }else{
            if(nNode.left == null && nNode.right == null){
                nNode = null;
                return nNode;
            }

            if(nNode.left == null){
                nNode = nNode.right;
                return nNode;
            }else if(nNode.right == null){
                nNode = nNode.left;
                return nNode;
            }

            // node has two children
            let auxNode = this.findMinNode(nNode.right);
            // dont remove the node change data instead
            nNode.val = auxNode.val;
            // set the right node to what ever happens on the right sub
            // tree after deleing the min value of the right sub tree
            // this happens because the min value could have a right sub-tree
            nNode.right = this.removeNode(nNode.right, auxNode.val);
            return nNode;
        }

        /*
            function height(node){
            if(!node) return 0;
            var leftHeight = height(node.left);
            var rightHeight = height(node.right);

            return Math.max(leftHeight, rightHeight) + 1;
}
        */
    }

    // get the min value of a tree given a node
    findMinNode(nNode){
        if(nNode.left === null){
            return nNode;
        }else{
            return this.findMinNode(nNode.left);
        }
    }
    // get the node 
    findMaxNode(nNode){
        if(nNode.right === null){
            return nNode;
        }else{
            return this.findMaxNode(nNode.right);
        }
    }

    // get the root node
    getRootNode(){
        return this.root;
    }

    //search the tree for a node
    search(nNode, val){
        if(nNode == null){
            return null;
        }else if(val < nNode.val){
            this.search(nNode.left, val)
        }else if(val > nNode.val){
            this.search(nNode.right, val);
        }else{
            return nNode;
        }
    }


    //===helper functions====
    // preOrder(node)
    preOrder(nNode){
        if(nNode !== null){
            console.log(nNode.val);
            this.preOrder(nNode.left);
            this.preOrder(nNode.right);
        }
    }
    // inOrder(node)
    inOrder(nNode){
        if(nNode !== null){
            this.inOrder(nNode.left);
            console.log(nNode.val);
            this.inOrder(nNode.right);
        }
    }
    // postOrder(node)
    postOrder(nNode){
        if(nNode !== null){
            this.postOrder(nNode.left);
            this.postOrder(nNode.right);
            console.log(nNode.val);
        }
    }
}


let BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//          15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      7  13 22  27 
//     / \    / 
//    5   9  17 

let root = BST.getRootNode();

console.log("//==========Tree=Stuff=========")
console.log("inOrder");
BST.inOrder(root);
// prints 5 7 9 10 13 15 17 22 25 27 

console.log('Remove 5');
BST.remove(5);
//          15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      7  13 22  27 
//       \    / 
//        9  17  
console.log('inOrder');
BST.inOrder(root);
// prints 7 9 10 13 15 17 22 25 27 
console.log('remove 7');
BST.remove(7);
//          15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      9  13 22  27 
//            / 
//           17  
console.log('inOrder');
BST.inOrder(root);
console.log('remove 15 the root');
BST.remove(15);
//          17 
//         /  \ 
//        10   25 
//       / \   / \ 
//      9  13 22  27 
root = BST.getRootNode();
console.log('inOrder');
BST.inOrder(root);
console.log('preOrder');
BST.preOrder(root);


console.log('postOrder');
BST.postOrder(root);


//========Red-black tree rules===
// * the root and leaves are black
// * if a node is red it has black children
// * all paths frm a node to its nill descendants 
//     have the same number of black nodes
// * longest path is no more than twice the lenght
//      of the shortest path


//===========HashTable========
console.log('//=====HashTable=======');

class HashTable{
    constructor(){
        this.values = {};
        this.length = 0;
        this.seed = 2;
    }

    calculateHash(key){
        return key.toString().length % this.seed;
    }

    add(key, value){
        let hash = this.calculateHash(key);

        if(!this.values.hasOwnProperty(hash)){
            this.values[hash] = {};
        }

        if(!this.values[hash].hasOwnProperty(key)){
            this.length++;
        }

        this.values[hash][key] = value;
    }

    get(key){
        let hash = this.calculateHash(key);

        if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)){
            return this.values[hash][key];
        }else{
            return null;
        }
    }
}

// create object of type hash table
let ht = new HashTable();
// add data to the hash table ht
ht.add('USA', '300');
ht.add('Germany', '100');
ht.add('Italy', '50');

//get
console.log('Get: Italy');
console.log(ht.get('Italy'));



//=======Dijkstra's===========Search
console.log('//=====Dijkstra\'s=======');
let graph = {
    start: {A:5, B:2},
    A: {C:4, D:2},
    B: {A:8, D:7},
    C: {D:6, finish:3},
    D: {finish: 1},
    finish:{}
};

// Keep track of the lowest weight form one node to the next
let weight = {
    A : 5, 
    B: 2,
    finish: Infinity
};

// Keep track of the lowest weight parent:
let parent = {
    A: 'start',
    B: 'start',
    finish: null
};

// Visited
let visited = ['start', 'A', 'B'];


// Get node with lowest weight:
let findLowestWeightNode = (weights, processed) =>{
    let knowNodes = Object.keys(weights);

    let lowestWeightNodes = knowNodes.reduce((lowest, node) => {
        if(lowest === null && !processed.includes(node)){
            lowest = node;
        }

        if(weights[node] < weights[lowest] && !processed.includes(node)){
            lowest = node;
        }
        console.log('Lowest = '+lowest);
        return lowest;
    }, null);
    console.log('lowest weight Node = ' + lowestWeightNodes);
    return lowestWeightNodes;
};

let dijkstra = (graph) => {
    // track lowest cost to reach each node
    let weights = Object.assign({finish: Infinity}, graph.start);

    // track paths
     let parents = {finish: null};

     for(let child in graph.start){
         parents[child] = 'start';
     }

     // track nodes that have already been processed
     let processed = [];

     // Next we will set the inital values of the nodes being processed
     // using the lowestCostNode function. Then, we will begin a while loop
     // which will continuously lok for the cheapest node.
     
     let node = findLowestWeightNode(weights, processed);

     while(node){
         // Get the weight of the current node
         let weight = weights[node];

         // get the neibors of current node
         let children = graph[node];

         // * Go though each of the children and calculate the weight
         //     to reach that child node.
         // * Update the weight of each child node in the weights object
         //     if it is the cheapest path or the only path.
         
         for(let k in children){
             let newWeight = weight + children[k];
             
             if(!weights[k] || weights[k] > newWeight){
                 weights[k] = newWeight;
                 console.log("this is node = " + node);
                 parents[k] = node;
             }
         }

         // push processed data into its data structure
         processed.push(node);

         // repeat until we processed all of the nodes.
         node = findLowestWeightNode(weights, processed);
     }

     let optimialPath = ['finish']; // set end node

     let parent = parents.finish; // paret = the parent of finish

     while(parent){ // while there are parents
        optimialPath.unshift(parent); // place that parent at front of path
        parent = parents[parent]; // get next parent
     }

     let results = {
        distance: weights.finish,
        path: optimialPath
     };

     let arrg = results['path'];
     console.log('distance = ' + results['distance']);
     let thisPath = "Optimal path : ";
     for(let i = 0; i < arrg.length; i++){
         thisPath += arrg[i];
         if(i != arrg.length - 1){
             thisPath += ' => ';
         }
     }
     console.log(thisPath);
     //return results
};

dijkstra(graph);

//====2D escape Room===========
var isEscapePossible = function(blocked, source, target) {    
    let n = blocked.length;
    
    if(n == 0 || (source[0] == target[0] && source[1] == target[1])){
        return true;
    }
    
    let blocks = new Set();
    
    for(let b of blocked){
        //blocks.add(b.toString());
        blocks.add(b);
    }
    
    let visited = new Set();
    
    let sourceCanPass = bfs(source, target, visited, blocks);
    
    if(!sourceCanPass){
        return false;
    }
    
    visited.clear();
    let targetCanPass = bfs(target, source, visited, blocks);
    return targetCanPass;
};

function bfs(start, end, visited, blocks){
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];
    let q = new Array();
    
    console.log("start = " + start);
    q.push(start);
    
    //visited.add(start[0] + ','+start[1]);
    visited.add(start);
    
    while(q.length > 0){
        let cur = q.shift();
        if(cur[0] == end[0] && cur[1] == end[1]){
            return true;
        }
        
        for(let k = 0; k < 4; k++){
            let nx = cur[0] + dx[k];
            let ny = cur[1] + dy[k];
            
            if(nx , 0 || ny < 0 || nx >= 1000000 || ny >= 1000000){
                continue;
            }
            
            let nz = [nx, ny];
            //nz = nz.toString();
            
            let isInVisited = visited.has(nz);
            if(!isInVisited){
                visited.add(nz);
            }
            
            if(blocks.has(nz) || isInVisited){
                continue;
            }
            
            //q.push([nx,ny]);
            q.push(nz);
        }
        // if we have q.size() nodes visited, we need at least q.size() nodes to block it;
        if(q.length > blocks.size){
            console.log("true from 1");
            return true;
        }
        
    }
    
    return false;
}

