import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import Home from './pages/Home/Home.jsx'
import PetSitter from './pages/PetSitter/PetSitter.jsx'
import Services from './pages/Services/Services.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"",element:<Home/>},
      {path:"/pet-sitter",element:<PetSitter/>},
      {path:"/services",element:<Services/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
