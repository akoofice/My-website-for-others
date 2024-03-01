// index.js
const fs = require('fs');

// Read the content of a file
fs.readFile('filename.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Write content to a new file
const content = 'Hello, this is some content to be written to a file.';
fs.writeFile('newfile.txt', content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Content has been written to newfile.txt');
});
