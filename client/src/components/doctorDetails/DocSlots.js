import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, Typography } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { useStyles } from "./DocSlotsStyles.js";

function TabPanel(props: TabPanelProps) {
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

const DocSlots = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper elevation={3}>
        <Container fixed>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography className={classes.heading}>
                <i className="fas fa-video" style={{ color: "blueviolet" }}></i>
                {"   "}
                VIDEO CONSULTATION
              </Typography>
            </Grid>
          </Grid>
          <hr />
          <Grid container>
            <Grid item lg={12} className={classes.root}>
              <Tabs
                orientation="horizontal"
                value={value}
                onChange={handleChange}
                className={classes.tabs}
              >
                <Tab label="Today" className={classes.tab} />
                <Tab label="Tomorrow" className={classes.tab} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <Grid
                  container
                  lg={12}
                  justify="space-around"
                  className={classes.time}
                >
                  <Grid item lg={3}>
                    <Box className={classes.btn} variant="contained">
                      5:00 PM
                    </Box>
                  </Grid>
                  <Grid item lg={3}>
                    <Box className={classes.btn} variant="contained">
                      5:00 PM
                    </Box>
                  </Grid>
                  <Grid item lg={3}>
                    <Box className={classes.btn} variant="contained">
                      5:00 PM
                    </Box>
                  </Grid>
                </Grid>
                <Grid container justify="space-around" className={classes.time}>
                  <Grid item lg={3}>
                    <Box className={classes.btn} variant="contained">
                      5:00 PM
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid container lg={12} justify="space-around">
                  <Grid item lg={3}>
                    <Box className={classes.btn} variant="contained">
                      6:00 PM
                    </Box>
                  </Grid>
                  <Grid item lg={3}>
                    <Box className={classes.btn} variant="contained">
                      6:00 PM
                    </Box>
                  </Grid>
                  <Grid item lg={3}>
                    <Box className={classes.btn} variant="contained">
                      6:00 PM
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};
export default DocSlots;
