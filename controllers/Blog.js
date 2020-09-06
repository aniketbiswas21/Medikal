// * Utils
const asyncHandler = require("../middleware/async");
const validationSchema = require("../validationSchemas/Blog");

// * Models
const Blog = require("../models/Blog");

// @desc     Add a Blog
// @route    POST /api/blog/add
// @access   Private
exports.addBlog = asyncHandler(async (req, res) => {
  try {
    const { value, error } = validationSchema.createBlog(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //Only add photo if it exists
    if (req.file) {
      value.photo = req.file.filename;
    }
    value.postedBy = req.user._id;
    const blog = await Blog.create(value);
    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
});

// @desc     Get all Blogs
// @route    GET /api/blog/view-all
// @access   Public
exports.getAllBlogs = asyncHandler(async (req, res) => {
  try {
    res.status(200).json(res.advancedResults);
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
});

// @desc     Get a single blog
// @route    GET /api/blog/view/:id
// @access   Public
exports.getBlogById = asyncHandler(async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).exec();
    if (blog) {
      const data = {
        blog,
        totalLikes: blog.likes.length,
      };
      res.status(200).json({
        success: true,
        data,
      });
    } else if (!blog) {
      res.status(404).json({
        success: false,
        data: `Blog with the id of ${req.params.id} doesn't exist`,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
});

// @desc     Delete a blog
// @route    DELETE /api/blog/delete/:id
// @access   Private
exports.deleteBlogById = asyncHandler(async (req, res) => {
  try {
    // Check if the blog exists
    let blog = await Blog.findById(req.params.id).exec();
    if (!blog) {
      res.status(404).json({
        success: false,
        data: `Blog with the id of ${req.params.id} doesn't exist`,
      });
    }
    // Checking if the user is the creator of the blog
    if (blog.postedBy.equals(req.user._id)) {
      await blog.remove();
      res.status(200).json({
        success: true,
        data: `Blog with the id of ${req.params.id} deleted successfully`,
      });
    } else {
      res.status(401).json({
        success: false,
        data: `You are not authorised to delete the blog with id of ${req.params.id}`,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
});

// @desc     Update a blog
// @route    PUT /api/blog/update/:id
// @access   Private
exports.updateBlogById = asyncHandler(async (req, res) => {
  try {
    // Check if the blog exists
    let blog = await Blog.findById(req.params.id).exec();
    if (!blog) {
      res.status(404).json({
        success: false,
        data: `Blog with the id of ${req.params.id} doesn't exist`,
      });
    }
    // Checking if the user is the creator of the blog
    if (blog.postedBy.equals(req.user._id)) {
      const { value, error } = validationSchema.updateBlog(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      //Only add photo if it exists
      if (req.file) {
        value.photo = req.file.filename;
      }
      blog = await Blog.findByIdAndUpdate(req.params.id, value, {
        new: true,
        runValidators: false,
      }).exec();

      res.status(200).json({ success: true, data: blog });
    } else {
      res.status(401).json({
        success: false,
        data: `You are not authorised to update the blog with id of ${req.params.id}`,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error,
    });
  }
});

// @desc     Like a blog
// @route    PUT /api/blog/like/:id
// @access   Private
// TODO
exports.likeBlogById = asyncHandler(async (req, res) => {
  try {
    // Check if the blog exists
    let blog = await Blog.findById(req.params.id).exec();
    if (!blog) {
      res.status(404).json({
        success: false,
        data: `Blog with the id of ${req.params.id} doesn't exist`,
      });
    }
    const isLiked = blog.likes.find((item) => item.equals(req.user._id));
    console.log(isLiked);
    if (isLiked) {
      res.status(400).json({
        success: false,
        message: "You have already liked the blog",
      });
    } else {
      blog = await Blog.findByIdAndUpdate(req.params.id, {
        $push: { likes: req.user._id },
      });
      res.status(200).json({
        success: true,
        message: `Liked blog with id of ${req.params.id}`,
        totalLikes: blog.likes.length,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error,
    });
  }
});
