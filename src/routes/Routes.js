import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../page/Blog/Blog";
import Category from "../page/category/Category";
import Course from "../page/Course/Course";
import CourseName from "../page/coursesName/CourseName";
import Faq from "../page/Faq/Faq";
import Getpremium from "../page/Get-premium/Getpremium";
import Home from "../page/Home/Home";

export const router=createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/course',
            element:<Course></Course>
        },
        {
            path:'/getpremium',
            element:<Getpremium></Getpremium>
        },
        {
            path:'/faq',
            element:<Faq></Faq>
        },
        {
            path:'/category/:id',
            element:<Category> </Category>
        },
        {
            path:'/coursesname/:id',
            element:<CourseName> </CourseName>
        },


    ]
}
   
])