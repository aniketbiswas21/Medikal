import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ScheduleIcon from "@material-ui/icons/Schedule";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import NavBar from "../components/Navbar";
import styles from "./css/Landing.module.css";
import Cards from "../components/Cards";
import { Grid, Container, Box, Button } from "@material-ui/core";
import hospital from "../images/hos2.PNG";

export default function Landing() {
  return (
    <>
      <Grid container lg={12} spacing={0}>
        <Grid item lg={12}>
          <Grid
            container
            spacing={0}
            style={{
              backgroundColor: "slateblue",
              color: "#ffffff",
              height: "4vh",
            }}
          >
            <Grid item lg={6}>
              <Grid container lg={12} spacing={0}>
                <Grid item lg={4}>
                  <i className="fas fa-map-marker-alt"></i> Location
                </Grid>

                <Grid item lg={4}>
                  <i className="fas fa-envelope"></i> EmailAddress
                </Grid>

                <Grid item lg={4}>
                  <i className="fas fa-phone"></i> Phone
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4}>
              <Grid
                container
                lg={12}
                justify="right"
                spacing={0}
                style={{ color: "#000" }}
              >
                <Grid item lg={2}>
                  <i className="fas fa-Facebook"></i>
                </Grid>

                <Grid item lg={1}>
                  <i className="fas fa-instagram"></i>
                </Grid>

                <Grid item lg={1}>
                  <i className="fas fa-twitter"></i>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container lg={12} spacing={0}>
            <Grid item lg={12}>
              <NavBar />
            </Grid>
          </Grid>
          <Grid container lg={12} className={styles.sec3}>
            <Grid item lg={12}>
              <Container fixed>
                <Grid container lg={12} spacing={4}>
                  <Grid item lg={12}>
                    <Typography className={styles.heading}>
                      {" "}
                      BE BETTER <br />
                      <span style={{ fontSize: "48px", color: "#222021" }}>
                        EVERYDAY
                      </span>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  lg={12}
                  style={{ marginTop: "20vh" }}
                  justify="space-around"
                  spacing={4}
                >
                  <Grid item lg={3}>
                    <Cards />
                  </Grid>
                  <Grid item lg={3}>
                    <Cards />
                  </Grid>
                  <Grid item lg={3}>
                    <Cards />
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
