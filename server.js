const { createServer } = require("http");
const next = require("next");

const dev = process.env.NODE_NODE !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res);
  });

  const mongoose = require("mongoose");
  const dns = require("node:dns");

  dns.setDefaultResultOrder("ipv4first");
  console.log("⏳ Initializing MongoDB connection on server boot...");
  
  if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI, { family: 4 })
      .then(() => console.log('✅ Successfully connected to MongoDB Database!'))
      .catch(err => console.error('❌ MongoDB Connection Error:', err.message));
  } else {
    console.error('❌ MONGODB_URI is not defined in .env');
  }

  // We need to handle the socket init carefully with TS files.
  // For simplicity in this demo, I'll use a dynamic import or assuming it works with next/babel
  const { Server } = require("socket.io");
  const io = new Server(server, {
    cors: { origin: "*" }
  });

  global.io = io; // Making it accessible globally for API routes

  io.on("connection", (socket) => {
    console.log("[SOCKET] Client connected:", socket.id);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
