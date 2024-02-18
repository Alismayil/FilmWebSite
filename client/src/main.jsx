import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n';
import UserProvider from './context/UserContext.jsx';
import PlaylistProvider from './context/PlaylistContext.jsx';
import PriceTypeProvider from './context/PriceTypeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <PlaylistProvider>
        <PriceTypeProvider>
          <App />
        </PriceTypeProvider>
      </PlaylistProvider>
    </UserProvider>
  </React.StrictMode>,
)
