const express = require("express");
const router = express.Router();

const { register ,saveRegisterData} = require("../controllers/users.controller");
 

 

router.get("/register", register);

router.post("/register",saveRegisterData);



module.exports = router;