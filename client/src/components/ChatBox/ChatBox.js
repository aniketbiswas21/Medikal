import React from "react";
import {
  Paper,
  Grid,
  Avatar,
  Divider,
  TextField,
  Button,
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { useStyles } from "./ChatBoxStyles";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import ChatBubble from "../ChatBubble/ChatBubble";

const ChatBox = ({ messages, to, currentMsg, setCurrentMsg, sendMessage }) => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.chatHeader}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    src={"https://picsum.photos/200"}
                    alt="profile"
                    className={classes.avatar}
                  />
                </ListItemAvatar>
                <ListItemText primary="Lorem Ipsum" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.chatBoxMain}>
            {messages &&
              messages.length > 0 &&
              messages.map((message, index) => (
                <ChatBubble to={to} message={message} key={index} />
              ))}
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ padding: 20 }}>
            <Grid container spacing={2} justify="center">
              <Grid item xs={10}>
                <TextField
                  label="Write a message"
                  fullWidth
                  variant="outlined"
                  value={currentMsg}
                  onChange={(e) => {
                    setCurrentMsg(e.target.value);
                  }}
                  multiline
                  onKeyPress={(e) => (e.key === "Enter" ? sendMessage() : null)}
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  color="primary"
                  component="span"
                  onClick={sendMessage}
                >
                  <SendIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ChatBox;
