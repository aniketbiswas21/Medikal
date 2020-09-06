import React from "react";
import { Paper, Grid, Avatar, Button } from "@material-ui/core";
import { useStyles } from "./VerifyAppointmentCardStyles";

const VerifyAppointmentCard = () => {
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
            <Grid container spacing={1} justify="space-around">
              <Grid item xs={12}>
                <span className={classes.doctorName}>Patient Name</span>
              </Grid>
              <Grid item xs={12}>
                <span className={classes.speciality}>
                  <i className="fas fa-calendar-day" />
                  &nbsp; 8:00-9:00
                </span>
              </Grid>
              <Grid item xs={12}>
                <span>Doctor's Name</span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={4} style={{ textAlign: "right" }}>
            <Grid container spacing={0} style={{ marginTop: "30%" }}>
              <Grid item xs={6} style={{ textAlign: "right" }}>
                <Button variant="contained" className={classes.bookButton}>
                  Approve
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" className={classes.rejectButton}>
                  Decline
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default VerifyAppointmentCard;
