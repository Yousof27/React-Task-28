import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import postsStore from './redux/Posts Store/postsStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={postsStore}>
      <App />
    </Provider>
  </StrictMode>,
)
