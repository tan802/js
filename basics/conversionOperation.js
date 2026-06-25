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