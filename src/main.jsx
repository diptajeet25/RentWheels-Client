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
import MyCars from './Pages/MyCars.jsx';
import MyBookings from './Pages/MyBookings.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './Pages/About.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import HelpSupport from './Pages/HelpSupport.jsx';
import TermsAndConditions from './Pages/TermsAndConditions.jsx';
import Blogs from './Pages/Blogs.jsx';
import DashBoard from './Layout/DashBoard.jsx';
import DashboardWelcome from './Pages/DashBoardWelcome.jsx';
import MyProfile from './Pages/MyProfile.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {index:true,element:<Home></Home>},
      
    ]
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
  },
  {
    path:"/cardetails/:id",
    element:<CarDetails></CarDetails>,
    loader:({params})=>fetch(`https://car-rental-server-six-gold.vercel.app/cardetails/${params.id}`)


  },
 
  {
    path:"/about",
    element:<About></About>

  },
  {
    path:"/myprofile",
    element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>

  },
  {
    path:"/dashboard",
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {index:true,element:<DashboardWelcome></DashboardWelcome>},
      {path:"addcar",element:<AddCar></AddCar>},
      {path:"mycars",element:<MyCars></MyCars>},
      {path:"mybookings",element:<MyBookings></MyBookings>}

    ]

  },

  {
    path:"/help",
    element:<HelpSupport></HelpSupport>

  },
  {
    path:"/terms",
    element:<TermsAndConditions></TermsAndConditions>

  },
  {
    path:"/blogs",
    element:<Blogs></Blogs>

  },
  {
    path:"*",
    element:<ErrorPage></ErrorPage>
  }
  
]);
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <ToastContainer
       autoClose={2000}
       ></ToastContainer>
      
       <QueryClientProvider client={queryClient}>
       <RouterProvider router={router} />
       </QueryClientProvider>
       
      
    </AuthProvider>
 
  </StrictMode>
)
