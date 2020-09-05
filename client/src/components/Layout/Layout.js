import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import logo from "../../images/logo.PNG";
import user from "../../images/pic.PNG";
import { useStyles } from "./LayoutStyles";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Layout = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const path = history.location.pathname;
  const doctorList = [
    {
      iconClassName: "fas fa-user fa-lg",
      listText: "Home",
      path: "/doctor/home",
    },
    {
      iconClassName: "fas fa-calendar-alt fa-lg",
      listText: "Create Schedule",
      path: "/doctor/create-schedule",
    },
    {
      iconClassName: "fas fa-list fa-lg",
      listText: "Patient's List",
    },
    {
      iconClassName: "fas fa-comment fa-lg",
      listText: "Chat",
    },
    {
      iconClassName: "fas fa-money-check-alt fa-lg",
      listText: "Payment",
    },
  ];
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item lg={2} className={classes.paper}>
          <Grid container justify="center" spacing={2}>
            <Grid item lg={10}>
              <img src={logo} alt="Medikal" />
            </Grid>
            <Grid container justify="center" spacing={2}>
              <Grid item lg={4} className={classes.pic}>
                <Avatar src={user} alt="profile" className={classes.avatar} />
              </Grid>
              <Grid item lg={12} className={classes.user}>
                <Typography variant="h5">Lorem Ipsum</Typography>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={4}
              className={classes.navlinks}
              justify="center"
            >
              {doctorList.map((item, index) => (
                <Grid
                  item
                  lg={10}
                  className={
                    path === item.path ? classes.activeLinks : classes.links
                  }
                  key={index}
                  onClick={() => {
                    history.push(`${item.path}`);
                  }}
                >
                  <Grid container spacing={2} justify="flex-start">
                    <Grid item xs={4}>
                      <i className={item.iconClassName} />
                    </Grid>
                    <Grid item xs={8} style={{ textAlign: "left" }}>
                      <Typography>{item.listText}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={10} className={classes.container}>
          <Grid container spacing={2}>
            <Grid item lg={12} className={classes.dashboard}>
              <div className={classes.dash}>
                Dashboard
                <div className={classes.icons}>
                  <i className="fas fa-search" style={icon}></i>
                  <i className="fas fa-comment" style={icon}></i>
                  <i className="fas fa-bell" style={icon}></i>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {props.children}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
const icon = {
  cursor: "pointer",
  transform: "scale(1.2)",
};
export default Layout;
