import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";
import { useStyles } from "./PatientCard1Styles";
import user from "../../images/pic.PNG";
import Chip from "@material-ui/core/Chip";

const PatientCard1 = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item lg={2} xs={12} sm={12} md={8}>
        <Paper elevation={3}>
          <Grid container justify="center" spacing={2}>
            <Grid item lg={5}>
              <Avatar src={user} alt="Profile" className={classes.avatar} />
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item lg={12} className={classes.name}>
              <Typography variant="h6">Patient 1</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.text}>random@gmail.com</Typography>
            </Grid>
          </Grid>
          <Grid container justify="space-around" spacing={4}>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.number}>
                15
              </Typography>

              <Typography className={classes.text}>Past</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" className={classes.number}>
                2
              </Typography>

              <Typography className={classes.text}>Upcoming</Typography>
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={4}>
            <Grid item lg={8}>
              <Chip clickable label="Send Message" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default PatientCard1;
