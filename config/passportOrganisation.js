const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

// * Models
const Organisation = require("../models/Organisation");

module.exports = function (passport) {
  passport.use(
    "organisationLogin",
    new LocalStrategy(async (username, password, done) => {
      let user = null;

      // Check if username is email
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username)) {
        user = await Organisation.findOne({
          email: username,
        }).exec();
      } else {
        return done(null, false, {
          message: "Please enter a valid email",
        });
      }

      if (!user) return done(null, false, { message: "Invalid Credentials." });

      // Match Password
      const result = await bcrypt.compare(password, user.password);
      if (result) return done(null, user, { message: "Login Successfull." });
      else return done(null, false, { message: "Invalid Credentials." });
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    Organisation.findById(id).exec((err, user) => {
      done(err, user);
    });
  });
};
