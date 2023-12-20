import { createBrowserRouter } from "react-router-dom";
import Hero from '../components/Hero'
import Root from "../pages/Root";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
])