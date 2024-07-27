import crypto from "crypto";

//creat hasg
const hash = crypto.createHash("sha256");
hash.update("password3r837948");
console.log("hash: ", hash.digest("hex"));

//random bytes
crypto.randomBytes(5, (err, buf) => {
  if (err) throw err;
  console.log("buf: ", buf.toString("hex"));
});
