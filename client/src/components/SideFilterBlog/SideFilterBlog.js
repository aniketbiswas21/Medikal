import React from "react";
import { useStyles } from "./SideFilterBlogStyles";
import { Box, Grid, Paper, Divider } from "@material-ui/core";

const SideFilterBlog = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={1}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <span className={classes.filterTextGrid}>Filters</span>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={0} style={{ marginTop: 5 }}>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.filterItemsActive}>
                  <span>Most Recent</span>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.filterItems}>
                  <span>Most Liked</span>
                </Paper>
              </Grid>
            </Grid>
            <br />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SideFilterBlog;
