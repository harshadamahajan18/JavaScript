// const tinderUser = new Object() // singleton object
const tinderUser = {} // Non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false 


// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "harshada",
            lastname: "mahajan"
        }
    }
}

// console.log(regularUser.fullname); // { userfullname: { firstname: 'harshada', lastname: 'mahajan' } }
// console.log(regularUser.fullname.userfullname); // { firstname: 'harshada', lastname: 'mahajan' }
// console.log(regularUser.fullname.userfullname.firstname); // harshada

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// This is important
// console.log(Object.keys(tinderUser)); 
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

// console.log(tinderUser.hasOwnProperty('isLogged')); // false

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "harshada"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// This is json syntax
// {
//     "name": "harshada",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]