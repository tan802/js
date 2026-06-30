const name = "Tanisha-hc"
const repoCount = 50
//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Tanisha-hc-com')
console.log(gameName[0]);

console.log(gameName.__proto__);


//String functions

console.log(gameName.length);
console.log(gameName.toUpperCase());
//to find the character at that index
console.log(gameName.charAt(2));
//to find the index of a character
console.log(gameName.indexOf ('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString= gameName.slice(-5,4)
console.log(anotherString);

const myStringOne = "  tanisha  " 
console.log(myStringOne);
console.log(myStringOne.trim());

const url = "https://www.tanisha%20.com"
console.log(url.replace('%20','-'))

console.log(url.includes('tanisha'))
console.log(url.includes('prettry'))


