import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextApi from './context/ContextApi.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/Store.js'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <ContextApi>
     <BrowserRouter>
    <App />
  </BrowserRouter>
  </ContextApi>
  </Provider>
 
 


)
