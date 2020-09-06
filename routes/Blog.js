const express = require("express");
const path = require("path");

// * NPM packages
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

// * Models
const Blogs = require("../models/Blog");

// * Controllers
const {
  addBlog,
  getAllBlogs,
  getBlogById,
  deleteBlogById,
  updateBlogById,
  likeBlogById,
} = require("../controllers/Blog");

// * Middleware
const { emailVerifiedPatient } = require("../middleware/patient");
const advancedResults = require("../middleware/advancedResults");

// * Multer Config
const storage = multer.diskStorage({
  destination: path.resolve(
    __dirname,
    "../../client/public/uploads/blog_images"
  ),
  filename: function (req, file, callback) {
    callback(null, "Blog_" + uuidv4() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("photo");

function checkFileType(file, cb) {
  // Make sure that the image is a photo
  if (!file.mimetype.startsWith("image")) {
    // return next(new ErrorResponse(`Please upload an image file`, 400));
    return cb("Error: Invalid file type.");
  }
  //Make sure the image is less than 4mb
  else if (file.size > 4000000) {
    return cb("Error: Invalid file size.");
  } else {
    return cb(null, true);
  }
}
// * API Endpoints -->
const router = express.Router();

// * Create a new Blog
// * Done
router.route("/add").post([emailVerifiedPatient, upload], addBlog);

// * Get all Blogs
// * Done
router.route("/view-all").get(advancedResults(Blogs), getAllBlogs);

// * Get single Blog
// * Done
router.route("/view/:id").get(getBlogById);

// * Delete a blog
// * Done
router.route("/delete/:id").delete([emailVerifiedPatient], deleteBlogById);

// * Edit Blog
// * Done
router.route("/update/:id").put([emailVerifiedPatient, upload], updateBlogById);

// * Like a blog
// TODO
router.route("/like/:id").put(emailVerifiedPatient, likeBlogById);

// * API Endpoints End -->
module.exports = router;
