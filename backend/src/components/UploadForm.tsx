import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('image', file);

    await axios.post('http://localhost:4000/api/images', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    alert('Зображення завантажено!');
  };

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload}>Завантажити</button>
    </div>
  );
};

export default UploadForm;
