// Question # 01
/*Type Script, Virtual Studio Code, Node JS, & Git has already installed.*/
// Question # 02
var personName = "Bilal";
console.log("hi ".concat(personName, ",Would you like to learn some Typescript Today?"));
// Question # 03
var username = "Muhammad Bilal";
console.log(username.toLocaleLowerCase()); //for snake case / lower case
console.log(username.toUpperCase()); // for UPPER CASE
console.log(username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()); //First letter Cpaitalized Case For each Word
var a = username.charAt(0).toUpperCase() + username.slice(1, 9).toLowerCase();
var b = username.charAt(9).toUpperCase() + username.slice(10, 14).toLowerCase();
var result = a.concat("", b);
console.log(result); //Pascal Case
