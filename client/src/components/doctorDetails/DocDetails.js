import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, Typography } from "@material-ui/core";
import { useStyles } from "./DocDetailsStyles.js";
import { Button } from "@material-ui/core";

const DocDetails = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <Container fixed>
          <Grid container spacing={2}>
            <Grid item lg={12}>
              <Typography className={classes.info}>INFO</Typography>
            </Grid>
          </Grid>
        </Container>
        <br />
        <Grid container spacing={1}>
          <Grid item lg={4}>
            <Container fixed>
              <Grid container spacing={2}>
                <Grid item lg={12}>
                  <Typography className={classes.address}>
                    Random Address, City
                    <br />
                    State, Country
                    <hr className={classes.line} />
                    Landmark: Hello World
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item lg={4}>
            <Container fixed>
              <Grid container spacing={2}>
                <Grid item lg={12}>
                  <Typography className={classes.address}>
                    <span className={classes.heading}>Mon-Fri</span>
                    <hr className={classes.line} />
                    <br />
                    10:15 AM - 02:30 PM
                    <br />
                    05:00 PM - 09:00 PM
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item lg={4}>
            <Typography className={classes.text}>
              <i className="fas fa-rupee-sign"></i> 250
              <br />
              <i className="fas fa-credit-card"></i> Online Payment Available
            </Typography>
            <Button variant="contained" className={classes.btn}>
              Book Appointment
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
export default DocDetails;
