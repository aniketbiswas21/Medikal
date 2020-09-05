import React from "react";
import { Box, Grid, Hidden } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Navbar from "../components/Navbar";
import { useStyles } from "./css/FormContainerStyles";
import { useHistory } from "react-router-dom";
import FormAnimation from "../components/FormAnimation/FormAnimation";
import LoginCard from "../components/LoginCard/LoginCard";
import RegisterCard from "../components/RegisterCard/RegisterCard";

const FormContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const path = history.location.pathname;

  const renderComponent = () => {
    if (path === "/login") {
      return <LoginCard />;
    } else if (path === "/register") {
      return <RegisterCard />;
    }
  };
  return (
    <>
      <Navbar />
      <Container fixed>
        <Box>
          <Grid container spacing={2} className={classes.mainContainer}>
            <Hidden mdDown>
              <Grid item lg={6}>
                <FormAnimation />
              </Grid>
            </Hidden>
            <Grid
              item
              xs={12}
              sm={10}
              md={6}
              lg={4}
              className={classes.cardContainer}
            >
              {renderComponent()}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default FormContainer;
