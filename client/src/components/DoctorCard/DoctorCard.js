import React from "react";
import { Paper, Grid, Avatar, Button } from "@material-ui/core";
import { useStyles } from "../DoctorCard/DoctorCardStyles";

const DoctorCard = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={1} className={classes.card}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Avatar
              src={"https://picsum.photos/200"}
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <span className={classes.doctorName}>Dr. Lorem Ipsum</span>
              </Grid>
              <Grid item xs={12}>
                <span className={classes.speciality}>Dentist</span>
              </Grid>
              <Grid item xs={12}>
                <span>Asian Hospital</span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Grid container spacing={8} justify="space-between">
              <Grid item xs={12}>
                <span className={classes.availableText}>
                  <i className="fas fa-calendar-check" />
                  &nbsp;Available Today
                </span>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" className={classes.bookButton}>
                  Book Appointment
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default DoctorCard;
