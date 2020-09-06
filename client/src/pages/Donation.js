import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { Grid, Container, Box, Button } from "@material-ui/core";
import DonationCard from "../components/DonationCard/DonationCard";
import { useStyles } from "./css/FormContainerStyles";
import { useHistory } from "react-router-dom";
const Donation = () => {
  const classes = useStyles();
  const history = useHistory();
  const path = history.location.pathname;

  const renderComponent = () => {
    return <DonationCard />;
  };
  return (
    <Layout>
      <Container fixed>
        <Box>
          <Grid container spacing={2} justify="center">
            <Grid
              item
              xs={12}
              sm={10}
              md={8}
              lg={7}
              className={classes.formContainer}
            >
              {renderComponent()}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};
export default Donation;
