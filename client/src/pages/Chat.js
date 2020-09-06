import React, { useState, useEffect } from "react";
import { socket } from "../config/socket";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import { Container, Grid } from "@material-ui/core";
import ChatBox from "../components/ChatBox/ChatBox";
const Chat = ({ doctorId }) => {
  const [messages, setMessages] = useState([]);
  const [currentMsg, setCurrentMsg] = useState("");
  const [id, setId] = useState("1234");
  const [to, setTo] = useState("4321");

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `http://localhost:5000/api/chat/all/${doctorId}`
      );
      console.log(data);
      setMessages(data);
    })();
  }, [doctorId]);
  socket.on("message", (msg) => {
    console.log(messages);
    const allMessages = [...messages];
    console.log("a", msg);
    allMessages.push(msg);
    setMessages(allMessages);
  });
  socket.on("received", (msg) => {
    console.log(msg);
    const allMessages = [...messages];
    allMessages.push(msg);
    setMessages(allMessages);
  });
  const sendMessage = () => {
    socket.emit("message", {
      userId: to,
      msg: currentMsg,
    });
    setCurrentMsg("");
  };
  return (
    <Layout>
      <Container fixed>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <h1>Chat</h1>
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="to">To:</label>
            <input
              id="to"
              name="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <label htmlFor="id">ID:</label>
            <input
              id="id"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              value={currentMsg}
              onChange={(e) => setCurrentMsg(e.target.value)}
            />

            <button onClick={sendMessage}>SNED</button>
          </Grid>
          <Grid item xs={12} lg={8}>
            {/* {messages.map((msg, i) => (
            <h1 key={msg._id}>{i + " " + msg.msg}</h1>
          ))} */}
            <ChatBox
              messages={messages}
              to={to}
              currentMsg={currentMsg}
              setCurrentMsg={setCurrentMsg}
              sendMessage={sendMessage}
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Chat;
