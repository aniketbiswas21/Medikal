import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";
import { useStyles } from "./PatientCard2Styles";
import Chip from "@material-ui/core/Chip";

const PatientCard2 = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item lg={6} xs={12} md={12} sm={12}>
        <Paper elevation={3}>
          <Grid container justify="space-around" spacing={2}>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.field}>
                Gender
              </Typography>

              <Typography className={classes.value}>Female</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.field}>
                Birthday
              </Typography>

              <Typography className={classes.value}>
                21st March, 2020
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.field}>
                Phone Number
              </Typography>

              <Typography className={classes.value}>9898989898</Typography>
            </Grid>
          </Grid>
          <hr className={classes.line} />
          <Grid container justify="space-around" spacing={3}>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.field}>
                Address
              </Typography>

              <Typography className={classes.value}>Lorem ipsum</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.field}>
                City
              </Typography>

              <Typography className={classes.value}>Lorem</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.field}>
                Zip Code
              </Typography>

              <Typography className={classes.value}>123456</Typography>
            </Grid>
          </Grid>
          <hr className={classes.line} />
          <Grid container justify="space-around" spacing={3}>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.field}>
                Patient Status
              </Typography>

              <Typography className={classes.value}>Active</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.field}>
                Registered Date
              </Typography>

              <Typography className={classes.value}>
                21st March, 2020
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.field}>
                Condition
              </Typography>

              <Typography className={classes.value}>Normal</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default PatientCard2;
