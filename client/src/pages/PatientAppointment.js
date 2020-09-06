import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { Container, Typography } from "@material-ui/core";
import { useStyles } from "./css/PatientAppointmentStyles";
import AppointmentCard from "../components/AppointmentCard/AppointmentCard";
import PastAppointmentCard from "../components/AppointmentCard/PastAppointmentCard";

const TabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const PatientAppointment = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Layout>
        <Container fixed>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h1>Welcome, Patient 1</h1>
            </Grid>
          </Grid>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={12} lg={7}>
              <Tabs
                orientation="horizontal"
                value={value}
                onChange={handleChange}
                className={classes.tabs}
                variant="scrollable"
              >
                <Tab label="Upcoming Appointments" className={classes.tab} />
                <Tab label="Past Appointments" className={classes.tab} />
              </Tabs>
            </Grid>
          </Grid>
          <TabPanel value={value} index={0}>
            <Grid container spacing={3} style={{ marginTop: "3%" }}>
              <Grid item xs={12} lg={10}>
                <AppointmentCard />
              </Grid>
              <Grid item xs={12} lg={10}>
                <AppointmentCard />
              </Grid>
              <Grid item xs={12} lg={10}>
                <AppointmentCard />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container spacing={3} style={{ marginTop: "3%" }}>
              <Grid item xs={10}>
                <PastAppointmentCard />
              </Grid>
              <Grid item xs={10}>
                <PastAppointmentCard />
              </Grid>
              <Grid item xs={10}>
                <PastAppointmentCard />
              </Grid>
            </Grid>
          </TabPanel>
        </Container>
      </Layout>
    </>
  );
};
export default PatientAppointment;
