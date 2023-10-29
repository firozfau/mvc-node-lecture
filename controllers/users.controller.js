const path = require("path");
const user_data = require("../models/users.model");


exports.loginForm = (req, res) => {
      res.statusCode=200;
    res.sendFile(path.join(__dirname + "/../views/login.html"));
      
}

exports.saveLoginData = (req, res) => {
   
   const name = req.body.name;
    const age = Number(req.body.age);
    const users = {
        name,age
    }

    user_data.push(users);
    res.status(200).json({ success: true, user_data });


}

exports.register = (req, res) => {
      res.statusCode=200;
    res.sendFile(path.join(__dirname + "/../views/register.html"));
      
}

exports.saveRegisterData = (req, res) => {
   
   const name = req.body.name;
    const age = Number(req.body.age);
    const users = {
        name,age
    }

    user_data.push(users);
    res.status(200).json({ success: true, user_data });


}