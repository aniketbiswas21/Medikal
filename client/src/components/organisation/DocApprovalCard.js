import React from "react";
import { Paper, Grid, Avatar, Button } from "@material-ui/core";
import { useStyles } from "./DocApprovalCardStyles";

const DocApprovalCard = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={2} className={classes.card}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Avatar
              src={"https://picsum.photos/200"}
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <span className={classes.doctorName}>Dr. Lorem Ipsum</span>
              </Grid>
              <Grid item xs={12}>
                <span className={classes.speciality}>Dentist</span>
              </Grid>
              <Grid item xs={12}>
                <span>Experience</span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Grid container spacing={3} justify="space-between">
              <Grid item xs={12}>
                <span className={classes.availableText}>
                  <i
                    className="fas fa-info-circle"
                    style={{ color: "#01A400" }}
                  />
                  &nbsp;Description lorem ipsum lorem ipsum lorem ipsum ipsum
                  ispnf bjdfvi bvib bubev bvuys bugyuv dgsivi.
                </span>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" className={classes.bookButton}>
                  Approve Doctor
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default DocApprovalCard;
