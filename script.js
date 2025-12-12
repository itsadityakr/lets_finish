const express = require("express");
// import express module from node_modules

const app = express();
// apll express powers comes in app variable
// express is  a function

// app.get(route, requestHandler);
// route => "/"
// requestHandler => function(req,res){}


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

// > node script.js
// > Server is running on http://localhost:3000

// at : http://localhost:3000/
// Hello World
