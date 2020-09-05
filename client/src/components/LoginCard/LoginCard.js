import React, { useState, useEffect } from "react";
import { Paper, Grid, Button, Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Alert } from "@material-ui/lab";
import { useStyles } from "./LoginCardStyles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../redux/actions/authActions";
import Grow from "@material-ui/core/Grow";

const LoginCard = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { username, password } = user;

  const onChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };
  const onSubmit = () => {
    dispatch(login(user));
  };
  useEffect(() => {
    dispatch(clearErrors());
  }, []);
  return (
    <>
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
            <p className={classes.forgottenText}>Forgotten Account?</p>
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
    </>
  );
};

export default LoginCard;
