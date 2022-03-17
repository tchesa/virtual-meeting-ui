import React from 'react';
import ReactDOM from 'react-dom';
import Main from './views/main/main';
import './assets/style/main.scss'

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
