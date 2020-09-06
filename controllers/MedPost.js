// * NPM Packages
const { capitalize } = require("lodash");

// * Models
const MedPost = require("../models/MedPost");

// * Functions

// * Utils
const { createNedit } = require("../validationSchemas/MedPost");

// * Controllers -->

// * Post a new MedPost
exports.createNew = async (req, res) => {
  try {
    const { value, error } = createNedit(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newMedPost = await MedPost.create({
      ...value,
      postedBy: {
        id: req.user._id,
        model: capitalize(req.user.role.toString()),
      },
    });

    res.status(200).send(newMedPost);
  } catch (error) {
    console.log("Error occured here -> \n", error);
    res.status(400).send("Server Denied request.");
  }
};

// * Edit MedPosts
exports.edit = async (req, res) => {
  try {
    const { value, error } = createNedit(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    
  } catch (error) {
    console.log("Error occured here -> \n", error);
    res.status(400).send("Server Denied request.");
  }
};
// * Get MedPosts posted by you
exports.myMedPosts = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error occured here -> \n", error);
    res.status(400).send("Server Denied request.");
  }
};
// * Get your MedPost (Show responses as well)
exports.myMedPost = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error occured here -> \n", error);
    res.status(400).send("Server Denied request.");
  }
};
// * Get MedPosts for you
exports.listMedPostsForMe = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error occured here -> \n", error);
    res.status(400).send("Server Denied request.");
  }
};
// * Get all MedPosts
exports.all = async (req, res) => {
  try {
    const medPosts = await MedPost.find({}).exec().sort("-date");
    if (!medPosts) return res.status(400).send("Posts not found.");

    res.status(200).send(medPosts);
  } catch (error) {
    console.log("Error occured here -> \n", error);
    res.status(400).send("Server Denied request.");
  }
};
// * Get single MedPost
exports.medPost = async (req, res) => {
  try {
    const medPost = await MedPost.findById(req.params._id)
      .populate("postedBy.id", "name emailProp.email contactNo")
      .exec();

    if (!medPost) return res.status(400).send("Post not found.");

    res.status(200).send(medPost);
  } catch (error) {
    console.log("Error occured here -> \n", error);
    res.status(400).send("Server Denied request.");
  }
};
// * Controllers End -->
