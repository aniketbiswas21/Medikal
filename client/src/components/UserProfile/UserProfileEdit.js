import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  Container,
  Button,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import { useStyles } from "./UserProfileStyles";
import profile from "../../images/profile.jpg";
import TextField from "@material-ui/core/TextField";
import { Avatar } from "@material-ui/core";
import moment from "moment";

const UserProfileEdit = () => {
  const classes = useStyles();
  return (
    <>
      <Container fixed>
        <Grid container justify="space-between" spacing={3}>
          <Grid item lg={4}>
            <Avatar
              src={profile}
              variant="square"
              alt="Profile"
              className={classes.avatar}
            />
            <Button variant="contained">Choose Photo</Button>
          </Grid>
          <Grid item lg={5} justify="right">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField label="First Name" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Last Name" variant="outlined" fullWidth />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth
                  multiline
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Date of Birth"
                  variant="outlined"
                  fullWidth
                  type="date"
                  value={moment(Date.now()).format("YYYY-MM-DD")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Contact No" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Email" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" style={{ width: "100%" }}>
                  <InputLabel htmlFor="gender-dropdown">Gender</InputLabel>
                  <Select
                    native
                    label="Gender"
                    inputProps={{
                      name: "gender",
                      id: "gender",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                    <option value={"other"}>Other</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth className={classes.btn}>
                  Update
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UserProfileEdit;
