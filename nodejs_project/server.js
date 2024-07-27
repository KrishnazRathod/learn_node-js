import http from "http";
import dotenv from "dotenv";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();

// get current path
const __filename = fileURLToPath(import.meta.url);
console.log("__filename:", __filename);
const __dirname = path.dirname(__filename);
console.log("__dirname:", __dirname);

const PORT = process.env.PORT || 8030;

const server = http.createServer((req, res) => {
  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`<h1>Hello WOrld ;</h1>`);
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`<h1>Hello second worlds</h1>`);
      }
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/plain" });
    res.end(JSON.stringify({ message: "Server Error" }));
  }
  //   res.setHeader("Content-Type", "text/html");
});

server.listen(PORT, () => {
  console.log("server is running:");
});
