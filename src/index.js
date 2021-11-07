import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './context'; 
import { firebaseConfig } from './firebaseConfig'




ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);