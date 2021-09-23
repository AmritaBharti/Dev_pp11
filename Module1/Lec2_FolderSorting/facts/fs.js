//fs =>file System
const fs = require("fs"); //fs ka object
//console.log(fs);
let f1KaData = fs.readFileSync("./f1.txt","utf-8");
console.log(f1KaData + "");
fs.writeFileSync("./index.txt","file will be created and this data will be placed");
fs.writeFileSync("../activity/ab.js","file will be created in activity folder");
