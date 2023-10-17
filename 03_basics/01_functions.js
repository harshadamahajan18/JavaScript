
function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("A");
}
// sayMyName // function reference
// sayMyName() // function execution

// function addTwoNumbers(number1, number2){ // parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){ 

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 4) // 7
// console.log("Result: ", result);

// Extra:-
// addTwoNumbers(3, "a") // 3a
// addTwoNumbers(3, "4") // 34
// addTwoNumbers(3, null) // 3  // arguments

function loginUserMessage(username = "sam"){
      if(!username){
        // console.log("Please enter a username");
        return 
      }
    return `${username} just logged in`
}

// console.log(loginUserMessage("harsha"));// override gives harsha
// console.log(loginUserMessage()); // gives sam

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "harsha",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "varsha",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));