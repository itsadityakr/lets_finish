const express = require("express");
const app = express();

// Middleware 1: Log all requests
app.use((req, res, next) => {
    console.log("Request received at:", new Date());
    next();
});

// Middleware 2: Check time of day
app.use((req, res, next) => {
    const hour = new Date().getHours();
    if (hour < 9 || hour > 17) {
        res.send("Sorry, we are closed!");
    } else {
        next();
    }
});

// Route: Homepage
app.get("/", (req, res) => {
    res.send("Welcome to our website!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
