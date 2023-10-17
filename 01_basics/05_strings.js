const name = "harshada"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('harshada-hm-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // r
console.log(gameName.indexOf('r')); // 2

// Read mdn doc for string methods and make notes

const newString = gameName.substring(0, 4)
console.log(newString); // hars excluding 4

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString1 = "    harshada     "
console.log(newString1); //         harshada
console.log(newString1.trim()); // harshada

const url = "https://harshada.com/harshada%20mahajan"

console.log(url.replace('%20', '-')); // https://harshada.com/harshada-mahajan

console.log(url.includes('harshada')); // true

console.log(url.includes('vaisha')); // false

console.log(gameName.split('-'));
