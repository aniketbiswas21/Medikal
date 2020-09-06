import React from "react";
import Layout from "../components/Layout/Layout";
import { Container, Grid, Button } from "@material-ui/core";
import DocApprovalCard from "../components/organisation/DocApprovalCard";

const DoctorApproval = () => {
  return (
    <Layout>
      <Container fixed>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h3>Approve Doctors</h3>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <DocApprovalCard />
          </Grid>
          <Grid item xs={10}>
            <DocApprovalCard />
          </Grid>
          <Grid item xs={10}>
            <DocApprovalCard />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default DoctorApproval;
