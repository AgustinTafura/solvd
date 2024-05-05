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
function highlightKeywords(temp, keyw) {
    const regex = new RegExp(keyw.join("|"), "gi");
    return temp.replace(regex, match => `<span class='highlight'>${match}</span>`);
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
	console.log(strings, values)
	const lines = strings.split('\n');
	const numberedLines = lines.map((line, index) => `${index + 1} ${line}`);

	// Unir las líneas nuevamente en una sola cadena, preservando los saltos de línea
	return numberedLines.join('\n');
}