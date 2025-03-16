const express = require("express");

const createSubscriber = require("../controllers/Subscriber.controller");


const router = express.Router();

router.post("/", createSubscriber);


module.exports = router;
