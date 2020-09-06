import React from "react";
import { Paper, Grid, Avatar, Button } from "@material-ui/core";
import { useStyles } from "../DoctorCard/DoctorCardStyles";
import { useHistory } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Paper elevation={1} className={classes.card}>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={3} lg={2}>
            <Avatar
              src={"https://picsum.photos/200"}
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs={8} sm={4} lg={4}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <span className={classes.doctorName}>
                  Dr. {doctor.name.firstName} {doctor.name.lastName}
                </span>
              </Grid>
              <Grid item xs={12}>
                <span className={classes.speciality}>{doctor.fields[0]}</span>
              </Grid>
              <Grid item xs={12}>
                <span>{doctor.org}</span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} lg={6} style={{ textAlign: "right" }}>
            <Grid container spacing={8} justify="space-between">
              <Grid item xs={12}>
                <span className={classes.availableText}>
                  <i className="fas fa-calendar-check" />
                  &nbsp;Available Today
                </span>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  className={classes.bookButton}
                  onClick={() => {
                    history.push(`/doctor/${doctor._id}`);
                  }}
                >
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
