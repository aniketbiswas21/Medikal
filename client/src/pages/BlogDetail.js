import React, { useEffect } from "react";
import { Box, Grid, Container, Hidden } from "@material-ui/core";
import Navbar from "../components/Navbar";
import { useStyles } from "./css/BlogDetailStyles";
import BlogDetailCard from "../components/BlogDetailCard/BlogDetailCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlogById } from "../redux/actions/blogActions";

const BlogDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const blog = useSelector((state) => state.blogs.blog);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getBlogById(id));
  }, []);
  return (
    <>
      <Navbar />
      {blog && (
        <Box className={classes.mainContainer}>
          <Container fixed>
            <Grid container spacing={2}>
              <Hidden mdDown>
                <Grid item lg={1}>
                  <Grid container spacing={0} className={classes.likeGrid}>
                    <Grid item xs={12}>
                      {" "}
                      <br />
                      <br />
                      <i
                        className="fas fa-heart fa-lg"
                        style={{ color: "#DC1818" }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <span className={classes.likeText}>
                        {blog.data.totalLikes ? blog.data.totalLikes : 0}
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
                <BlogDetailCard blog={blog} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};

export default BlogDetail;
