import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Grid from "@material-ui/core/Grid";
import { Container, Typography } from "@material-ui/core";
import DoctorInfo from "../components/doctorDetails/DoctorInfo";
import DocDetails from "../components/doctorDetails/DocDetails";
import DocSlots from "../components/doctorDetails/DocSlots";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDoc, getDocSlots } from "../redux/actions/docActions";

const DoctorDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.docs.doctor);
  const slots = useSelector((state) => state.docs.slots);
  useEffect(() => {
    dispatch(getDoc(id));
    dispatch(getDocSlots(id));
  }, []);
  return (
    <Layout>
      <Container fixed>
        {doctor !== null && slots !== null && (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h5>
                  Doctor List <i className="fas fa-angle-right"></i> Doctor 1
                </h5>
              </Grid>
            </Grid>

            <Grid container lg={12} spacing={1}>
              <Grid item lg={8}>
                <Grid container spacing={2}>
                  <Grid item lg={12}>
                    <DoctorInfo doctor={doctor} />
                  </Grid>
                </Grid>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <DocDetails doctor={doctor} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={4}>
                <DocSlots slots={slots} />
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </Layout>
  );
};
export default DoctorDetails;
