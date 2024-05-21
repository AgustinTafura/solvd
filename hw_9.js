class Stack {
    constructor() {
        this.items = [];
    }

    // Add an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element from the stack
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

    // Return the top element from the stack without removing it
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the stack
    size() {
        return this.items.length;
    }
}

// Example
console.log('------------------------------------Example - Stack------------------------------------------------------')
const stack = new Stack();

stack.push(10); 
stack.push(20); 
stack.push(30); 

console.log(stack.peek());  // Outputs 30

console.log(stack.pop());   // Outputs 30
console.log(stack.peek());  // Outputs 20
console.log(stack.pop());   // Outputs 20
console.log(stack.peek());  // Outputs 20
console.log(stack.size()); // Outputs 1
console.log('---------------------------------------------------------------------------------------------------------')
console.log('------------------------------------Example - Queue------------------------------------------------------')

class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the first element from the queue
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items.shift();
    }

    // Return the first element without removing it
    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the queue
    size() {
        return this.items.length;
    }
}

// Example
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); 
console.log(queue.peek());   
console.log(queue.size());    

console.log('---------------------------------------------------------------------------------------------------------')
console.log('------------------------------------Example - Binary Tree------------------------------------------------')
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Insert a node into the tree
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Search for a node in the tree
    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return node;
        }
    }

    // In-order traversal (left, root, right)
    inOrder(node, result = []) {
        if (node !== null) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
        return result;
    }

    // Pre-order traversal (root, left, right)
    preOrder(node, result = []) {
        if (node !== null) {
            result.push(node.value);
            this.preOrder(node.left, result);
            this.preOrder(node.right, result);
        }
        return result;
    }

    // Post-order traversal (left, right, root)
    postOrder(node, result = []) {
        if (node !== null) {
            this.postOrder(node.left, result);
            this.postOrder(node.right, result);
            result.push(node.value);
        }
        return result;
    }

    isBST() {
        const validateBST = (node, min = -Infinity, max = Infinity) => {
            if (node === null) {
                return true;
            }
            if (node.value <= min || node.value >= max) {
                return false;
            }
            return validateBST(node.left, min, node.value) && validateBST(node.right, node.value, max);
        };

        return validateBST(this.root);
    }
}

// Usage example
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(13);
binaryTree.insert(18);

console.log('In-order traversal:', binaryTree.inOrder(binaryTree.root)); // Outputs: [3, 5, 7, 10, 13, 15, 18]
console.log('Pre-order traversal:', binaryTree.preOrder(binaryTree.root)); // Outputs: [10, 5, 3, 7, 15, 13, 18]
console.log('Post-order traversal:', binaryTree.postOrder(binaryTree.root)); // Outputs: [3, 7, 5, 13, 18, 15, 10]

console.log('Search for 7:', binaryTree.search(7)); // Outputs: TreeNode { value: 7, left: null, right: null }
console.log('Search for 20:', binaryTree.search(20)); // Outputs: null


console.log('---------------------------------------------------------------------------------------------------------')
console.log('------------------------------------Example - Graph------------------------------------------------------')
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // Comment this line if the graph is directed
    }

    // Remove an edge between two vertices
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    // Remove a vertex and all its edges
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    // Depth-First Search (DFS)
    dfs(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfsRecursive(vertex) {
            if (!vertex) return;
            visited[vertex] = true;
            result.push(vertex);

            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfsRecursive(neighbor);
                }
            });
        })(start);

        return result;
    }

    // Breadth-First Search (BFS)
    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }

    // Print the graph
    print() {
        for (let vertex in this.adjacencyList) {
            console.log()
            console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
        }
    }
}



// Example usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'A');
graph.addEdge('F', 'A');
console.log(graph.print())
console.log(graph.dfs('A')); // Outputs: [ 'A', 'B', 'D', 'E', 'C' ]
console.log(graph.bfs('A')); // Outputs: [ 'A', 'B', 'C', 'D', 'E' ]
console.log('---------------------------------------------------------------------------------------------------------')
console.log('------------------------------------Example - Linked List------------------------------------------------')

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add a node at the end of the list
    add(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Remove a node from the list
    remove(value) {
        if (this.head === null) return;

        if (this.head.value === value) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            let previous = null;
            while (current !== null && current.value !== value) {
                previous = current;
                current = current.next;
            }
            if (current !== null) {
                previous.next = current.next;
            }
        }
        this.size--;
    }
    // Sarch a Node in the list
    search(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return false;
    }
    // Check if the list contains a value
    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Get the size of the list
    getSize() {
        return this.size;
    }

    // Print the list values
    print() {
        if (!this.hasCycle()) {
            let current = this.head;
            const values = [];
            while (current !== null) {
                values.push(current.value);
                current = current.next;
            }
            console.log(values.join(' -> '));
        }
    }

    // Detect if the list has a cycle using Floyd's Cycle Detection Algorithm
    // (https://www.geeksforgeeks.org/floyds-cycle-finding-algorithm/)
    hasCycle() {
        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next; // move slow pointer by one step
            fast = fast.next.next; // move fast pointer by two steps

            if (slow === fast) {
                return true; // cycle detected
            }
        }

        return false; // no cycle
    }
}

// Example
const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.print(); // Outputs: 10 -> 20 -> 30
console.log(list.getSize()); // Outputs: 3


console.log(list.contains(20)); // Outputs: true
console.log(list.search(20)); // Outputs: Node

list.remove(20);
console.log(list.contains(20)); // Outputs: false

list.print(); // Outputs: 10 -> 30
console.log(list.getSize()); // Outputs: 2
console.log('---------------------------------------------------------------------------------------------------------')
console.log('------------------------------------Example - Min/Max Stack----------------------------------------------')

class MinMaxStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.maxStack = [];
    }

    // Push a value onto the stack
    push(value) {
        this.stack.push(value);
        console.log("this.stack:", this.stack)
        // Update the minStack
        if (this.minStack.length === 0 || value <= this.getMin()) {
            this.minStack.push(value);
        } else {
            this.minStack.push(this.getMin());
        }
        console.log("this.minStack:", this.minStack)

        // Update the maxStack
        if (this.maxStack.length === 0 || value >= this.getMax()) {
            this.maxStack.push(value);
        } else {
            this.maxStack.push(this.getMax());
        }
        console.log("this.maxStack:", this.maxStack)
    }

    // Pop a value off the stack
    pop() {
        if (this.stack.length === 0) {
            throw new Error("Stack is empty");
        }
        this.minStack.pop();
        this.maxStack.pop();
        return this.stack.pop();
    }

    // Get the minimum value in the stack
    getMin() {
        if (this.minStack.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.minStack[this.minStack.length - 1];
    }

    // Get the maximum value in the stack
    getMax() {
        if (this.maxStack.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.maxStack[this.maxStack.length - 1];
    }
}

// Example
const minMaxStack = new MinMaxStack();
minMaxStack.push(5);
minMaxStack.push(3);
minMaxStack.push(8);
minMaxStack.push(2);

console.log("Current Min:", minMaxStack.getMin()); // Outputs: 2
console.log("Current Max:", minMaxStack.getMax()); // Outputs: 8

minMaxStack.pop();

console.log("Current Min after pop:", minMaxStack.getMin()); // Outputs: 3
console.log("Current Max after pop:", minMaxStack.getMax()); // Outputs: 8

minMaxStack.pop();

console.log("Current Min after second pop:", minMaxStack.getMin()); // Outputs: 3
console.log("Current Max after second pop:", minMaxStack.getMax()); // Outputs: 5
console.log('---------------------------------------------------------------------------------------------------------')
console.log('------------------------------------Example - Binary Search Tree - isBST---------------------------------')


// Check if the tree is a BST
console.log(777, binaryTree.isBST()) // Outputs: true
// Create a non-BST by breaking the BST property
binaryTree.root.left.right.value = 11;
// Check if the tree is still a BST
console.log(888, binaryTree.isBST()); // Outputs: false


console.log('---------------------------------------------------------------------------------------------------------')
console.log('------------------------------------Example - Linked List Cycle------------------------------------------')


// Example
const list2 = new LinkedList();
list2.add(10);
list2.add(20);
list2.add(30);
list2.add(40);
list2.print(); // Outputs: 10 -> 20 -> 30 -> 40
console.log(list2.getSize()); // Outputs: 3

console.log("hasCycle",list2.hasCycle())// Outputs: true

// Create a cycle for testing
list2.head.next.next.next = list2.head;
console.log(list2.getSize()); // Outputs: 3
console.log("hasCycle",list2.hasCycle()); // Outputs: true