import React from "react";
import { Paper, Grid, Avatar } from "@material-ui/core";
import { useStyles } from "./BlogCardStyles";
import { useHistory } from "react-router-dom";
import moment from "moment";

const BlogCard = ({ blog }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Paper elevation={1} style={{ marginBottom: "2%" }}>
        {blog.photo && (
          <img
            // src={require(`../../../public/uploads/blog_images/${blog.photo}`)}
            src={`/uploads/blog_images/${blog.photo}`}
            className={classes.image}
            alt="blog-img"
          />
        )}
        <Grid container spacing={0} className={classes.avatarContainer}>
          <Grid item xs={12}>
            <Grid container spacing={0}>
              <Grid item xs={3} lg={1} className={classes.avatarDiv}>
                <Avatar
                  alt="Profile"
                  src={"https://picsum.photos/200"}
                  className={classes.avatar}
                />
              </Grid>
              <Grid item xs={6} lg={3} className={classes.profileDiv}>
                <span className={classes.profileText}>Aniket Biswas</span>
                <div className={classes.dateText}>
                  {moment(blog.postedOn).format("LL")}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={0} justify="center">
          <Grid item xs={11}>
            <div
              className={classes.blogTitle}
              onClick={() => {
                history.push(`/blog/${blog._id}`);
              }}
            >
              {blog.title}
            </div>
          </Grid>
          <Grid
            item
            xs={11}
            style={{ marginTop: "1.5%", marginBottom: "20px" }}
          >
            <span className={classes.blogActions}>
              <i className="fas fa-heart" style={{ color: "#DC1818" }} />{" "}
              <span style={{ color: "#363D44" }}>
                {blog.likes ? blog.likes.length : 0} Likes
              </span>
            </span>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default BlogCard;
