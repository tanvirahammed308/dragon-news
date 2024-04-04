import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          loader:()=>fetch('/news.json'),
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/newsdetails/:id",
          element:<PrivateRoute>
            <NewsDetails />

          </PrivateRoute>
          
          ,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  export default router; 