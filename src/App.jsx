import { useState } from 'react';
import ValentinePage from './components/ValentinePage';
import CelebrationPage from './components/CelebrationPage';
import './App.css';

function App() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="app">
      {accepted ? (
        <CelebrationPage />
      ) : (
        <ValentinePage onAccept={() => setAccepted(true)} />
      )}
    </div>
  );
}

export default App;

