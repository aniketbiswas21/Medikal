import React from "react";
import Layout from "../components/Layout/Layout";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DocCards from "../components/DocCards/DocCards";
import { Container } from "@material-ui/core";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../components/AnimatedProgressProvider";

const DoctorHome = () => {
  return (
    <Layout>
      <Container fixed>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>
              Welcome, <span style={{ color: "#747474" }}>Dr Lorem Ipsum</span>
            </h1>
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper elevation={2} style={{ padding: "1rem" }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={100}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                  >
                    {(value) => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          styles={buildStyles({ pathTransition: "none" })}
                        />
                      );
                    }}
                  </AnimatedProgressProvider>
                </Grid>
                <Grid item xs={8}>
                  <h4>Appointments</h4>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper elevation={2} style={{ padding: "1rem" }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={40}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                  >
                    {(value) => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          styles={buildStyles({
                            pathTransition: "none",
                            pathColor: "red",
                            trailColor: "#eee",
                            textColor: "red",
                          })}
                        />
                      );
                    }}
                  </AnimatedProgressProvider>
                </Grid>
                <Grid item xs={8}>
                  <h4>Critical</h4>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper elevation={2} style={{ padding: "1rem" }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={60}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                  >
                    {(value) => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          styles={buildStyles({ pathTransition: "none" })}
                        />
                      );
                    }}
                  </AnimatedProgressProvider>
                </Grid>
                <Grid item xs={8}>
                  <h4>Normal</h4>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper elevation={2} style={{ padding: "1rem" }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={30}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                  >
                    {(value) => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          styles={buildStyles({
                            pathTransition: "none",
                            pathColor: "green",
                            trailColor: "#eee",
                            textColor: "green",
                          })}
                        />
                      );
                    }}
                  </AnimatedProgressProvider>
                </Grid>
                <Grid item xs={8}>
                  <h4>Completed</h4>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <DocCards />
        </Grid>
      </Container>
    </Layout>
  );
};

export default DoctorHome;
