// singleton => made by constructor
// Object.create 

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Harshada",
    "full name": "Harshada Mahajan",
    [mySym]: "mykey1",
    age: 18,
    location: "Pune",
    email: "harshada@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// This is very import how to acces objects

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "harshada@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "harshada@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());