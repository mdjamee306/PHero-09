import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Store from "../pages/Store/Store";
import Contact from "../pages/Contact/Contact";
import Details from "../pages/Details/Details";
import Services from "../pages/Services/Services";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Private from "../pages/PrivateRouts/Private";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("/onedata.json")
            },
            {
                path: '/store',
                element: <Private><Store></Store></Private>
            },
            {
                path: '/services',
                element: <Private><Services></Services></Private>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
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
                path: '/card/:id',
                element: <Private><Details></Details></Private>,
                loader: () => fetch("/onedata.json")
            }
        ]
    }
]);
export default router;