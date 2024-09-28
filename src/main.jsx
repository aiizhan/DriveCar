import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import './app/style/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
