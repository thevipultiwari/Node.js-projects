const { log } = require("console");
const fs = require("fs");

//write file
// fs.writeFile("new2.txt", "new data", (err) => {
//   if (err) console.log(err);
//   else console.log("new2 data");
// });

//append file
// fs.appendFile("new2.txt", " main to accha hu", (err) => {
//   if (err) console.log(err);
//   else console.log("done");
// });

// rename file
// fs.rename("new.txt", "hello.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("changed file name");
// });

// copy file
// fs.copyFile("new2.txt", "hello.txt", (err) => {
//   if (err) console.log(err.message);
//   else console.log("done");
// });

//unlink file
// fs.unlink("hello.txt", (err) => {
//      if (err) console.log(err.message);
//   else console.log("done");
// })

// fs.writeFile("./copy/hello.txt", "sab changa si", (err) => {
//   if (err) console.log(err);
//   else console.log("done");
// });

// fs.unlink("./copy/hello.txt", (err) => {
//     if (err) console.log(err);
//     else console.log("file deleted");

// })

// delete empty folder  rmdir//rm
// fs.rmdir("./copy", (err) => {
//     if (err) console.log(err);
//     else console.log("empty folder deleted");
// })

// fs.rm("./copy", { recursive: true }, (err) => {
//   if (err) console.log(err);
//   else console.log("unempty folder deleted");
// });

// read file
fs.readFile("new2.txt","utf-8", (err, data) => {
  if (err) throw err;
  else console.log(data);
});
