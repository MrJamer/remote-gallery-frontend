import React from 'react';
import Gallery from './components/Gallery';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <div className="app-container">
      <h1>My Photo Gallery</h1>
      <UploadForm />
      <Gallery />
    </div>
  );
}

export default App;
