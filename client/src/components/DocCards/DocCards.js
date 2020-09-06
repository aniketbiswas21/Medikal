import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./DocCardsStyles";
import user from "../../images/pic.PNG";
import { Avatar } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";

const DocCards = () => {
  const classes = useStyles();
  const patientList = [
    {
      name: "Patient 1",
      condition: "Normal",
    },
    {
      name: "Patient 2",
      condition: "Normal",
    },
    {
      name: "Patient 3",
      condition: "Critical",
    },
    {
      name: "Patient 4",
      condition: "Critical",
    },
  ];
  return (
    <>
      {patientList.map((item, index) => (
        <Grid item xs={12} sm={6} lg={3}>
          <Paper
            elevation={2}
            className={
              item.condition === "Critical"
                ? classes.paperCritical
                : classes.paperNormal
            }
          >
            <Grid container spacing={6}>
              <Grid item lg={12} style={{ textAlign: "right" }}>
                <i className="fas fa-ellipsis-h" />
              </Grid>

              <Grid container justify="center" spacing={0}>
                <Grid item lg={4}>
                  <Avatar src={user} alt="Profile" className={classes.avatar} />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12} lg={12} className={classes.name} key={index}>
                  <Typography variant="h5">{item.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.condition} key={index}>
                    9:00-9:30
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                container
                justify="space-around"
                spacing={2}
                className={classes.actionGrid}
              >
                <Grid item xs={6}>
                  {item.condition === "Critical" ? (
                    <Chip label="Critical" color="secondary" />
                  ) : (
                    <Chip label="Normal" color="primary" />
                  )}
                </Grid>
                <Grid item xs={6} className={classes.btnCol}>
                  <button className={classes.btn}>View Profile</button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </>
  );
};
export default DocCards;
