const express = require("express");
const dotenv = require("dotenv");
const http = require("http");

//Load env variables
dotenv.config({ path: "./config/config.env" });
const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("Hello, world!");
    res.end("done!")
})
const app = express();
const PORT = process.env.PORT || 5000;
server.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on ${PORT}`));