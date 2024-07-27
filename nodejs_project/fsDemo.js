// import fs from "fs";
import fs from "fs/promises";

// readFile() =- callback
// fs.readFile("./text.txt", "utf8", (err, data) => {
//   if (err) throw err;
// });

// readFileSync() = Synchronous version
// const data = fs.readFileSync("./text.txt", "utf8");
// console.log("data: sybnchronous", data);

// const data = fs.readFileSync("./text.txt", "utf8");
// console.log("data: sybnchronous", data);

// readFileSync() = Promise version
// fs.readFile("./text.txt", "utf8")
//   .then((data) => console.log("data:", data))
//   .catch((err) => console.log("err:", err));

// writeFile
const writeFile = async () => {
  try {
    await fs.writeFile("./text.txt", "Hello from write file");
    console.log("file written");
  } catch (error) {
    console.log("error:", error);
  }
};

// readFile() = async await
const readFile = async () => {
  try {
    await fs.readFile("./text.txt", "utf8");
    console.log("file read");
  } catch (error) {
    console.log("error:", error);
  }
};

// appendFIle() = async await
const appendFile = async () => {
  try {
    await fs.appendFile("./text.txt", "\nappende file text");
    console.log("file append");
  } catch (error) {
    console.log("error:", error);
  }
};
writeFile();
appendFile();
readFile();
