import React from "react";
import { Alert } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Grow from "@material-ui/core/Grow";
import { Paper, Grid, Button, Divider } from "@material-ui/core";
import { useStyles } from "../RegisterCard/RegisterCardStyles";
import { useHistory } from "react-router-dom";

const PatientRegisterFormFields = ({
  onChange,
  onSubmit,
  user,
  error,
  emailRegex,
}) => {
  const {
    firstName,
    lastName,
    email,
    contactNo,
    dateOfBirth,
    gender,
    password,
    confirmPassword,
  } = user;
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Paper elevation={3} style={{ marginBottom: 20 }}>
        <Grid container spacing={2} className={classes.registerContainer}>
          {error && (
            <Grid item xs={12}>
              <Grow in={true}>
                <Alert variant="filled" severity="error">
                  {error}
                </Alert>
              </Grow>
            </Grid>
          )}
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="First Name"
              value={firstName}
              id="firstName"
              onChange={(e) => {
                onChange(e);
              }}
              error={
                firstName !== "" &&
                (firstName.length < 3 || firstName.trim().length < 3)
              }
              helperText={
                firstName !== "" &&
                (firstName.length < 3 || firstName.trim().length < 3) &&
                "First Name should be of atleast 3 characters"
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Last Name"
              value={lastName}
              id="lastName"
              onChange={(e) => {
                onChange(e);
              }}
              error={
                lastName !== "" &&
                (lastName.length < 3 || lastName.trim().length < 3)
              }
              helperText={
                lastName !== "" &&
                (lastName.length < 3 || lastName.trim().length < 3) &&
                "Last Name should be of atleast 3 characters"
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Email ID"
              type="email"
              value={email}
              id="email"
              onChange={(e) => {
                onChange(e);
              }}
              error={email !== "" && emailRegex.test(email) === false}
              helperText={
                email !== "" &&
                emailRegex.test(email) === false &&
                "Please enter a valid email"
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Contact No."
              value={contactNo}
              id="contactNo"
              onChange={(e) => {
                onChange(e);
              }}
              error={
                contactNo !== "" &&
                (contactNo.length !== 10 || contactNo.trim().length !== 10)
              }
              helperText={
                contactNo !== "" &&
                (contactNo.length !== 10 || contactNo.trim().length !== 10) &&
                "Please enter a 10 digit phone no"
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              type="date"
              label="Date of Birth"
              value={dateOfBirth}
              onChange={(e) => {
                onChange(e);
              }}
              id="dateOfBirth"
            />
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
                value={gender}
                onChange={(e) => {
                  onChange(e);
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
            <TextField
              variant="outlined"
              fullWidth
              label="Password"
              type="password"
              value={password}
              id="password"
              onChange={(e) => {
                onChange(e);
              }}
              error={
                password !== "" &&
                (password.length < 6 || password.trim().length < 6)
              }
              helperText={
                password !== "" &&
                (password.length < 6 || password.trim().length < 6) &&
                "Password should be atleast 6 characters"
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              id="confirmPassword"
              onChange={(e) => {
                onChange(e);
              }}
              error={confirmPassword !== "" && confirmPassword !== password}
              helperText={
                confirmPassword !== "" &&
                confirmPassword !== password &&
                "Passwords did not match"
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              className={classes.registerButton}
              onClick={onSubmit}
            >
              Register
            </Button>
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <Grid
          container
          spacing={2}
          className={classes.registerContainer}
          justify="center"
        >
          <Grid item xs={8}>
            <Button
              variant="contained"
              fullWidth
              className={classes.loginButton}
              onClick={() => {
                history.push("/login");
              }}
            >
              I am an existing user
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default PatientRegisterFormFields;
