import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, Typography } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { useStyles } from "./DocSlotsStyles.js";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const DocSlots = ({ slots }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper elevation={3}>
        <Grid container spacing={0} justify="center">
          <Grid item xs={12}>
            <Typography className={classes.heading}>
              <i className="fas fa-video" style={{ color: "blueviolet" }}></i>
              {"   "}
              VIDEO CONSULTATION
            </Typography>
          </Grid>
        </Grid>

        <hr />
        <Grid container spacing={2}>
          <Grid item lg={12} className={classes.root}>
            <Tabs
              orientation="horizontal"
              value={value}
              onChange={handleChange}
              className={classes.tabs}
              centered
            >
              <Tab label="Today" className={classes.tab} />
              <Tab label="Tomorrow" className={classes.tab} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Grid
                container
                spacing={2}
                justify="space-around"
                className={classes.time}
              >
                {slots.today.map((slot, index) => (
                  <Grid item lg={3} key={index}>
                    <Box className={classes.btn} variant="contained">
                      {new Date(slot.time.from).getHours()} :
                      {new Date(slot.time.from).getMinutes()}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container spacing={2} justify="space-around">
                {slots.tommorow.map((slot, index) => (
                  <Grid item lg={3} key={index}>
                    <Box className={classes.btn} variant="contained">
                      {new Date(slot.time.from).getHours()} :
                      {new Date(slot.time.from).getMinutes()}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
export default DocSlots;
