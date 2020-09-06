import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, Container } from "@material-ui/core";
import { useStyles } from "./UserProfileStyles";
import profile from "../../images/profile.jpg";
import TextField from "@material-ui/core/TextField";
import { Avatar } from "@material-ui/core";
import UserProfileEdit from "./UserProfileEdit";

const UserProfile = () => {
  const classes = useStyles();
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <>
      <Paper elevation={3} style={{ paddingBottom: "1rem" }}>
        {isEditMode === false ? (
          <Container fixed>
            <Grid container justify="space-between" spacing={3}>
              <Grid item lg={4}>
                <Avatar
                  src={profile}
                  variant="square"
                  alt="Profile"
                  className={classes.avatar}
                />
              </Grid>
              <Grid item lg={5} justify="right">
                <h1>
                  Lorem Ipsum
                  <i
                    className="fas fa-edit"
                    style={{ float: "right", cursor: "pointer" }}
                    onClick={() => {
                      setIsEditMode(true);
                    }}
                  />
                </h1>
                <span style={{ color: "grey" }}>Post</span>
                <br />

                <br />
                <Typography>
                  Self Intro lorem ipsum lorem ipsum lorem ipsum fibef vbibv
                  bdivbi visvib svigisbv ksgvdigib ksvigbv kvisgib skgviib
                  ksbviib
                </Typography>
                <br />
                <Grid container spacing={2}>
                  <Grid item lg={12}>
                    <Typography className={classes.field}>
                      <i className="fas fa-calendar-alt"></i> 6th Sept, 2020
                    </Typography>
                    <Typography className={classes.field}>
                      <i className="fas fa-phone"></i> 1111111111
                    </Typography>
                    <Typography className={classes.field}>
                      <i className="fas fa-envelope"></i> lorem@gmail.com
                    </Typography>
                    <Typography className={classes.field}>
                      <i className="fas fa-user"></i> Male
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        ) : (
          <UserProfileEdit />
        )}
      </Paper>
    </>
  );
};

export default UserProfile;
