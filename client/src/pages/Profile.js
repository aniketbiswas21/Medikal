import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, Container } from "@material-ui/core";
import Layout from "../components/Layout/Layout";
import UserProfile from "../components/UserProfile/UserProfile";

const Profile = () => {
  return (
    <Layout>
      <Grid container spacing={2} justify="center" style={{ marginTop: "5%" }}>
        <Grid item lg={8}>
          <UserProfile />
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Profile;
