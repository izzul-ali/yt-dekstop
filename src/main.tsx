import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/index.css'
import Fallback from './components/Fallback'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<Fallback />}>
      <App />
    </Suspense>
  </React.StrictMode>
)
