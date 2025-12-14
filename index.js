import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/user/aditya", (req, res) => {
    res.send("This is aditya");
});
//this is a route to http://localhost:3000/user/aditya now what if we want to make it dynamic
//this http://localhost:3000/user/jatin should also work but no we have hardcoded aditya
//to make it dynamic we use route parameters

app.get("/user/:username", (req, res) => {
    const { username } = req.params;
    res.send(`This is ${username}`);
});
// this way we can make dynamic routes using route parameters
// now if we go to http://localhost:3000/user/jatin it will show This is jatin
// this is becuase we have used :username as a placeholder for any username
// also we can have multiple route parameters

app.get("/user/:username/post/:postId", (req, res) => {
    const { username, postId } = req.params;
    res.send(req.params);
});

// now if we go to http://localhost:3000/user/jatin/post/123 it will show This is post 123 by user jatin

// {
//   "username": "jatin",
//   "postId": "123"
// }

// this is becuase afgter using : the the value is stored in req.params object and also we can use like request.params.username to get specific value
// note that route parameters are always strings if you want to use them as numbers you have to convert them using parseInt or Number function
// also route parameters are case sensitive /user/Aditya and /user/aditya are different routes
// also route parameters can have special characters /user/jatin_doe and /user/jatin-doe are different routes
// also route parameters can be optional by using ? after the parameter name

app.get("/user/:username?/post/:postId?", (req, res) => {
    res.send(req.params);
});
// now if we go to http://localhost:3000/user/jatin it will show {"username":"jatin"}
// and if we go to http://localhost:3000/user/jatin/post it will show {"username":"jatin"}
// and if we go to http://localhost:3000/user/jatin/post/123 it will show {"username":"jatin","postId":"123"}
// and if we go to http://localhost:3000/user/ it will show {}
// and if we go to http://localhost:3000/user/post/ it will show {"postId":""}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
