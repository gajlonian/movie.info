import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import CatergoryRoot from "../pages/CatergoryRoot";
import TrendingMovie from "../pages/Categories/trending-movie";
import PopularMovie from "../pages/Categories/popular-movie";
import NowPlayingMovie from "../pages/Categories/now-playing-movie";
import UpcomingMovie from "../pages/Categories/upcoming-movie";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path:'/',
                element: <CatergoryRoot />,
                children: [
                    {
                        path:'/',
                        element: <TrendingMovie />
                    },
                    {
                        path:'/popular',
                        element: <PopularMovie />
                    },
                    {
                        path:'/now_playing',
                        element: <NowPlayingMovie />
                    },
                    {
                        path:'/upcoming',
                        element: <UpcomingMovie />
                    }
                ]
            }
        ]
    },
])