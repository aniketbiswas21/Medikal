import React, { useState, useEffect } from "react";
import { Paper, Grid, Button, Divider } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { useStyles } from "./DonationCardStyles";
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
import DonationFormFields from "./DonationFormFields";

const DonationCard = () => {
  const classes = useStyles();
  const history = useHistory();
  const [profile, setProfile] = useState({
    model: [],
    description: "",
    fields: [],
    city: "",
    state: "",
    urgency: [],
    category: [],
  });
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const onChange = (e) => {
    setProfile({ ...profile, [e.target.id]: e.target.value });
  };
  const onSubmit = () => {
    dispatch(register(profile));
  };
  useEffect(() => {
    dispatch(clearErrors());
  }, []);

  const renderForm = () => {
    return (
      <DonationFormFields
        onChange={onChange}
        onSubmit={onSubmit}
        profile={profile}
        error={error}
        setProfile={setProfile}
      />
    );
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {renderForm()}
        </Grid>
      </Grid>
    </>
  );
};

export default DonationCard;
