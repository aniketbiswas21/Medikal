import React, { useEffect, useState, useRef, useCallback } from "react";
import Navbar from "../components/Navbar";
import { Container, Box, Grid } from "@material-ui/core";
import { useStyles } from "./css/BlogStyles";
import BlogCard from "../components/BlogCard/BlogCard";
import SideFilterBlog from "../components/SideFilterBlog/SideFilterBlog";
import axios from "axios";
import { useDispatch } from "react-redux";
import { clearBlogData } from "../redux/actions/blogActions";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";

const Blog = () => {
  const classes = useStyles();
  const [blogs, setBlogs] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const observer = useRef();
  const lastBlogRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("Visible");
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
      console.log(node, "node");
    },
    [loading, hasMore]
  );

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/blog/view-all/?page=${pageNumber}`
      )
      .then((res) => {
        setBlogs((blogs) => {
          return [...blogs, ...res.data.data];
        });
        setHasMore(res.data.data.length > 0);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, [pageNumber]);
  useEffect(() => {
    dispatch(clearBlogData());
  }, []);
  return (
    <>
      <Navbar />
      <Container fixed>
        <Box className={classes.mainContainer}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h2>Blogs</h2>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={4}
            justify="space-between"
            className={classes.blogMainContainer}
          >
            <Grid item xs={12} lg={7}>
              {blogs &&
                blogs.length > 0 &&
                blogs.map((blog, index) => {
                  if (blogs.length === index + 1) {
                    return (
                      <>
                        <BlogCard blog={blog} key={index} />
                        <div ref={lastBlogRef}></div>
                      </>
                    );
                  }
                  return <BlogCard blog={blog} key={index} />;
                })}
              {loading && <div>Loading...</div>}
              {error && <div>Error...</div>}
            </Grid>
            <Grid item xs={12} lg={3}>
              <SideFilterBlog />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Fab
        color="secondary"
        aria-label="edit"
        className={classes.fab}
        onClick={() => {
          history.push("/addBlog");
        }}
      >
        <EditIcon />
      </Fab>
    </>
  );
};

export default Blog;
