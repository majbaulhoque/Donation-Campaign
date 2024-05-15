import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorElement from "../Pages/Error Element/ErrorElement";



const  myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/donation',
                element: <Donation></Donation>,
            },
            {
                path: '/statistic',
                element: <Statistics></Statistics>,
            },
        ],
    },
]);
export default myCreatedRoute;