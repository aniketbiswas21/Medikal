// * NPM Packages
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/.env" });
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// * Config
const connectDB = require("./config/db");
require("./config/passportPatient")(passport);
require("./config/passportOrganisation")(passport);

// * Routes
const patient = require("./routes/Patient");
const blog = require("./routes/Blog");
const doctor = require("./routes/Doctor");
const organisation = require("./routes/Organisation");
const chat = require("./routes/Chat");
const booking = require("./routes/Booking");

const app = express();

// * Middleware
app.use(express.json());

// * set up session Store
const sessionStore = new session.MemoryStore();
// Passport Config -->
app.use(
  session({
    secret: process.env.COOKIE_SECRET_KEY,
    resave: true,
    store: sessionStore,
    saveUninitialized: true,
  })
);
app.use(cookieParser(process.env.COOKIE_SECRET_KEY));
app.use(passport.initialize());
app.use(passport.session());
// -->

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// * API -->
app.use("/api/patient", patient);
app.use("/api/blog", blog);
app.use("/api/doctor", doctor);
app.use("/api/organisation", organisation);
app.use("/api/chat", chat);
app.use("/api/booking", booking);
// * API End -->

// * Connect to database
connectDB();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server started on Port ${PORT}`));

const io = require("socket.io")(server); // Change

// * Socket for video call
io.on("connection", (socket) => {
  // * Socket for chats
  require("./config/chatSetup")(
    io,
    socket,
    passport,
    cookieParser,
    sessionStore
  );

  socket.on("let_me_in", (roomId, userId) => {
    console.log("let me in", userId);
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("i_am_here", userId);

    socket.on("disconnect", () => {
      console.log("disconnect");
      socket.to(roomId).broadcast.emit("bye_bye", userId);
    });
  });
});
// * -->

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});
