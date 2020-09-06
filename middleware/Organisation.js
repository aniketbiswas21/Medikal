exports.loginDoctor = function (req, res, next) {
  if (req.user && req.user.role === "org") {
    next();
  } else {
    res.status(400).send("Kindly Login to continue.");
  }
};
