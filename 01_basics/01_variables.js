const accountId = 144553
let accountEmail = "harshada@google.com"
var acccountPassword = "12345"
accountCity = "Pune"
let accountState; // It gives undefined value in output

// accountId = 2   // not allowed

/* NOTES:-
   1. we used const and let in modern javascript.
   2. Prefer not to use var because of issue in block scope and
   functional scope.
*/

accountEmail = "hm@hm.com"
acccountPassword = "21212121"
accountCity = "Jaipur"

console.log(accountId);
console.table([accountId,accountEmail, acccountPassword, accountCity, accountState])
