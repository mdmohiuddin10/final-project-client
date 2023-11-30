import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import BioData from "../pages/BioData/BioData";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import About from "../pages/About/About";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import EditBioData from "../pages/Dashboard/EditBioData/EditBioData";
import ViewBioData from "../pages/Dashboard/ViewBioData/ViewBioData";
import ContactRequest from "../pages/Dashboard/ContactRequest/ContactRequest";
import FavouriteBioData from "../pages/Dashboard/FavouriteBioData/FavouriteBioData";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import ApprovedPremium from "../pages/Dashboard/ApprovedPremium/ApprovedPremium";
import ApproveContact from "../pages/Dashboard/ApproveContact/ApproveContact";
import PrivateRouts from "./PrivateRouts";
import DetailsData from "../pages/Details/DetailsData";
import GotMarried from "../pages/Dashboard/GotMarried/GotMarried";
import SuccessStory from "../pages/Dashboard/SuccessStory/SuccessStory";
import Contact from "../pages/Contact/Contact";
import Profile from "../pages/Profile/Profile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Request from "../pages/Request/Request";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Home',
                element: <Home></Home>
            },
            {
                path: '/Bio data',
                element: <BioData></BioData>,
                loader: ()=>fetch('http://localhost:5000')
            },
            {
                path: '/details/:id',
                element: <PrivateRouts><DetailsData></DetailsData></PrivateRouts>,
                loader: ()=>fetch('http://localhost:5000')
            },
            // {
            //     path: '/checkout/:id',
            //     element:<Checkout></Checkout>,
            //     loader: ()=>fetch('http://localhost:5000/biodata')  
            // },
            {
                path: '/About Us',
                element: <About></About>
            },
            {
                path: '/request/:id',
                element: <Request></Request>,
                loader: ()=>fetch('http://localhost:5000')
            },
            {
                path: '/contact Us',
                element: <Contact></Contact>
            },
            {
                path: '/Sign up',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/Profile',
                element: <Profile></Profile>
            },
        ])
    },
    {
        path: 'dashboard',
        element: <PrivateRouts><Dashboard></Dashboard></PrivateRouts>,
        children: [
            // admin route
            {
                path: 'admin home',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'manage users',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'approve',
                element: <ApprovedPremium></ApprovedPremium>,
                loader: ()=>fetch('http://localhost:5000')
            },
            {
                path: 'Approve request contact',
                element: <ApproveContact></ApproveContact>
            },
            {
                path: 'success story',
                element: <SuccessStory></SuccessStory>
            },
            // Normal Users
            {
                path: 'edit data',
                element: <EditBioData></EditBioData>
            },
            {
                path: 'view data',
                element: <ViewBioData></ViewBioData>
            },
            {
                path: 'contact request',
                element: <ContactRequest></ContactRequest>
            },
            {
                path: 'favourite data',
                element: <FavouriteBioData></FavouriteBioData>,
            },
            {
                path: 'Got Married',
                element: <GotMarried></GotMarried>
            },
        ]
    }
]);

export default router