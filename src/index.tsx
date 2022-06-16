import React from 'react';
import ReactDOM from 'react-dom';
import Main from './views/main/main';
import './assets/style/main.scss'
import { ParticipantsProvider } from './contexts/participants-context';
import { ChatProvider } from './contexts/chat-context';

function App() {
  return (
    <div className="App">
      <ChatProvider>
        <ParticipantsProvider>
          <Main />
        </ParticipantsProvider>
      </ChatProvider>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
