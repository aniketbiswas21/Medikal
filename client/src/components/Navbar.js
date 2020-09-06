import React, { useEffect } from "react";
import logo from "../images/logo2.PNG";
import { getProfile } from "../redux/actions/authActions";
import { Avatar, Grid, Button, Container, Hidden } from "@material-ui/core";
import { useStyles } from "./css/NavBarStyles";
import NavLanding from "./NavLanding";

const Navbar = () => {
  const classes = useStyles();
  return (
    <Grid container lg={12} className={classes.topnav}>
      <Hidden mdDowm>
        <Grid item lg={3} xs={0}>
          <Avatar variant="square" src={logo} className={classes.avatar} />
        </Grid>
        <Grid item lg={6} justify="center">
          <Container fixed>
            <Grid container lg={12} spacing={0}>
              <Grid item lg={2}>
                <a href="/about" className={classes.link}>
                  About
                </a>
              </Grid>
              <Grid item lg={2}>
                <a href="/services" className={classes.link}>
                  Services
                </a>
              </Grid>
              <Grid item lg={2}>
                <a href="/doctors" className={classes.link}>
                  Doctors
                </a>
              </Grid>
              <Grid item lg={2}>
                <a href="/blog" className={classes.link}>
                  Blog
                </a>
              </Grid>
              <Grid item lg={2}>
                <a href="/portfolio" className={classes.link}>
                  Portfolio
                </a>
              </Grid>
              <Grid item lg={2}>
                <a href="/contact" className={classes.link}>
                  Contact
                </a>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item lg={3}>
          <Container fixed>
            <Grid container lg={12} justify="right">
              <Grid item lg={12}>
                <Button variant="contained" className={classes.btn}>
                  Appointment
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Hidden>
      <Hidden lgUp>
        <Grid item xs={12}>
          <NavLanding />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Navbar;
