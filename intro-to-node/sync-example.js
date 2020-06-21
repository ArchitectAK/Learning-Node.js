fs = require("fs");

data = fs.readdirSync("../");
console.log("data:", data);

console.log("this comes after");
