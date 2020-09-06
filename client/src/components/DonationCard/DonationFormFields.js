import React from "react";
import { Alert } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Grow from "@material-ui/core/Grow";
import { Paper, Grid, Button, Divider, Chip } from "@material-ui/core";
import { useStyles } from "../RegisterCard/RegisterCardStyles";
import { useHistory } from "react-router-dom";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";

const DonationFormFields = ({
  onChange,
  onSubmit,
  profile,
  error,
  setProfile,
}) => {
  const {
    model,
    description,
    fields,
    city,
    state,
    urgency,
    category,
  } = profile;
  const classes = useStyles();
  const history = useHistory();
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  const handleChange = (event) => {
    setProfile({ ...profile, fields: event.target.value });
  };
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
            <FormControl variant="outlined" style={{ width: "100%" }}>
              <InputLabel htmlFor="model-dropdown">Model</InputLabel>
              <Select
                native
                label="Model"
                inputProps={{
                  name: "model",
                  id: "model",
                }}
                value={model}
                onChange={(e) => {
                  onChange(e);
                }}
              >
                <option aria-label="None" value="" />
                <option value={"patient"}>Patient</option>
                <option value={"doctor"}>Doctor</option>
                <option value={"org"}>Org</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Description"
              value={description}
              id="description"
              onChange={(e) => {
                onChange(e);
              }}
              multiline
              error={
                description !== "" &&
                (description.length < 3 || description.trim().length < 3)
              }
              helperText={
                description !== "" &&
                (description.length < 3 || description.trim().length < 3) &&
                "Description should be atleast 3 characters"
              }
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel id="demo-mutiple-chip-label">Fields</InputLabel>
            <Select
              labelId="demo-mutiple-chip-label"
              id="demo-mutiple-chip"
              multiple
              value={fields}
              onChange={handleChange}
              input={<Input id="select-multiple-chip" variant="outlined" />}
              renderValue={(selected) => (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  {selected.map((value) => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
              fullWidth
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="City"
              value={city}
              id="city"
              onChange={(e) => {
                onChange(e);
              }}
              error={city !== "" && (city.length < 3 || city.trim().length < 3)}
              helperText={
                city !== "" &&
                (city.length < 3 || city.trim().length < 3) &&
                "City should be of atleast 3 characters"
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="State"
              value={state}
              id="state"
              onChange={(e) => {
                onChange(e);
              }}
              error={
                state !== "" && (state.length < 3 || state.trim().length < 3)
              }
              helperText={
                state !== "" &&
                (state.length < 3 || state.trim().length < 3) &&
                "State should be of atleast 3 characters"
              }
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" style={{ width: "100%" }}>
              <InputLabel htmlFor="bool-dropdown">Urgency</InputLabel>
              <Select
                native
                label="Urgency"
                inputProps={{
                  name: "urgency",
                  id: "urgency",
                }}
                value={urgency}
                onChange={(e) => {
                  onChange(e);
                }}
              >
                <option aria-label="None" value="" />
                <option value={"true"}>True</option>
                <option value={"false"}>False</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" style={{ width: "100%" }}>
              <InputLabel htmlFor="category-dropdown">Category</InputLabel>
              <Select
                native
                label="Category"
                inputProps={{
                  name: "category",
                  id: "category",
                }}
                value={category}
                onChange={(e) => {
                  onChange(e);
                }}
              >
                <option aria-label="None" value="" />
                <option value={"askingDonation"}>Asking Donation</option>
                <option value={"lookingToDonate"}>Looking to Donate</option>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              className={classes.registerButton}
              onClick={onSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default DonationFormFields;
