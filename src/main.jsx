import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceWorker.js')
      .then((registration) => {
        console.log('ServiceWorker registered with scope:', registration.scope); 
      })
      .catch((error) => {
        console.log('ServiceWorker registration failed:', error);
      });
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
      <App/>
    </BrowserRouter> 
     </React.StrictMode>,
)
