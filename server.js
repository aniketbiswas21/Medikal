// * NPM Packages
const express = require("express");
require("dotenv").config();
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// * Config
const connectDB = require("./config/db");
require("./config/passportPatient")(passport);

// * Routes
const patient = require("./routes/Patient");
const blog = require("./routes/Blog");

const app = express();

// * Middleware
app.use(express.json());

// Passport Config -->
app.use(
  session({
    secret: process.env.COOKIE_SECRET_KEY,
    resave: true,
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

// * API End -->

// * Connect to database
connectDB();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server started on Port ${PORT}`));

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});
