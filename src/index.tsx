import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'utils/stylesheet/globalStyles';
import App from './pages/App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
