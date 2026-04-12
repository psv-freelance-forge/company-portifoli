import { Server } from "socket.io";

let io: Server;

export function initSocket(server: any) {
  io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("[SOCKET] Client connected:", socket.id);
    
    socket.on("disconnect", () => {
      console.log("[SOCKET] Client disconnected:", socket.id);
    });
  });

  return io;
}

export function getIO() {
  if (typeof global !== "undefined" && (global as any).io) {
    return (global as any).io;
  }
  return null;
}
