import React from "react";
import Layout from "../components/Layout/Layout";
import Grid from "@material-ui/core/Grid";
import { Container, Typography } from "@material-ui/core";
import ImageComp from "../components/Hospital/ImageComp";
import HospitalCards from "../components/Hospital/HospitalCards";
import Appointments from "../components/Hospital/Appointments";
const Hospital = () => {
  return (
    <Layout>
      <Grid container lg={12} spacing={1}>
        <Grid item lg={8}>
          <Grid container spacing={2}>
            <Grid item lg={12}>
              <ImageComp />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item>
              <Typography style={{ fontWeight: "600" }}>
                Today's Doctors
              </Typography>
            </Grid>
          </Grid>
          <Container fixed>
            <Grid container spacing={2}>
              <HospitalCards />
            </Grid>
          </Container>
        </Grid>

        <Grid item lg={4} spacing={1}>
          <Appointments />
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Hospital;
