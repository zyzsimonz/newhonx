import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PrimeReactProvider } from 'primereact/api'
import "primereact/resources/themes/viva-light/theme.css";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  <PrimeReactProvider >
    <App />
  </PrimeReactProvider>
)
