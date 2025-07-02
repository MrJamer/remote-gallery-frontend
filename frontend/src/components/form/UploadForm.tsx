import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import axios from 'axios';
import container from '../../core/container';
import TYPES from '../../core/inversify.types';
import { ImageService } from '../../core/services/ImageService';

export default function UploadForm() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const form = new FormData();
    form.append('title', title);
    form.append('photo', file);

    try {
      await axios.post('/api/upload', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Uploaded!');
      setTitle('');
      setFile(null);
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <h2>Upload photo</h2>
      <input
        type="text"
        name="title"
        placeholder="Enter title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="file"
        name="photo"
        accept="image/*"
        onChange={e => setFile(e.target.files ? e.target.files[0] : null)}
        required
      />
      <button type="submit">Upload</button>
    </form>
  );
}

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const imageService = container.get<ImageService>(TYPES.ImageService);

  const handleUpload = async () => {
    if (!file) return;

    try {
      await imageService.uploadImage(file);
      alert('Успішно завантажено!');
    } catch (error) {
      alert('Помилка при завантаженні');
    }
  };

  return (
    <div>
      <Input type="file" onChange={e => setFile(e.target.files?.[0] || null)} />
      <Button onClick={handleUpload}>Завантажити</Button>
    </div>
  );
};

export default UploadForm;
