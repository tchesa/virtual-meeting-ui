import React from 'react';
import ReactDOM from 'react-dom';
import Main from './views/main/main';
import './assets/style/main.scss'
import { ParticipantsProvider } from './contexts/participants-context';

function App() {
  return (
    <div className="App">
      <ParticipantsProvider>
        <Main />
      </ParticipantsProvider>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
