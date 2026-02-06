// import fs from "fs";
// import path from "path";

// fs.writeFileSync("demo.txt", "Hello, this is written using writeFileSync\n");

// fs.appendFileSync("demo.txt", "This line is added using appendFileSync\n");

// const data = fs.readFileSync("demo.txt", "utf-8");

// console.log(data);


// const filePath = "C:\\Users\\Abhishek Singh\\Downloads\\Cloud Assign 2 .pdf";

// const dynamicPath = path.join("C:","Users","Abhishek Singh","Downloads","Cloud Assign 2.pdf");
// console.log("Dyanmic Path",dynamicPath);
// fs.readFile(filePath,"utf-8",(err,data)=>{
//     console.log(data);
// });

//---------------------------------------------------------------------------------------------------------------------------

// const {addd,multii} = require("./utils")
// // const functions = require("./utils")
// // const multi = require("./utils")

// functions = {
//     addd,
//     multii
// }
// const {addd,multii} = functions;

// // console.log(functions['add'](1,3));
// // console.log(functions['multi'](6,5));


// console.log(addd(1,3));
// console.log(multii(6,5));

// Q) functions declare then export want to write our own function & declare it, and how to export it , how to import .

const { isEven, square } = require("./utils");

console.log(isEven(10));   
console.log(isEven(7));    

console.log(square(5));    
console.log(square(9));    

