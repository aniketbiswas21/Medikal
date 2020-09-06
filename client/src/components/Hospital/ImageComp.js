import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./ImageCompStyles";
import hospital from "../../images/hos2.PNG";

const ImageComp = () => {
  const classes = useStyles();
  return (
    <>
      <Paper
        elevation={2}
        style={{ backgroundImage: `url(${hospital})`, backgroundSize: "cover" }}
      >
        <Grid container className={classes.root}>
          <Grid item lg={12}>
            <Typography variant="h6" className={classes.text}>
              MediKal
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
export default ImageComp;
