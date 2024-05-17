import React from 'react';  // Importing the React library
import ReactDOM from 'react-dom';  // Importing the ReactDOM library for rendering the React component
import './index.css';  // Importing the CSS file for styling
import App from './App';  // Importing the main App component

ReactDOM.render(
  <React.StrictMode>  /* Enabling strict mode to catch potential problems in the application */
    <App />  // Rendering the App component
  </React.StrictMode>,
  document.getElementById('root')  // Specifying the root element in the HTML to render the app into
);
