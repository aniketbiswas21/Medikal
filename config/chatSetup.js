var passportSocketIo = require("passport.socketio");

const Connection = require("../models/Connections");
const Message = require("../models/Message");

// module.exports = function (server, passport, cookieParser, sessionStore) {
module.exports = async function (
  io,
  socket,
  passport,
  cookieParser,
  sessionStore
) {
  // const io = require("socket.io")(server);
  //!only to test
  // io.use(
  //   passportSocketIo.authorize({
  //     // key: 'connect.sid',
  //     store: sessionStore,
  //     secret: process.env.COOKIE_SECRET_KEY,
  //     passport: passport,
  //     cookieParser: cookieParser,
  //   })
  // );
  // io.on("connection", async (socket) => {
  console.log("new connection ", socket.id);
  const newConnection = new Connection({
    socketId: socket.id,
    userId: socket.id, //!only to test
    // userId: socket.request.userId,
  });
  await newConnection.save();
  socket.on("disconnect", async () => {
    console.log("disconnecting", socket.id);
    const connnection = await Connection.findOneAndDelete({
      socketId: socket.id,
    });
  });
  socket.on("message", async ({ userId, msg }) => {
    console.log(userId, msg);
    const connection = await Connection.findOne({ userId });
    const message = new Message({
      to: userId,
      from: socket.id, //!only to test
      // from: socket.request.userId,
      msg,
      time: new Date(),
    });
    await message.save();

    if (!connection) {
      //dont emit
      return;
    }
    console.log(message);
    console.log(socket.id);
    console.log(connection.socketId);
    io.to(socket.id).emit("received", message);
    socket.broadcast.to(connection.socketId).emit("message", message);
    // }
    // );
  });
};
