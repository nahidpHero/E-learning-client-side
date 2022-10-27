import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import ChackoutPage from "../../components/ChackoutPage/ChackoutPage";
import Courses from "../../components/Courses/Courses";
import DetailsPage from "../../components/DetailsPage/DetailsPage";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Faq from "../../components/Faq/Faq";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../layouts/Main";
import PrivetRouts from "../PrivetRout/PrivetRouts";

export const routs=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/course/:id',
                loader:({params})=>fetch(`https://learning-server-khaki.vercel.app/course/${params.id}`),
                element:<DetailsPage></DetailsPage>
            },
            {
                path:'/chackout',
                element:<PrivetRouts><ChackoutPage></ChackoutPage></PrivetRouts>
            },
        ]
    }
])