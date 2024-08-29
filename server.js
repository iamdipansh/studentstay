const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { Server } = require("socket.io");
const { on } = require('events');

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3003;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

// Socket Server //

  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on('room',(chatId)=>{
      socket.join(chatId)
      // console.log(chatId)
    })

    socket.on("send_message", (msg) => {
      console.log("Message received:", msg);
      io.emit("recive_message", msg);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });

// Socket Server //

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});