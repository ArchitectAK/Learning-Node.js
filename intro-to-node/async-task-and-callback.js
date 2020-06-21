fs = require("fs");

function getData(err, data) {
  console.log("data:", data);
}
fs.readdir("../", getData);

console.log("this comes after");
