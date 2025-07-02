import express from 'express';
import cors from 'cors';
import imageRoutes from './routes/imageRoutes';
import http from 'http';
import { initSocket } from './ws/socket';

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/images', imageRoutes);

// WebSockets
initSocket(server);

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
