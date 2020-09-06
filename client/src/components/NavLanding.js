import React, { Fragment } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from "@material-ui/icons/Info";
import WebIcon from "@material-ui/icons/Web";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import BookIcon from "@material-ui/icons/Book";
import PortraitIcon from "@material-ui/icons/Portrait";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
  },
  button: {
    justifyContent: "space-around",
    display: "flex",
    margin: "auto",
    fontSize: "1.5em",
    fontWeight: "300",
    textDecoration: "none",
    color: "black",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

const Nav = (props) => {
  const classes = useStyles();

  const [sideDrawer, setSideDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSideDrawer(open);
  };

  const list = () => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: false,
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          "About",
          "Services",
          "Doctors",
          "Blog",
          "Protfolio",
          "Contact",
          "Appointment",
        ].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={(e) => {
              if (text === "Podcast") {
                e.preventDefault();
                window.location.href = "https://raw-talent.webflow.io/";
                return null;
              } else if (text === "Blog") {
                e.preventDefault();
                window.location.href =
                  "https://medium.com/developer-student-clubs-tiet";
                return null;
              }
              text !== "Home"
                ? props.history.push(`/${text.toLowerCase()}`)
                : props.history.push("/");
            }}
          >
            <ListItemIcon>
              {index === 0 && <InfoIcon />}
              {index === 1 && <WebIcon />}
              {index === 2 && <LocalHospitalIcon />}
              {index === 3 && <BookIcon />}
              {index === 4 && <PortraitIcon />}
              {index === 5 && <ContactMailIcon />}
              {index === 6 && <AccessTimeIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar
          position="fixed"
          style={{ marginTop: "5vh" }}
          color="white"
          className
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Medikal
            </Typography>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          anchor={"left"}
          open={sideDrawer}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </SwipeableDrawer>
      </div>
    </Fragment>
  );
};

export default withRouter(Nav);
