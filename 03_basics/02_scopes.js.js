// var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "harsha"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "harsha"
    if(username === "harsha"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ***************** Interesting ****************
console.log(addone(5)); // 6 can access before declaration

function addone(num){
    return num + 1
}


addTwo(5) // gives error can not access before declaration

const addTwo = function(num){
    return num + 2
}
