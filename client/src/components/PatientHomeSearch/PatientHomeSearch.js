import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Grid, Button } from "@material-ui/core";
import { useStyles } from "../../pages/css/PatientHomeStyles";

const PatientHomeSearch = () => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const doctorOptions = [
    {
      title: "Dentist",
    },
    {
      title: "Neurologist",
    },
    {
      title: "Psycologist",
    },
  ];
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8} lg={10}>
          <Autocomplete
            id="search"
            freeSolo
            options={doctorOptions}
            getOptionLabel={(option) => option.title}
            fullWidth
            style={{ backgroundColor: "white" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search doctors, clinics, hospitals, etc."
                variant="outlined"
                onChange={(e) => {
                  onChange(e);
                }}
                value={search}
                onKeyPress={(e) => (e.key === "Enter" ? onSearch(e) : null)}
              />
            )}
          />
        </Grid>
        <Grid item xs={4} lg={2}>
          <Button variant="contained" fullWidth className={classes.searchBtn}>
            Search
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default PatientHomeSearch;
