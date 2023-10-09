import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Store from "../pages/Store/Store";
import Contact from "../pages/Contact/Contact";
import Details from "../pages/Details/Details";
import Services from "../pages/Services/Services";
import Error from "../pages/Error/Error";

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
                element: <Store></Store>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/card/:id',
                element: <Details></Details>,
                loader: () => fetch("/onedata.json")
            }
        ]
    }
]);
export default router;