import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { Container } from "@material-ui/core";
import { useStyles } from "./PatientNotesStyle";

const PatientNotes = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item lg={4} xs={12} sm={12} md={12}>
        <Paper elevation={3}>
          <Container fixed>
            <Grid container spacing={2}>
              <Grid item lg={12}>
                <Typography variant="h6">Patient History</Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              <Grid item lg={12}>
                <Typography>
                  <strong>Lorem Ipsum</strong>
                </Typography>
                <Typography className={classes.date}>
                  {" "}
                  <i className="fas fa-calendar-alt"></i> 21 April,2020
                </Typography>
                <Typography className={classes.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Grid>
            </Grid>
            <hr className={classes.line} />
            <Grid container spacing={1}>
              <Grid item lg={12}>
                <Typography>
                  <strong>Lorem Ipsum</strong>
                </Typography>
                <Typography className={classes.date}>
                  {" "}
                  <i className="fas fa-calendar-alt"></i> 21 April,2020
                </Typography>
                <Typography className={classes.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Grid>
    </>
  );
};

export default PatientNotes;
