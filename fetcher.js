const args = process.argv;
let url = args[2];
const filepath = args[3];
if (!url.includes("http://")) {
  url = "http://" + url;
};
console.log(url)
console.log(filepath)

// Require the fs library and want to store it in fs variable
// fs is available globally, not needed to dl each time, installing node gives you access to fs
const fs = require('fs')

// request is found inside node_modules (to the left)
// request & fs are additional libraries inside node
// reqire("request") < I want access to the request library, store it in request const
const request = require("request");
request(url, function (error, response, body) {
  fs.writeFile(filepath, body, err => {
    if (err) {
      console.error(err)
      return
    } else {
      console.log("Downloaded and saved " + body.length + " bytes to: " + filepath);
    }}) 
});



const content = 'Some content!'

// ./ means inside this folder ||| ../ means up one level (relative path);
// next line tells node to write content to index.js
// callback and if are to return an err message if error occurs during dl
// fs.writeFile('./index.js', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //file written successfully
// })