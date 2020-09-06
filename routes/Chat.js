const express = require("express");

// * Controllers
const chat = require("../controllers/Chat");

// * Middleware

// * API Endpoints -->
const router = express.Router();

//* get all chats between two users
//! check login
router.get("/all/:id", chat.getMessages);

// * API Endpoint end -->

module.exports = router;
