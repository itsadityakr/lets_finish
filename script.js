// File System Module in Node.js

const fs = require(`fs`); // CJS Module System
// import fs from 'fs'; // ESM Module System

// write
// appendFile
// copyFile
// rename
// readFile
// unlink

fs.writeFile(`example.txt`, `Hello, World!`, (err) => {
    if (err) throw err;
    console.log(`File created successfully!`);
});
// callback function is called when the file is created successfully or an error occurs
// fs.writeFile(file, data[, options], callback)

// To run type
// Terminal Command
// node script.js

fs.appendFile(`example.txt`, `I am Good, World!`, (err) => {
    if (err) throw err;
    console.log(`File Updated successfully!`);
});
// Appends the specified content to the end of the file

fs.rename(`example.txt`, `newExample.txt`, (err) => {
    if (err) throw err;
    console.log(`File Renamed successfully!`);
});
// renames the specified file to a new name

fs.copyFile(`newExample.txt`, `copyOfExample.txt`, (err) => {
    if (err) console.error(err.message);
    console.log(`File Copied successfully!`);
});
// copies the specified file to a new file
// if you want onnly the error message then use err.message

fs.unlink(`copyOfExample.txt`, (err) => {
    if (err) throw err;
    console.log(`File Deleted successfully!`);
});

fs.rm(`newExample.txt`, (err) => {
    if (err) throw err;
    console.log(`File Removed successfully!`);
});
// deletes the specified File

fs.readFile(`example.txt`, `utf-8`, (err, data) => {
    if (err) throw err;
    console.log(`File Read successfully!`);
    console.log(data);
});
// reads the content of the specified file
// utf-8 is used to specify the encoding of the File

fs.rm(`./copy/`, { recursive: true }, (err) => {
    if (err) throw err;
    console.log(`Directory Removed successfully!`);
});

// Removes the specified Directory
// recursive: true is used to remove non-empty directories else it can only erase empty directories
