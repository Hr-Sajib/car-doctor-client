import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootPage from './components/RootPage.jsx';
import Home from './components/home/Home.jsx';
import Services from './components/services/Services';
import Blogs from './components/blogs/Blogs';
import Contacts from './components/contacts/Contacts';
import About from './components/home/About';
import AuthProvider from './components/authProvider/AuthProvider';
import Login from './components/authProvider/Login';
import SignUp from './components/authProvider/SignUp';
import CheckOut from './components/checkOut/CheckOut';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/services',
        element:<Services/>
      },
      {
        path:'/blogs',
        element:<Blogs/>
      },
      {
        path:'/contacts',
        element:<Contacts/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      },
      {
        path:'/checkout',
        element:<CheckOut/>
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
