import { dir } from "console";
import path from "path";
import url from "url";

const filePath = "./dir1/dir2,text1.txt";

//basename()
console.log(path.basename(filePath));

//dirname()
console.log(path.dirname(filePath));

//basename()
console.log(path.extname(filePath));

//pars()
console.log(path.parse(filePath));

//file path name
const __filename = url.fileURLToPath(import.meta.url);
console.log("__filename:", __filename);

//file dir name
const __dirname = path.dirname(__filename);
console.log("__dirname: ", __dirname);

const filePath2 = path.join(__dirname, "dir1", "dir2", "text.txt");
console.log("filePath2: ", filePath2);

const filePath3 = path.resolve(__dirname, "dir1", "dir2", "text.txt");
console.log("filePath3: ", filePath3);
