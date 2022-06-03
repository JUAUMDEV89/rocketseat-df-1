import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './styles/global.scss';

import { TaskProvider } from './hooks/useTask';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TaskProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TaskProvider>
)
