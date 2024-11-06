import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store/index.js'
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";
import 'material-symbols';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
          <BrowserRouter>
              <App></App>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
)
