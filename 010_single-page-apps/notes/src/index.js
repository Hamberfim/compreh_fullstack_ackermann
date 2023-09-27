import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// aws - amplify and config
import { Amplify } from 'aws-amplify';
import config from './aws-exports';

// aws libs/files
import { AmplifyProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// NOTE: add >> @import url('https://fonts.googleapis.com/css2?family=Inter:slnt,wght@-10..0,100..900&display=swap'); << to top of src/index.css file

// use theme created in figma and sync with Amplify
import { studioTheme } from './ui-components';
// use amplify config
Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // replace <React.StrictMode> with <AmplifyProvider>
  <AmplifyProvider theme={studioTheme}>
    <App />
  </AmplifyProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
