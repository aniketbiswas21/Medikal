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

export default function Landing() {
  return (
    <div>
      <section>
        <AppBar position="static" className={styles.appbar}>
          <Toolbar>
            <IconButton
              style={{
                color: "#ffffff",
                marginRight: "-0.7rem",
                marginLeft: "-1.5rem",
                marginTop: "-2rem",
              }}
            >
              <LocationOnIcon />
            </IconButton>
            <Typography style={navText}>Location</Typography>
            <IconButton
              style={{
                color: "#ffffff",
                marginTop: "-2rem",
                marginLeft: "0.3rem",
                marginRight: "-0.7rem",
              }}
            >
              <PhoneIcon />
            </IconButton>
            <Typography style={navText}>Phone</Typography>
            <IconButton
              style={{
                color: "#ffffff",
                marginTop: "-2rem",
                marginLeft: "0.3rem",
                marginRight: "-0.5rem",
              }}
            >
              <ScheduleIcon />
            </IconButton>
            <Typography style={navText}>Mon-Fri</Typography>
            <IconButton style={icons}>
              <FacebookIcon style={{ marginLeft: "57rem" }} />
            </IconButton>
            <IconButton style={icons}>
              <InstagramIcon />
            </IconButton>
            <IconButton style={icons}>
              <LinkedInIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </section>

      <section>
        <NavBar />
      </section>

      <section className={styles.sec3}>
        <Cards className={styles.card} />
        {/* <Cards />
        <Cards /> */}
      </section>
    </div>
  );
}
const navText = {
  fontSize: "13px",
  marginTop: "-1.9rem",
  color: "#ffffff",
};
const icons = {
  marginTop: "-2rem",
  color: "#ffffff",
};
