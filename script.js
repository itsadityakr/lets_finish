const express = require("express");
const app = express();

// Regular middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Homepage - works fine
app.get("/", (req, res) => {
    res.send("Homepage - Everything is OK!");
});

// Force error - demonstrates error handling
app.get("/error", (req, res, next) => {
    next(new Error("This is a forced error"));
});

// Validation error
app.get("/user/:id", (req, res, next) => {
    const id = req.params.id;

    if (id.length < 3) {
        const error = new Error("User ID must be at least 3 characters");
        error.status = 400;
        return next(error);
    }

    res.send(`User ID: ${id}`);
});

// Async error
app.get("/async", async (req, res, next) => {
    try {
        // Simulate async operation
        await new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error("Async operation failed")), 1000);
        });
    } catch (err) {
        next(err);
    }
});

// 404 handler - must be after all routes
app.use((req, res, next) => {
    const error = new Error("Page not found");
    error.status = 404;
    next(error);
});

// Error handler - must be last
app.use((err, req, res, next) => {
    console.error("Error occurred:");
    console.error(err.stack);

    const status = err.status || 500;
    const message = err.message || "Something went wrong!";

    res.status(status).send(`
        <h1>Error ${status}</h1>
        <p>${message}</p>
    `);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
