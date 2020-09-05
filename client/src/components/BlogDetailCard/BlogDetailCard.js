import React from "react";
import { Box, Grid, Paper, Avatar } from "@material-ui/core";
import { useStyles } from "./BlogDetailCardStyles";
import moment from "moment";

const BlogDetailCard = ({ blog }) => {
  const classes = useStyles();
  const htmlString = blog.data.blog.content;
  return (
    <Box>
      <Grid container spacing={0}>
        {blog.data.blog.photo && (
          <img
            src={require(`../../../public/uploads/blog_images/${blog.data.blog.photo}`)}
            className={classes.image}
          />
        )}
        <Grid item xs={12}>
          <Paper elevation={1}>
            <Box className={classes.contentContainer}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <span className={classes.contentHeading}>
                    {blog.data.blog.title}
                  </span>
                </Grid>
                <Grid item xs={12}>
                  <br />
                  <Grid container spacing={2}>
                    <Grid item xs={3} lg={1} style={{ flexBasis: 0 }}>
                      <Avatar src={"https://picsum.photos/300"} />
                    </Grid>
                    <Grid item xs={9} lg={11} style={{ paddingTop: 10 }}>
                      <span style={{ fontWeight: "500" }}>Aniket Biswas</span>
                    </Grid>
                    <Grid item xs={12}>
                      <span>
                        Posted on:{" "}
                        {moment(blog.data.blog.postedOn).format("LL")}
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} className={classes.textContainer}>
                  <span
                    className={classes.contentText}
                    dangerouslySetInnerHTML={{ __html: htmlString }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogDetailCard;
