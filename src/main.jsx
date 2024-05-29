import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/index.jsx';
import './css/index.css'
import Navbar from './components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
      <Navbar></Navbar>
      <React.StrictMode>
        <div className="container">
          <RouterProvider router={router} />
        </div>
        {/* <App /> */}
      </React.StrictMode>,
  </div>
)
