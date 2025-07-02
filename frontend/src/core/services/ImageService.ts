import { injectable } from 'inversify';
import axios from 'axios';

@injectable()
export class ImageService {
  async uploadImage(file: File): Promise<void> {
    const formData = new FormData();
    formData.append('image', file);

    await axios.post('http://localhost:4000/api/images', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  }
}
