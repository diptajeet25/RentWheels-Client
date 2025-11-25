import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root.jsx';
import Home from './Pages/Home.jsx';
import AddCar from './Pages/addCar.jsx';
import Auth from './Pages/Auth.jsx';
import LoginForm from './Components/LoginForm.jsx';
import RegForm from './Components/RegisterForm.jsx'
import AuthProvider from './Context/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {index:true,element:<Home></Home>},
      
    ]
  },
  {
    path:"/addcar",
    element:<AddCar></AddCar>
  },
  {
    path:"/auth",
    element:<Auth></Auth>,
    children:[
      {index:true,element:<LoginForm></LoginForm>},
      {path:"reg",
        element:<RegForm></RegForm>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
 
  </StrictMode>
)
