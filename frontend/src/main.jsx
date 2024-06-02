import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import ErrorPage from './components/errorPage.jsx'
import CategoriesPage from './pages/category/CategoriesPage.jsx'
import Search from './pages/Search.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[{
      path:"/",
      element:<Home/>
    },
    {
      path:"/categories/:category",
      element:<CategoriesPage/>
    },
    {
      path:"/search",
      element:<Search/>
    }
  
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
