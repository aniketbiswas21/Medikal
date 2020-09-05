import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, Typography } from "@material-ui/core";
import { useStyles } from "./DoctorInfoStyles.js";
import user from "../../images/pic.PNG";
import { Avatar } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const DoctorInfo = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <Container fixed>
          <Grid container spacing={0}>
            <Grid item lg={12}>
              <List className={classes.list}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      src={user}
                      alt="Profile"
                      className={classes.avatar}
                      variant="square"
                    />
                  </ListItemAvatar>
                  <Grid item={8}>
                    <ListItemText
                      className={classes.text}
                      primary={
                        <React.Fragment>
                          <Typography variant="h6" className={classes.name}>
                            Doctor 1
                          </Typography>
                        </React.Fragment>
                      }
                      secondary={
                        <React.Fragment>
                          <Typography
                            variant="body2"
                            className={classes.field}
                            color="textPrimary"
                          >
                            Field
                          </Typography>
                          {"n years overall experience "}
                        </React.Fragment>
                      }
                    />
                  </Grid>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={12}>
              <Typography className={classes.info}>
                <i
                  className="fas fa-check-circle"
                  style={{ color: "#2C5728" }}
                ></i>{" "}
                Medical Registration Verified
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item lg={12}>
              <Typography className={classes.detail}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};
export default DoctorInfo;
