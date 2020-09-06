import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { Container, Grid, Button } from "@material-ui/core";
import PatientHomeSearch from "../components/PatientHomeSearch/PatientHomeSearch";
import { useStyles } from "../pages/css/PatientHomeStyles";
import DoctorCard from "../components/DoctorCard/DoctorCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllDocs } from "../redux/actions/docActions";

const PatientHome = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.docs.doctors);
  useEffect(() => {
    dispatch(getAllDocs());
  }, []);
  return (
    <Layout>
      <Container fixed>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>
              Welcome, <span style={{ color: "#747474" }}>Lorem Ipsum</span>
            </h1>
          </Grid>
          <Grid item xs={12}>
            <PatientHomeSearch />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: "3%" }}>
          {doctors &&
            doctors.length > 0 &&
            doctors.map((doctor, index) => (
              <Grid item xs={12} lg={10} key={index}>
                <DoctorCard doctor={doctor} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default PatientHome;
