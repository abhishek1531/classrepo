import fs from "fs";

// 1️⃣ WRITE (overwrite / create)
fs.writeFileSync("demo.txt", "Hello, this is written using writeFileSync\n");

// 2️⃣ APPEND (add at end)
fs.appendFileSync("demo.txt", "This line is added using appendFileSync\n");

// 3️⃣ READ (read file content)
const data = fs.readFileSync("demo.txt", "utf-8");

console.log(data);
