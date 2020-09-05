import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { Grid, Container, Box, Button } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useStyles } from "./css/DoctorCreateScheduleStyles";
import TextField from "@material-ui/core/TextField";

const DoctorCreateSchedule = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  useEffect(() => {
    setSlots([
      {
        from: "09:30",
        to: "12:00",
      },
    ]);
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [slots, setSlots] = useState([
    {
      from: "09:30",
      to: "12:00",
    },
  ]);
  const addSlot = () => {
    const values = [...slots];
    values.push({
      from: "09:30",
      to: "12:00",
    });
    setSlots(values);
  };
  const onChange = (event, index) => {
    const values = [...slots];
    if (event.target.id === "from") {
      values[index].from = event.target.value;
    } else if (event.target.id === "to") {
      values[index].to = event.target.value;
    }
    setSlots(values);
  };
  const onSubmit = () => {
    console.log(slots);
  };

  return (
    <Layout>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>Create Schedule</h1>
          </Grid>
          <Grid item xs={12}>
            <Tabs
              orientation="horizontal"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              className={classes.tabs}
            >
              <Tab label="Monday" />
              <Tab label="Tuesday" />
              <Tab label="Wednesday" />
              <Tab label="Thursday" />
              <Tab label="Friday" />
              <Tab label="Saturday" />
              <Tab label="Sunday" />
            </Tabs>
            <Grid item xs={12}>
              <Box className={classes.container}>
                <Grid container spacing={2} justify="space-between">
                  {slots.map((item, index) => (
                    <>
                      <Grid item xs={4}>
                        <h2>Slot {index + 1}</h2>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          id="from"
                          label="From"
                          type="time"
                          fullWidth
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 300, // 5 min
                          }}
                          onChange={(event) => {
                            onChange(event, index);
                          }}
                          value={item.from}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          id="to"
                          label="To"
                          type="time"
                          defaultValue={item.to}
                          fullWidth
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 300, // 5 min
                          }}
                          variant="outlined"
                          onChange={(event) => {
                            onChange(event, index);
                          }}
                          value={item.to}
                        />
                      </Grid>
                    </>
                  ))}
                </Grid>
                <Grid container spacing={2} justify="center">
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      fullWidth
                      className={classes.btn}
                      onClick={addSlot}
                    >
                      Add More
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      fullWidth
                      className={classes.btn}
                      onClick={onSubmit}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default DoctorCreateSchedule;
