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
import PrivateRoute from './Components/PrivateRoute.jsx';
import AllCars from './Pages/AllCars.jsx';
import CarDetails from './Pages/CarDetails.jsx';


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
    element:<PrivateRoute><AddCar></AddCar></PrivateRoute>
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
  },
  {
    path:"/cars",
    element:<AllCars></AllCars>,
    loader: ()=> fetch("http://localhost:3000/allcars")
  },
  {
    path:"/cardetails/:id",
    element:<CarDetails></CarDetails>,
    loader:({params})=>fetch(`http://localhost:3000/cardetails/${params.id}`)


  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
 
  </StrictMode>
)
