import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Stats from './components/Stats/Stats';
import GadgetDetails from './components/GadgetDetails/GadgetDetails';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
import Blog from './components/Blog/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'gadgets/:product_id',
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch('/gadgetsData.json')
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'cart',
        element: <Cart></Cart>,
        loader: () => fetch('/gadgetsData.json')
      },
      {
        path: `wishlist`,
        element: <Wishlist></Wishlist>
      },
      {
        path: 'stats',
        element: <Stats></Stats>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
