import React, { useState, useEffect } from "react";
import { Paper, Grid, Button, Divider } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { useStyles } from "./RegisterCardStyles";
import { useHistory } from "react-router-dom";
import Grow from "@material-ui/core/Grow";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  register,
  clearErrors,
  registerDoctor,
  registerOrganisation,
} from "../../redux/actions/authActions";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PatientRegisterFormFields from "../PatientRegisterFormFields/PatientRegisterFormFields";
import DoctorRegisterFormFields from "../DoctorRegisterFormFields/DoctorRegisterFormFields";
import OrganisationRegisterFormFields from "../OrganisationRegisterFormFields/OrganisationRegisterFormFields";

const RegisterCard = () => {
  const classes = useStyles();
  const history = useHistory();
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    dateOfBirth: moment(Date.now()).format("YYYY-MM-DD"),
    gender: "",
    password: "",
    confirmPassword: "",
  });
  const [doctor, setDoctor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    dateOfBirth: moment(Date.now()).format("YYYY-MM-DD"),
    gender: "",
    password: "",
    confirmPassword: "",
    description: "",
    org: "",
    fields: [],
  });
  const [organisation, setOrganisation] = useState({
    name: "",
    description: "",
    email: "",
    contactNo: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const onChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  const onChangeDoctor = (e) => {
    setDoctor({ ...doctor, [e.target.id]: e.target.value });
  };
  const onChangeOrganisation = (e) => {
    setOrganisation({ ...organisation, [e.target.id]: e.target.value });
  };
  const onSubmit = () => {
    if (value === 0) {
      dispatch(register(user));
    } else if (value === 1) {
      dispatch(registerDoctor(doctor));
    } else if (value === 2) {
      dispatch(registerOrganisation(organisation));
    }
  };
  useEffect(() => {
    dispatch(clearErrors());
  }, []);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderForm = () => {
    switch (value) {
      case 0:
        return (
          <PatientRegisterFormFields
            onChange={onChange}
            onSubmit={onSubmit}
            user={user}
            error={error}
            emailRegex={emailRegex}
          />
        );
      case 1:
        return (
          <DoctorRegisterFormFields
            onChange={onChangeDoctor}
            onSubmit={onSubmit}
            doctor={doctor}
            error={error}
            emailRegex={emailRegex}
            setDoctor={setDoctor}
          />
        );
      case 2:
        return (
          <OrganisationRegisterFormFields
            onChange={onChangeOrganisation}
            onSubmit={onSubmit}
            organisation={organisation}
            error={error}
            emailRegex={emailRegex}
          />
        );
      default:
        return (
          <PatientRegisterFormFields
            onChange={onChange}
            onSubmit={onSubmit}
            user={user}
            error={error}
            emailRegex={emailRegex}
          />
        );
    }
  };

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
          {renderForm()}
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterCard;
