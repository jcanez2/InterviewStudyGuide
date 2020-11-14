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

* Study Quicksort & Mergesort : done
    * When are they efficent : done
    * When to use Radix, insertion : done
 * Traveling Salesman
 * Knapsack
 * What does NP-complete mean?
 * Trees
 * Adjasency list : done
 * Priority Queues
 * Build a hashTable from scatch
 
 * Trees
  * Binary
  * n-ary trees
  * Trie-trees
  * Black Red Trees
  * BFS : done
  * DFS : done
  * InOrder
  * PostOrder
  * PreOrder

* Heaps
    *Understand application/ When to use
    *Big O : done


* Graphs
    * Types
        * Objects and pointers
        * matrix : done
        * Adjacenty List : done
    * Traversal algorithms
        * BFS : done
        * DFS : done
    * Complexity
* Recursion : done
* Deadlock vs Lifelock : done

* Fundementals of "modern Concurrency constructs"
* n choose K

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