//primitive data type(Call by value)
//7 types : String , Number, Boolean , null , undefined,Symbol,     BigInt




const score = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol ('123')
console.log(id==anotherId)

const bigNumber = 354839627389322898809000n
//Reference(Non primitive)
//Array, Objects ,Functions

const heros = ["spiderman", "doga","fairy"];
let myObj = {               //objects are in curly bracets
    name : "Tanisha",
    age: 21,
}


const myFunction = function(){
console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp );
console.log(typeof myFunction);