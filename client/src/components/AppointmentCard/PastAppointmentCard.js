import React from "react";
import { Paper, Grid, Avatar, Typography } from "@material-ui/core";
import { useStyles } from "../AppointmentCard/AppointmentCardStyles";

const PastAppointmentCard = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={1} className={classes.card}>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={3} md={2}>
            <Avatar
              src={"https://picsum.photos/200"}
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs={8} sm={4} md={4}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <span className={classes.doctorName}>Dr. Lorem Ipsum</span>
              </Grid>
              <Grid item xs={12}>
                <span className={classes.speciality}>Dentist</span>
              </Grid>
              <Grid item xs={12}>
                <span>Hospital</span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} style={{ textAlign: "right" }}>
            <Grid container spacing={3} justify="space-between">
              <Grid item xs={12}>
                <span className={classes.availableText}>
                  <i className="fas fa-clock" />
                  &nbsp;6th Sept, 2020
                </span>
              </Grid>
              <Grid item xs={12}>
                <span className={classes.availableText}>
                  <i className="fas fa-calendar-alt" />
                  &nbsp;9:00AM - 10:00AM
                </span>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.prescription}>
                  <i className="fas fa-prescription"></i> Prescription Hello
                  World Lorem Ipsum
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default PastAppointmentCard;
