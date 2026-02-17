// https is a build in module provides security

const http = require("http")
const fs = require("fs")
const server = http.createServer((request, response) => {
//     console.log(request);
//     response.end("Home world!!");

        const requestURL = request.url;
        console.log(requestURL);

        const requestMethod = request.method;
        console.log(requestMethod);

        const logContent = `URL: ${requestURL} | Method: ${requestMethod}`
        fs.writeFile("logs.txt", logContent, () => {});

        if(requestURL === "/"){
            response.end("Hello world");
        }
        if(requestURL === "/home"){
            response.end("Home Content");
        }
        if(requestURL === "/about"){
            response.end("About Content");
        }
});

server.listen(3000);
