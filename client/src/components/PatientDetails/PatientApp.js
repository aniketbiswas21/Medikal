import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { Container } from "@material-ui/core";
import { useStyles } from "./PatientAppStyles";
import Button from "@material-ui/core/Button";

const PatientApp = () => {
  const classes = useStyles();
  const app = [
    {
      date: "6 Sep, 2020",
      time: "9:00-10:00am",
      treatment: "Open Access",
    },
    {
      date: "8 Sep, 2020",
      time: "10:00-11:00am",
      treatment: "Anything",
    },
    {
      date: "11 Sep, 2020",
      time: "10:00-11:00am",
      treatment: "Hello World",
    },
  ];
  return (
    <>
      <Grid item lg={8} xs={12} md={12} sm={12}>
        <Paper elevation={3} style={{ backgroundColor: "#e3e5e3" }}>
          <Container fixed>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Button variant="contained" className={classes.btn}>
                  Upcoming Appointments
                </Button>
              </Grid>
            </Grid>
            {app.map((item, index) => (
              <Paper elevation={1} className={classes.paper}>
                <Container fixed>
                  <Grid container lg={12} spacing={0} justify="space-around">
                    <Grid item xs={4} key={index}>
                      <Typography className={classes.date}>
                        {item.date}
                      </Typography>
                      <Typography className={classes.time}>
                        {item.time}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography className={classes.time}>
                        Treatment
                      </Typography>
                      <Typography className={classes.date}>
                        {item.treatment}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ margin: "auto" }}>
                      <Chip
                        className={classes.vcBtn}
                        clickable
                        label="Start video call"
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Paper>
            ))}
          </Container>
        </Paper>
      </Grid>
    </>
  );
};
export default PatientApp;
