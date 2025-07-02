import express from 'express';
import { uploadImage } from '../controllers/uploadController';
import { upload } from '../middlewares/multerMiddleware';

const router = express.Router();

router.post('/', upload.single('image'), uploadImage);

export default router;
