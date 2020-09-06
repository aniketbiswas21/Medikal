import React, { Fragment, useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import Peer from "peerjs";
import { omit } from "lodash";

import VideoItem from "./VideoItem";

import io from "socket.io-client";
import Controls from "./Controls";
import { Box, Grid } from "@material-ui/core";
import { useStyles } from "./VideoCallingStyles";

let socket;

const VideoCollection = () => {
  const classes = useStyles();
  const ENDPOINT = "http://localhost:5000/";
  //   const ENDPOINT = "https://av-call.herokuapp.com/";

  // Init Socket Connection
  socket = io(ENDPOINT);

  const roomId = useParams();

  const vidRef = useRef(null);
  const idRef = useRef("");
  const [peerStream, setPeerStream] = useState({});
  const [myStream, setMyStream] = useState(null);

  const myPeer = new Peer();

  const PeerVideo = ({ peerStream }) => {
    const ref = useRef(null);
    useEffect(() => {
      ref.current.srcObject = peerStream;
    }, [peerStream]);
    return <VideoItem vidRef={ref} muted={false} />;
  };

  const connectToNewUser = (userId, stream) => {
    var call = myPeer.call(userId, stream);
    call.on("stream", (userStream) => {
      setPeerStream((prevState) => {
        return {
          ...prevState,
          [userId]: userStream,
        };
      });
    });
    call.on("close", () => {
      removePeerVideo(userId);
    });
  };

  const removePeerVideo = (id) => {
    console.log("Remove Peer Video");
    setPeerStream((prevState) => {
      return omit(prevState, [id]);
    });
  };

  useEffect(() => {
    // Init peer connection
    myPeer.on("open", (userId) => {
      idRef.current = userId;
      // Join room
      socket.emit("let_me_in", roomId, userId);
    });

    // Get user media stream
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((mediaStream) => {
        setMyStream(mediaStream);
        vidRef.current.srcObject = mediaStream;

        // call setup for peer connection
        myPeer.on("call", (call) => {
          call.answer(mediaStream);
          call.on("stream", (userStream) => {
            // add only one peer stream
            setPeerStream((prevState) => {
              return {
                ...prevState,
                [call.peer]: userStream,
              };
            });
          });
        });

        // Room Joined
        socket.on("i_am_here", (userId) => {
          // Add user's mediaStream
          connectToNewUser(userId, mediaStream);
        });

        socket.on("bye_bye", (userId) => {
          // Remove user's video
          console.log("bye bye ", userId);
          removePeerVideo(userId);
        });
      });
  }, []);

  return (
    <Box className={classes.main}>
      {console.log(process.env.PORT)}
      <Grid container spacing={0}>
        <Grid item lg={12} className={classes.videoContainer}>
          <Grid container spacing={2} justify="space-around">
            <VideoItem vidRef={vidRef} muted={true} />
            {Object.values(peerStream).map((stream, index) => {
              return <PeerVideo peerStream={stream} key={index} />;
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.actionCenter}>
          <Controls myStream={myStream} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoCollection;
