import React from 'react';
import Gallery from './layout/Gallery';
import UploadForm from './form/UploadForm';
import Header from './layout/Header';
import { useWindowEvents } from './hooks/useWindowEvents';
import { storage } from './utils/storage';

const UsernameComponent: React.FC = () => {
  useEffect(() => {
    const username = storage.get('username');
    if (username) {
      alert(`Вітаємо з поверненням, ${username}!`);
    } else {
      storage.set('username', 'Guest');
    }
  }, []);

  return <p>Інформація про користувача завантажена</p>;
};

export default App;
  useWindowEvents();
const App: React.FC = () => (
  <div>
    <Header />
    <UploadForm />
    <Gallery />
  </div>
);

export default App;


