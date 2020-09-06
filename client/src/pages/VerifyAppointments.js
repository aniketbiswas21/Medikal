import React from "react";
import Layout from "../components/Layout/Layout";
import { Container, Grid } from "@material-ui/core";
import VerifyAppointmentCard from "../components/VerifyAppointmentCard/VerifyAppointmentCard";

const VerifyAppointments = () => {
  return (
    <Layout>
      <Container fixed>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>
              Verify <span style={{ color: "#747474" }}>Appointments</span>
            </h1>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: "3%" }}>
          <Grid item xs={10}>
            <VerifyAppointmentCard />
          </Grid>
          <Grid item xs={10}>
            <VerifyAppointmentCard />
          </Grid>
          <Grid item xs={10}>
            <VerifyAppointmentCard />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default VerifyAppointments;
