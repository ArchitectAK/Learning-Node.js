var fs = require("fs");

var data = {
  name: "Ankit Kumar",
};

fs.writeFile("data.json", JSON.stringify(data), () => console.log("success"));
