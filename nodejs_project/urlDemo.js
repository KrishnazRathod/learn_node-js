import url from "url";
const urlString = "https://www.google.com/search?q=hello+world";

//urlObject
const urlObject = new URL(urlString);
console.log("urlObject:", urlObject);

//fomat
console.log("urlObject:", url.format(urlObject));

//import .meta.url - file usl
console.log("meta:", import.meta.url);

//fileURL to path
console.log("file to path:", url.fileURLToPath(import.meta.url));

console.log("seach key value ---", urlObject.search);

const params = new URLSearchParams(urlObject.search);
console.log("params: ", params.get("q"));
params.append("limil", "10");
console.log("params: ", params);
params.delete("limil");
console.log("params: ", params);
