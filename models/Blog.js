const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a Blog Title"],
    minlength: 5,
    maxlength: 100,
  },
  content: {
    type: String,
    required: [true, "Please add Blog Content"],
    minlength: [500, "Please add atleast 500 words to post a blog"],
    maxlength: [5000, "Please keep your content within 5000 words"],
  },
  photo: {
    type: String,
    default: null,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User", //TODO Multiple refs
    required: true,
  },
  postedOn: {
    type: Date,
    default: new Date(),
  },
});

// Delete corresponding photo to blog that will be deleted
BlogSchema.post("remove", async (blog, next) => {
  fs.unlink(
    path.resolve(
      __dirname,
      `../../client/public/uploads/blog_images/${blog.photo}`
    ),
    (err) => console.log(err)
  );
  next();
});

// Delete corresponding previous photo to blog that will be updated
BlogSchema.pre("update", async (blog, next) => {
  console.log(blog.photo, "yaay");
  fs.unlink(
    path.resolve(
      __dirname,
      `../../client/public/uploads/blog_images/${blog.photo}`
    ),
    (err) => console.log(err)
  );
  next();
});

module.exports = mongoose.model("Blog", BlogSchema);
