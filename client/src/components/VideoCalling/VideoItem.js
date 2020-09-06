import React, { Fragment, useEffect, useState } from "react";
import { Grid, Grow } from "@material-ui/core";

const VideoItem = ({ vidRef, muted }) => {
  return (
    <Fragment>
      <Grow in={true}>
        <Grid item lg={4}>
          <video
            ref={vidRef}
            autoPlay
            muted={muted}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              borderRadius: "6px",
            }}
          />
        </Grid>
      </Grow>
    </Fragment>
  );
};

export default VideoItem;
