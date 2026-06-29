let score = 33

//const {score} = req.body

console.log(typeof score);
console.log(typeof (score));

let score1 = "tan"
//const {score} = req.body

console.log(typeof score1);
console.log(typeof (score1));


let valueInNumber = Number(score1 )
console.log(typeof valueInNumber);
console.log(valueInNumber);
 
//"33" => 33
//"33abc"= NaN
//null => 0
// underfined =  NaN
//true => 1 ; false => 0

let isLoggedIn = "tan"
let booleanIsLoggedIn = Boolean(isLoggedIn) 
console.log (booleanIsLoggedIn);

// 1 => true ; false => 0
// "" => false
// "tan" => true

let someNumber = 33;
let stringNumber = String (someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


//******** Operations  ********

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%2);

let str1 = "hello"
let str2 = " Tanisha"
let str3 = str1 + str2
console.log(str3);


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);//if the string is 1st then everything else is alsoe considred a string
console.log(1 + 2 + "2"); //here number is 1st so evrything else is also a no.

console.log((3+4)*5%3);

console.log(+true);
console.log(+"");

let num1,num2,num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);




