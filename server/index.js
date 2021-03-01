const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const socket = require("socket.io");
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
const io = socket(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(socket.handshake.query.phone + " joined.");

  socket.join(socket.handshake.query.phone);

  socket.on("newChatMessage", (data) => {
    socket.to(data.receiver).emit("receiveChatMessage", data);
  });
});

app.get("/", (req, res) => res.send("Hello"));
