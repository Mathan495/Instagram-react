import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Viewstry from './viewstry.jsx'
import Profile from './profile.jsx'

const router = createBrowserRouter(
  [{
    path: '/', 
    element: <App/> 
  },
  {
    path: '/stry/:id/:tot', 
    element: <Viewstry/> 
  },
  {
    path : '/profile',
    element: <Profile /> 
  }
]
) 

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/> 
)