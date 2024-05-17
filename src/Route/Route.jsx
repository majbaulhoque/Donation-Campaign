import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorElement from "../Pages/Error Element/ErrorElement";
import DonationItem from "../Pages/Donation Item/DonationItem";
import DonationItemCard from "../Pages/Donation Item/DonationItemCard";



const  myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/card.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>,
            },
            {
                path: '/statistic',
                element: <Statistics></Statistics>,
            },
            {
                path: '/phones/:id',
                element: <DonationItem></DonationItem>,
                loader: () => fetch('/card.json')
            },
            {
                path: '/viewDetails',
                element: <DonationItemCard></DonationItemCard>,
            },
        ],
    },
]);
export default myCreatedRoute;