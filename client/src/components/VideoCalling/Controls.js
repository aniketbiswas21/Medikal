import React, { Fragment, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import VideocamIcon from "@material-ui/icons/Videocam";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import CallEndIcon from "@material-ui/icons/CallEnd";
import { useStyles } from "./VideoCallingStyles";
import { useHistory } from "react-router-dom";

const Controls = ({ myStream }) => {
  const history = useHistory();
  const classes = useStyles();
  const [isVideo, setIsVideo] = useState(
    myStream && myStream.getVideoTracks()[0].enabled
  );
  const [isAudio, setIsAudio] = useState(
    myStream && myStream.getAudioTracks()[0].enabled
  );
  const video = (e) => {
    e.preventDefault();
    myStream.getVideoTracks()[0].enabled = !myStream.getVideoTracks()[0]
      .enabled;
    setIsVideo(!myStream.getVideoTracks()[0].enabled);
  };

  const audio = (e) => {
    e.preventDefault();
    myStream.getAudioTracks()[0].enabled = !myStream.getAudioTracks()[0]
      .enabled;
    setIsAudio(!myStream.getAudioTracks()[0].enabled);
  };

  return (
    <Fragment>
      <Grid container spacing={2} justify="center" style={{ marginTop: "5px" }}>
        <Grid item xs={10} sm={4} lg={4}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={3} sm={4} lg={2}>
              {isVideo === true ? (
                <Button
                  variant="contained"
                  onClick={video}
                  className={classes.videoOffButtonContained}
                >
                  <VideocamOffIcon />
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  onClick={video}
                  className={classes.videoOffButton}
                >
                  <VideocamIcon />
                </Button>
              )}
            </Grid>
            <Grid item xs={3} sm={4} lg={2}>
              <Button
                className={classes.videoOffButtonContained}
                variant="contained"
                onClick={() => history.push("/doctor/home")}
              >
                <CallEndIcon />
              </Button>
            </Grid>
            <Grid item xs={3} sm={4} lg={2}>
              {isAudio === true ? (
                <Button
                  className={classes.videoOffButtonContained}
                  variant="contained"
                  onClick={audio}
                >
                  <MicOffIcon />
                </Button>
              ) : (
                <Button
                  className={classes.videoOffButton}
                  variant="outlined"
                  onClick={audio}
                >
                  <MicIcon />
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Controls;
