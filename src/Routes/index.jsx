import { createBrowserRouter } from "react-router-dom" 
import App from "../App" 
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter ([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'about',
                element:<PrivateRoute><About></About></PrivateRoute>
            },
            {
                path:'contact',
                element:<PrivateRoute><Contact></Contact></PrivateRoute>
            },
        ]
    },
    {
        path:'/login',
        element:<LogIn></LogIn>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
]);
export default routes