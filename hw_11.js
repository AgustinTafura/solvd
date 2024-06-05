function myJSONParse(jsonString) {
    // Remove white spaces
    jsonString = jsonString.trim();

    // Regular expressions for tokenizing JSON
    // This regex matches JSON key-value pairs where keys are strings and values can be of various types
    const regex = /"(\w+)":\s?(true|false|null|\d+(\.\d+)?|"[^"]*"|\[.*?\]|\{[^{}]*(?:(?:\{[^{}]*\})[^{}]*)*\})/gm;

    // Tokenize JSON string
    const tokens = jsonString.match(regex);
    const newObject = {}
    console.log(tokens)
    // Iterate through each token and parse it accordingly
    tokens?.forEach(token => {
        // Split the token into key and value
        const [key, value] = token.split(/:\s?(.*)/);
        // Clean the key by removing double quotes
        const cleanedKey = key.replace(/"/g, '');

        let cleanedValue;
        // Parse the value based on its type

        if (/^\{.*\}$/.test(value)) {
            // If the value is a nested object, recursively parse it
            try {
                cleanedValue = myJSONParse(value);
            } catch (e) {
                throw new Error(`Error parsing nested object: ${e.message}`);
            }
        } else if (/^\[.*\]$/.test(value)) {
            // If the value is an array, use the Function constructor to evaluate it
            try {
                cleanedValue = new Function(`return ${value};`)();
            } catch (e) {
                throw new Error('Error parsing array');
            }
        } else if (/^".*"$/.test(value)) {
            // If the value is a string, remove the surrounding double quotes
            cleanedValue = value.slice(1, -1);
        } else if (/^\d+(\.\d+)?$/.test(value)) {
            // If the value is a number, convert it to a number type
            cleanedValue = Number(value);
        } else if (/^(true|false)$/.test(value)) {
            // If the value is a boolean, convert it to a boolean type
            cleanedValue = value === 'true';
        } else if (value === 'null') {
            // If the value is null, set it to null
            cleanedValue = null;
        } else {
            throw new Error(`Unknown value type for key ${cleanedKey}`);
        }
        // Assign the cleaned key-value pair to the new object
        return newObject[cleanedKey] = cleanedValue
    });
    return newObject
}

// Test
const jsonString = '{"key1": "value1", "key2": [1, 2, 3], "key3": null, "key4": {"nestedKey1": "nestedValue1", "nestedKey2": [4,5,6], "nestedKey3": {"nestedKey33": [7,8,9]} , "nestedKey4": {"nestedKey44A": {"nestedKeyAAA": [10,11,12]},"nestedKey44B": {"nestedKeyBBB": "Hello world"}}}}'
const jsonObject = myJSONParse(jsonString);
console.log(jsonObject);

/**
* Reflection 

* Implementing a JSON parser using regular expressions was an insightful and challenging experience. 
* This task required a deep understanding of JSON syntax and the intricacies of regular expressions to effectively tokenize and parse JSON strings into JavaScript objects.

* One of the most significant challenges was dealing with nested objects and arrays. Regular expressions are inherently limited in their ability to handle recursive structures, which are common in JSON. Initially, simple regular expressions failed to capture nested objects correctly, resulting in incomplete or malformed parsing. 


* Overall, this project was a valuable learning experience in both regular expressions and JSON parsing.
*/