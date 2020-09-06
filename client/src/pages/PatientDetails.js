import React from "react";
import Layout from "../components/Layout/Layout";
import PatientCard1 from "../components/PatientDetails/PatientCard1";
import PatientCard2 from "../components/PatientDetails/PatientCard2";
import PatientNotes from "../components/PatientDetails/PatientNotes";
import PatientApp from "../components/PatientDetails/PatientApp";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

const PatientDetails = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h5>
            Patient List <i className="fas fa-angle-right"></i> Patient 1
          </h5>
        </Grid>
      </Grid>
      <Container fixed>
        <Grid container lg={12} spacing={1} justify="center">
          <PatientCard1 />
          <PatientCard2 />
          <PatientNotes />
        </Grid>
      </Container>
      <Container fixed>
        <Grid container lg={12} spacing={1}>
          <PatientApp />
        </Grid>
      </Container>
    </Layout>
  );
};
export default PatientDetails;
