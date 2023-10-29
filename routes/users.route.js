const express = require("express");
const router = express.Router();

const { loginForm ,saveLoginData} = require("../controllers/users.controller");
 

 

router.get("/login", loginForm);

router.post("/login",saveLoginData);



module.exports = router;