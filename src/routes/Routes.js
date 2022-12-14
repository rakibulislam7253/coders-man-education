import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Main2 from "../layout/Main2";
import Blog from "../page/Blog/Blog";
import Category from "../page/category/Category";
import Course from "../page/Course/Course";
import CourseName from "../page/coursesName/CourseName";
import Faq from "../page/Faq/Faq";
import Getpremium from "../page/Get-premium/Getpremium";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Tremsandconsition from "../page/others/Trems/Tremsandconsition";
import Register from "../page/Register/Register";

import PrivateRouter from "./PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/getpremium',
                element: <PrivateRouter> <Getpremium></Getpremium> </PrivateRouter>,
                loader: () => fetch(`https://coders-man-education-server.vercel.app/news`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Tremsandconsition></Tremsandconsition>
            }

        ]

    },

    {
        path: '/',
        element: <Main2></Main2>,
        children: [

            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch('https://coders-man-education-server.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Category> </Category>,
                loader: ({ params }) => fetch(`https://coders-man-education-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/coursename/:id',
                element: <CourseName> </CourseName>
            },

        ]
    },
    {
        path: "*",
        element:
            <div>
                <h2>404 error page</h2>
            </div>
    }

])