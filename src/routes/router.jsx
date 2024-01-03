import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import PostDetail from "../pages/PostDetail";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },  
    {
        path:'/movies',
        element: <div>Movies</div>
    },
    {
        path: '/:media_type/:id',
        element: <PostDetail />
    }
])