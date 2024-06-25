let pattern1 = /hello/;
let str1 = "hello world";

let result1 = pattern1.test(str1);
console.log(" pattern.test(str)", result1); // Salida: true

let pattern2 = /world/;
let str2 = "hello world";

let result2 = pattern2.exec(str2);
console.log("pattern.exec(str)", result2); // Salida: ["world", index: 6, input: "hello world"]

let str3 = "The quick brown fox jumps over the lazy dog.";
let matches = str3.match(/the/gi);
//g global, i insensitive case
console.log("str3.match(/the/gi)",matches); // Salida: ["The", "the"]

let str4 = "Hello world! This is a test string.";
let regex4 = /[a-zA-Z]+/g;

let matches4 = str4.matchAll(regex4);

for (let match of matches4) {
    console.log("loop de str4.matchAll(regex4)", match);
}

let str5 = "The quick brown fox jumps over the lazy dog";
let pattern5 = /brown/;

let result5 = str5.search(pattern5);
console.log("str5.search(pattern5)",result5); 


let str6 = "Hello, World!";
let newStr6 = str6.replace(/o/g, "0");

console.log("str6.replace(/o/g, '0')",newStr6)

let str7 = "apple,banana,apple,grape";
let newStr7 = str7.replaceAll("apple", "orange");
// sin la necesidad de un argumento global (g).
console.log("str7.replaceAll('apple', 'orange')",newStr7);

let str8 = "apple,banana,grape";
let arr8 = str8.split(/,/);
console.log("str8.split(/,/)",arr8); // Salida: ["apple", "banana", "grape"]

let isValid = /^\d\d:\d\d$/.test('10:01');
console.log(isValid); // Salida: true

let matches2 = '10:01 10:27'.match(/\d\d:\d\d/gi);
console.log("patron", matches2); 

let patternA = /\bword\b/;
let patternB = /word/;
console.log(patternA.test("This is a word.")); // Salida: true
console.log(patternA.test("This is wording.")); // Salida: false (no coincide con "wording")
console.log(patternB.test("This is wording")); // Salida: True
//\bword\b coincide con la palabra "word" en la cadena, pero no sub-cadenas como "wording" o "swordfish".
// \b\d+\b coincide con números enteros en la cadena, pero no incluye caracteres no-numéricos adyacentes a los números.
// ^\bword\b$ coincide con una cadena que consiste solamente de la palabra "word".

let str9 = "The meeting is scheduled for 10:30 AM and ends at 2 PM";
let re9 = /\d{2,4}/g; // Coincide con números de 2 a 4 dígitos

let result9 = str9.match(re9);
console.log(result9); // Salida: [ '10', '30' ]

let str10 = 'The price of the item is $2500';
let re10 = /\d{2,}/g; // Coincide con números con 2 o más dígitos

let result10 = str10.match(re10);
console.log(result10); // Salida: ["2500"]

let str11 = 'The sky is blue in color, but the ocean is blue in colour';
let result11 = str11.match(/colou?r/g); // Coincide con "color" y "colour"
// Es equivalente a {0,1}
console.log(result11); // Salida: ["color", "colour"]

let str12 = 'Computer science is fascinating, but computational engineering is equally interesting';
let re12 = /comput\w*/g; // Coincide con "computer" y "computational"
// Es equivalente a {0,}.
let results12 = str12.match(re12);

console.log(results12); // Salida: ["computer", "computational"]

let regexp13 = /".+"/g;
let str13 = 'The "Boy" and his "Friends" were here';
//recorre tood y luego regresa para encontrar el ultimo "
console.log( str13.match(regexp13) ); // "Boy" and his "Friends"

let regexp14 = /".+?"/g;
let str14 = 'The "Boy" and his "Friends" were here';
// recorre desde que encuntra el primer " hasta el siguiente" y para
console.log( str14.match(regexp14) ); // "Boy" "Friends"

let str15 = 'The quick brown fox jumps over the lazy dog.';
let re15 = /[aeiou]/g;
let results15 = str15.match(re15);
console.log(results15); // Salida: ['e', 'u', 'i', 'o', 'o', 'u', 'o', 'e', 'e', 'a', 'o']