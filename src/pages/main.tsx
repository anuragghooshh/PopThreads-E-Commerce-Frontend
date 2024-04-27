import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/global.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home/home.tsx';
import Layout from './layout.tsx';
import ProductCategory from './productCategory/productCategory.tsx';
import Profile from './profile/profile.tsx';
import Favorites from './favorites/favorites.tsx';
import Cart from './cart/cart.tsx';
import HelpAndSupport from './helpAndSupport/helpAndSupport.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout children={<Home />} />,
  },
  {
    path: '/products/men',
    element: <Layout children={<ProductCategory
      productCategoryName='Men'
      categoryDescr='Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ' />}
    />,
  },
  {
    path: '/products/women',
    element: <Layout children={<ProductCategory
      productCategoryName='Women'
      categoryDescr='Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ' />}
    />,
  },
  {
    path: '/products/footwear',
    element: <Layout children={<ProductCategory
      productCategoryName='Footwear'
      categoryDescr='Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ' />}
    />,
  },
  {
    path: '/products/accessories',
    element: <Layout children={<ProductCategory
      productCategoryName='Accessories'
      categoryDescr='Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ' />}
    />,
  },
  {
    path: '/profile',
    element: <Layout children={<Profile />}
    />,
  },
  {
    path: '/favorites',
    element: <Layout children={<Favorites />}
    />,
  },
  {
    path: '/cart',
    element: <Layout children={<Cart />}
    />,
  },
  {
    path: '/help-and-support',
    element: <Layout children={<HelpAndSupport />} />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
