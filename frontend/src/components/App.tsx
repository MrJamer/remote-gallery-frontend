import React from 'react';
import Gallery from './layout/Gallery';
import UploadForm from './form/UploadForm';
import Header from './layout/Header';

const App: React.FC = () => (
  <div>
    <Header />
    <UploadForm />
    <Gallery />
  </div>
);

export default App;


