//singleton - 1 object 
//constructor make singleton, literals-no singleton
// Object.create is used for singleton
//object literals

const mySym = Symbol("key1")

const JsUser = {

    name: "Tanisha",
    "full name" : "Tanisha Debnath",
    age : 18,
    [mySym]: "mykey1",
    location: "Jaipur",
    email: "tanisha@google.com",
    isLoggedIn: false,
    lastLoginDate: ["Monday", "Tuesday"]


}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "tanisha@123.com"
//Object.freeze(JsUser)
JsUser.email = "tanisha@12345.com"

console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingtwo = function (){
    console.log(`Hello JS user Two ${this.name}`)
}


console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());



