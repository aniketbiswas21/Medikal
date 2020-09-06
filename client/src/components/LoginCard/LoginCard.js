import React, { useState, useEffect } from "react";
import { Paper, Grid, Button, Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Alert } from "@material-ui/lab";
import { useStyles } from "./LoginCardStyles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../redux/actions/authActions";
import Grow from "@material-ui/core/Grow";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Slide from "@material-ui/core/Slide";

const LoginCard = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const error = useSelector((state) => state.auth.error);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [forgetEmail, setForgetEmail] = useState("");
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { username, password } = user;

  const onChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };
  const onSubmit = () => {
    dispatch(login(user, value));
  };
  useEffect(() => {
    dispatch(clearErrors());
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Tabs
              value={value}
              variant="scrollable"
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
            >
              <Tab label="Patient" />
              <Tab label="Doctor" />
              <Tab label="Hospital" />
            </Tabs>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Grid container spacing={2} className={classes.loginContainer}>
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
                  label="Email/Phone No."
                  id="username"
                  value={username}
                  onChange={(event) => onChange(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => onChange(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.loginButton}
                  onClick={() => {
                    onSubmit();
                  }}
                >
                  Login
                </Button>
              </Grid>
              <div className={classes.forgottenTextContainer}>
                <p className={classes.forgottenText} onClick={handleOpen}>
                  Forgotten Account?
                </p>
              </div>
            </Grid>
            <Divider variant="middle" />
            <Grid
              container
              spacing={2}
              className={classes.loginContainer}
              justify="center"
            >
              <Grid item xs={8}>
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.registerButton}
                  onClick={() => {
                    history.push("/register");
                  }}
                >
                  Create New Account
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide direction="right" in={open}>
          <div className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h2>Forget Password</h2>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Enter your email address"
                  fullWidth
                  variant="outlined"
                  value={forgetEmail}
                  onChange={(e) => {
                    setForgetEmail(e.target.value);
                  }}
                  error={
                    forgetEmail !== "" && emailRegex.test(forgetEmail) === false
                  }
                  helperText={
                    forgetEmail !== "" &&
                    emailRegex.test(forgetEmail) === false &&
                    "Please enter a valid email"
                  }
                />
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" className={classes.sendMailBtn}>
                  Send Email
                </Button>
              </Grid>
            </Grid>
          </div>
        </Slide>
      </Modal>
    </>
  );
};

export default LoginCard;
