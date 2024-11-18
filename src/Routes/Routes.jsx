import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Layouts/Pages/Home/Home";
import PagePopular from "../Layouts/Pages/PagePopular/PagePopular";
import DetailsMovie from "../Layouts/Pages/DetailsPage/DetailsMovie";
import Signin from "../Layouts/Pages/Account/Signin";
import Signup from "../Layouts/Pages/Account/Signup";
import FavoriteList from "../Layouts/Pages/FavoriteList/FavoriteList";
import PageTopRated from "../Layouts/Pages/PageTopRated/PageTopRated";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: 'popular',
          element: <PagePopular></PagePopular>
        },
        {
          path: 'toprated',
          element: <PageTopRated></PageTopRated>
        },
        {
          path: 'details/:id',
          element: <DetailsMovie></DetailsMovie>
        },
        {
          path: 'signin',
          element: <Signin></Signin>
        },
        {
          path: 'signup',
          element: <Signup></Signup>
        },
        {
          path: 'favoritelist',
          element: <FavoriteList></FavoriteList>
        }

      ]
    },
  ]);