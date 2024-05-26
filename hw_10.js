/**
 * Custom Hash Table implementation in JavaScript.
 * This class provides methods for inserting, retrieving, and deleting key-value pairs.
 * It also handles collisions gracefully using separate chaining.
 */
class HashTable {
    /**
     * Creates a new HashTable instance.
     * Initializes the table with a fixed size of 127
     */
    constructor() {
        this.table = new Array(127); // Initialize the table
        this.size = 0; // Initialize the size of the table
    }

    /**
     * Custom hash function that converts a key into an index within the table.
     * @param {string} key - The key to be hashed.
     * @returns {number} - The index within the table for the given key.
     */
    hash(key) {
        let hash = 0;
        // Sum the ASCII values of all characters in the key
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        // Modulo operation to ensure the index stays within the bounds of the table size
        return hash % this.table.length;
    }

    /**
     * Inserts a new key-value pair into the hash table.
     * @param {string} key - The key for the new entry.
     * @param {any} value - The value associated with the key.
     */
    insert(key, value) {
        const index = this.hash(key);
        // If there's already a collision at the index, search within the collision list
        if (!this.table[index]) {
            this.table[index] = [];
        }

        // Check if the key already exists in the collision list
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                // Update the value if the key already exists
                this.table[index][i][1] = value;
                return;
            }
        }

        // If the key doesn't exist, add it to the collision list
        this.table[index].push([key, value]);
        // Increment the size of the table
        this.size++;
    }

    /**
     * Retrieves the value associated with a given key from the hash table.
     * @param {string} key - The key whose associated value is to be retrieved.
     * @returns {any} - The value associated with the given key, or undefined if the key doesn't exist.
     */
    get(key) {
        const index = this.hash(key);
        // If there's a collision at the index, search within the collision list
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1];
                }
            }
        }
        return undefined; // Key not found
    }

    /**
     * Deletes the key-value pair associated with a given key from the hash table.
     * @param {string} key - The key whose associated key-value pair is to be deleted.
     * @returns {boolean} - True if the key-value pair was successfully deleted, false otherwise.
     */
    delete(key) {
        const index = this.hash(key);
        // If there's a collision at the index, search within the collision list
        if (this.table[index] && this.table[index].length) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1); // Remove the key-value pair from the collision list
                    this.size--; // Decrement the size of the table
                    return true; // Deletion successful
                }
            }
        }
        return false; // Key not found or table[index] is empty
    }
}



// Function to run the test cases
function runTests() {
    const hashTable = new HashTable();

    // Test cases for insertion and retrieval
    hashTable.insert("key1", "value1");
    hashTable.insert("key2", "value2");
    hashTable.insert("key3", "value3");

    console.log("Test Case: Insertion and retrieval");
    console.log(hashTable.get("key1")); // Expected: "value1"
    console.log(hashTable.get("key2")); // Expected: "value2"
    console.log(hashTable.get("key3")); // Expected: "value3"

    // Test cases for deletion
    hashTable.delete("key2");
    console.log("\nTest Case: Deletion");
    console.log(hashTable.get("key2")); // Expected: undefined

    // Test cases for collision handling
    hashTable.insert("abcd", "value4");
    hashTable.insert("dcba", "value5");
    console.log("\nTest Case: Collision handling");
    console.log(hashTable.get("abcd")); // Expected: "value4"
    console.log(hashTable.get("dcba")); // Expected: "value5"
}

// Run the test cases
runTests();


/**
* Analysis 

* Hash Function
* The custom hash function iterates over each character in the key and computes the ASCII value for each character. Therefore, its time complexity is O(n), where n is the length of the key.

* Hash Table 
* Insertion: In the worst-case scenario, when there are many collisions, the time complexity of insertion is O(n), where n is the number of elements in the collision list. The space complexity of insertion is O(1) for each element inserted, plus O(n) if there are collisions and a new collision list needs to be created.
* Retrieval: In the worst-case scenario, when there are many collisions and all elements are in the same collision list, the time complexity of retrieval is O(n), where n is the number of elements in the collision list. The space complexity of retrieval is O(1) because it only requires a constant amount of additional memory.
* Deletion: Similar to retrieval, the time complexity of deletion is O(n) in the worst-case scenario. The space complexity of deletion is O(1) because it only requires a constant amount of additional memory.
*/
