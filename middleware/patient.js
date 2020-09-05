exports.loginPatient = function (req, res, next) {
  if (req.user && req.user.role === "patient") {
    console.log("Patient is logined.");
    next();
  } else {
    res.status(400).send("Kindly Logined to continue.");
  }
};

exports.emailVerifiedPatient = function (req, res, next) {
  if (req.user && req.user.role === "patient" && req.user.emailProp.verified) {
    console.log("Patient's email is verified.");
    next();
  } else {
    res.status(400).send("Please verify your email to continue.");
  }
};
