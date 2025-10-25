import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";
import { Suspense } from "react";
import Loading from "../Components/Loading";
import Course from "../pages/Course";
import CourseDetails from "../pages/CourseDetails";
import Login from "../Components/Login";

import Signup from "../Components/SignUp";


export const router = createBrowserRouter([

{
    path:"/",
    element: <MainLayout/>,
    children: [
         {
        index: true,
        loader: () => fetch("/data.json").then((res) => res.json()),
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
        {
            path:"/aboutUs",
            element:<AboutUs/>,
        },
        {
            path: "/profile",
            element:<Profile/>
        },
        {
          path: "/course",
          loader: () => fetch("/data.json").then((res) => res.json()),
        element: (
          <Suspense fallback={<Loading/>}>
            <Course/>
          </Suspense>
        )
        },
        {
          path:"/coursedetails/:skillId",
           loader: () => fetch("/data.json").then((res) => res.json()),
            element: (
           <Suspense fallback={<Loading/>}>
            <CourseDetails/>
          </Suspense>
           )
        },
        {
          path:"/login",
          element: <Login/>,
        },
        {
          path:"/signup",
          element: <Signup/>
        }
    ]
}
])