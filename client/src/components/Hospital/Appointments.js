import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import { Container, Typography } from "@material-ui/core";
import { useStyles } from "./AppointmentsStyles.js";
import user from "../../images/pic.PNG";
import { Avatar } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const Appointments = () => {
  const classes = useStyles();
  const patientList = [
    {
      name: "Patient 1",
    },
    {
      name: "Patient 2",
    },
    {
      name: "Patient 3",
    },
  ];
  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <Container fixed>
          <Grid container>
            <Grid item lg={12}>
              <Typography variant="h6" className={classes.heading}>
                Appointments
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            {patientList.map((item, index) => (
              <Grid item xs={12} lg={12}>
                <Paper elevation={3}>
                  <Container fixed>
                    <Grid container>
                      <Grid item lg={12}>
                        <Typography className={classes.time}>
                          9:00 am - 10:00 am
                        </Typography>
                      </Grid>
                    </Grid>
                    <hr className={classes.line} />
                    <Grid container>
                      <Grid item lg={12}>
                        <List className={classes.list}>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar
                                src={user}
                                alt="Profile"
                                className={classes.avatar}
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={item.name}
                              secondary="Consultation with Dr.ABC"
                            />
                          </ListItem>
                        </List>
                      </Grid>
                    </Grid>
                  </Container>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Paper>
    </>
  );
};

export default Appointments;
