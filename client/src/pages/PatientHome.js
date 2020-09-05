import React from "react";
import Layout from "../components/Layout/Layout";
import { Container, Grid, Button } from "@material-ui/core";
import PatientHomeSearch from "../components/PatientHomeSearch/PatientHomeSearch";
import { useStyles } from "../pages/css/PatientHomeStyles";
import DoctorCard from "../components/DoctorCard/DoctorCard";

const PatientHome = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Container fixed>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>
              Welcome, <span style={{ color: "#747474" }}>Lorem Ipsum</span>
            </h1>
          </Grid>
          <Grid item xs={12}>
            <PatientHomeSearch />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: "3%" }}>
          <Grid item xs={10}>
            <DoctorCard />
          </Grid>
          <Grid item xs={10}>
            <DoctorCard />
          </Grid>
          <Grid item xs={10}>
            <DoctorCard />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default PatientHome;
