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
      <Container fixed>
        <Grid container lg={12} spacing={1} style={{ marginTop: "3%" }}>
          <Grid item lg={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={12}>
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
              <Grid container spacing={2} justify="center">
                <HospitalCards />
              </Grid>
            </Container>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Appointments />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
export default Hospital;
