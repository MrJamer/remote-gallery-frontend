import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ImageData {
  id: number;
  title: string;
  url: string;
}

export default function Gallery() {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    axios.get<ImageData[]>('/api/images')
      .then(res => setImages(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="gallery">
      {images.length === 0 && <p>No images yet.</p>}
      {images.map(img => (
        <div key={img.id} className="gallery-item">
          <img src={img.url} alt={img.title} />
          <p>{img.title}</p>
        </div>
      ))}
    </div>
  );
}
