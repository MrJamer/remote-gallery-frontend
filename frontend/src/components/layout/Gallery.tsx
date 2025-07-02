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
    <div className="allery">
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

type ImageMeta = {
  id: number;
  url: string;
  title: string;
};

const Gallery: React.FC = () => {
  const [images, setImages] = useState<ImageMeta[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/images')
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map(img => (
        <div key={img.id} style={{ margin: '10px' }}>
          <img src={img.url} alt={img.title} width="150" />
          <p>{img.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
