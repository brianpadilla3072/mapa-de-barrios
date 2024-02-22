import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MyContextProvider } from '../context/globalContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <MyContextProvider> {/* Utiliza MyContextProvider en lugar de Globalcontext */}
      <App/>
    </MyContextProvider>
  </React.StrictMode>,
)
