import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import { Home } from "../Pages/Home/Home";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";
import Signup from '../Pages/Signup/Signup';
import Signin from '../Pages/Signin/Signin'
import NotFound from "../Pages/NotFound/NotFound";
import Appointment from "../Pages/Appointment/Appointment";
import UserDashboard from "../Layout/UserDashboard";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:`/doctor/:id`,
        element: <DoctorDetails></DoctorDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/doctor/${params.id}`)
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path:'/signin',
        element: <Signin></Signin>
      },
      {
        path:'/appointment',
        element: <PrivateRoute> <Appointment></Appointment></PrivateRoute>
      },  
    ]
  },
  {
    path:'/userdashboard',
    element: <PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>
  },
  {
    path:'*',
    element: <NotFound></NotFound>
  }
]);

export default router

