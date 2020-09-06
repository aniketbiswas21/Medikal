import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { useStyles } from "./ChatBubbleStyles";

const ChatBubble = ({ message, to }) => {
  const classes = useStyles();
  console.log(message.to);
  console.log(to);
  return (
    <>
      <Grid
        container
        spacing={2}
        justify={message.to === to ? "flex-start" : "flex-end"}
        style={{ paddingLeft: 30, paddingRight: 30 }}
      >
        <Grid item xs={6}>
          <Paper
            elevation={0}
            className={
              message.to === to ? classes.receivedBubble : classes.sentBubble
            }
          >
            {message.msg}
          </Paper>
        </Grid>
      </Grid>
      {/* <Grid container spacing={2} justify="flex-end" style={{ padding: 30 }}>
        <Grid item xs={6}>
          <Paper elevation={0} className={classes.sentBubble}>
            hi
          </Paper>
        </Grid>
      </Grid> */}
    </>
  );
};

export default ChatBubble;
