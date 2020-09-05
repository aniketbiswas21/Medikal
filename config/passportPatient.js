const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

// * Models
const Patient = require("../models/Patient");

module.exports = function (passport) {
  passport.use(
    "patientLogin",
    new LocalStrategy(async (username, password, done) => {
      let user = null;

      // Check if username is email
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username)) {
        user = await Patient.findOne({ "emailProp.email": username }).exec();
      }
      // Check if username is phoneNo
      else if (/[6-9]{1}[0-9]{9}/.test(username)) {
        user = await Patient.findOne({ contactNo: username }).exec();
      } else {
        return done(null, false, {
          message: "Please enter a valid email or phone number.",
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
    Patient.findById(id).exec((err, user) => {
      done(err, user);
    });
  });
};
