import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./HospitalCardsStyle";
import user from "../../images/pic.PNG";
import { Avatar } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const HospitalCards = () => {
  const classes = useStyles();
  const doctorList = [
    {
      name: "Doctor 1",
    },
    {
      name: "Doctor 2",
    },
    {
      name: "Doctor 3",
    },
    {
      name: "Doctor 4",
    },
  ];
  return (
    <>
      {doctorList.map((item, index) => (
        <Grid item xs={10} sm={6} lg={3}>
          <Paper elevation={3} className={classes.paper}>
            <Grid container justify="center" spacing={1}>
              <Grid item lg={5}>
                <Avatar src={user} alt="Profile" className={classes.avatar} />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item>
                <Typography variant="h6" className={classes.name} key={index}>
                  {item.name}
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify="center" spacing={1}>
              <Grid item>
                <Typography variant="h6" className={classes.field}>
                  Field
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <Rating
                  className={classes.rating}
                  name="half-rating"
                  defaultValue={3}
                  precision={0.5}
                  size="small"
                />
              </Grid>
            </Grid>
            <Grid container justify="center" spacing={2}>
              <Grid item lg={4}>
                <Chip label="Edit" clickable className={classes.chip} />
              </Grid>
            </Grid>
            <hr className={classes.line} />
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <Typography className={classes.time}>
                  <i className="fas fa-clock"></i> 11:30 am to 3:30 pm
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </>
  );
};
export default HospitalCards;
