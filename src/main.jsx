import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Passing #root to createRoot()
// Render whatever you want with render()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hello</h1>
  </StrictMode>,
)
