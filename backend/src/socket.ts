import { Server } from 'http';
import { Server as SocketIOServer } from 'socket.io';

export const initSocket = (server: Server) => {
  const io = new SocketIOServer(server, {
    cors: { origin: '*' }
  });

  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);
  });
};
