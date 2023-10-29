const express = require("express");
const userRoute = require("./routes/users.route");
const registerRoute = require("./routes/register.route");
const app = express();
const server_port = 3000;

app.use(express.urlencoded({extended: true }));
app.use("/api/users", userRoute);
app.use("/api/users",registerRoute);





app.get("/", (req, res) => {

    res.send("hello home");

});

app.use("*", (req, res) => {

    res.send("404");

});



app.listen(server_port, () => {

    console.log(`server is running on port: ${server_port}`);
    console.log(`http://localhost:${server_port}`);
});