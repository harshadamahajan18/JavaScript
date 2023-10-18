const user = {
    username: "harsha",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // {} empty object

// function chai(){
//     let username = "harsha"
    // console.log(this.username); // undefined
// }

// chai()

// const chai = function (){
//     let username = "harsha"
//     console.log(this.username); // undefined
// }

const chai = () => {
    let username = "harsha"
    console.log(this); // {} empty object
    console.log(this.username); // undefined
}

// chai()

// curly braces return keyword must
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicite return
// const addTwo = (num1, num2) => num1 + num2

// Parenthesys no return keyword
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "harsha"}) //  accessing values

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()