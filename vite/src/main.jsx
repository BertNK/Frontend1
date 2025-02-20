import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home.jsx'
import './css/Global.css'
import './css/Main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>
)
