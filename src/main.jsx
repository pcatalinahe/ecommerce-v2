import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// connects root to index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* wraps around App component to make routing/browser URL changes, without the page reloading (SPA) */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)













// This file is the entry point of the app. It renders the App component inside the BrowserRouter and attaches it to the DOM.
