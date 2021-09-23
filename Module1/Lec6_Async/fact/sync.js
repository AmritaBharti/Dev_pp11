const fs = require("fs");
console.log("start");

let f1KaContent = fs.readFileSync(".f1.txt");//100 file // stack will run this and it will take time 
console.log(f1KaContent+"");
console.log("end");///because of stack involment down code will not run up to whenup work will finish