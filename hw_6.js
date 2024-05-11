const translations = {
	en: {
		greet: "Hello",
		intro: "Welcome to our website"
	},
	fr: {
		greet: "Bonjour",
		intro: "Bienvenue sur notre site web"
	}
};


const language = "fr"; 
const greeting = "greet";
const introduction = "intro";

const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;

console.log(localizedGreeting); 
console.log(localizedIntroduction); 

function localize(strings, ...values) {
	const translation = translations[language];
    let result = "";
	strings.forEach((string, i) => {
		result += string + (values[i] ? translation[values[i]] : "");
	});
	
	return result;
}

//Task 2
function highlightKeywords(template, keywords) {
    return template.replace(/\${(\d)}/g, (_, index) => {
        const keywordIndex = parseInt(index);
        const keyword = keywords[keywordIndex];
        console.log(111, _, index, keywordIndex, keyword)
        return `<span class='highlight'>${keyword}</span>`;
    });
}

const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);


//Task 3
const code = multiline`
function add(a, b) {
return a + b;
}
`;

console.log(code);

function multiline(strings, ...values) {
	const result = strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');
	const lines = result.split('\n');
	lines[0] === '' && lines.shift();
	lines[lines.length - 1] === '' && lines.pop();
	const numberedLines = lines.map((line, index) => `${index + 1} ${line}`);
	return numberedLines.join('\n');
}

// task 4
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        const context = this;
        
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

function debouncedSearch(query) {
	console.log("Searching for:", query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 300);

const inputElement = document.getElementById("search-input");
inputElement.addEventListener("input", event => {
	debouncedSearchHandler(event.target.value);
});


//task 5
function throttle(func, interval) {
    let lastExecutionTime = 0;
    
    return function(...args) {
        const now = Date.now();
        
        if (now - lastExecutionTime >= interval) {
            func.apply(this, args);
            lastExecutionTime = now;
        }
    };
}

function onScroll(event) {
    console.log("Event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);


// task 6
function curry(func, arity) {

    function curried(...args) {
        if (args.length >= arity) {
            return func(...args);
        } else {
            return (...moreArgs) => curried(...args, ...moreArgs);
        }
    }
    
    return curried;
}

function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiply, 3);

const step1 = curriedMultiply(2);
const step2 = step1(3);
const result = step2(4);

console.log("Result:", result);
