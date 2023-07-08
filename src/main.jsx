import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute } from './enum/app-route';
import { Provider } from 'react-redux';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import ErrorPages from './Pages/ErrorPage/ErrorPages';
import Catalog from './Pages/Catalog/Catalog';
import Basket from './Pages/Basket/Basket';
import Profile from './Pages/Profile/Profile';
import Delivery from './Pages/Delivery/Delivery';
import Blog from './Pages/Blog/Blog';
import Return from './Pages/Return/Return';
import About from './Pages/About/About';
import store from './redux/store';
import './index.css';

const router = createBrowserRouter([
  {
    path: AppRoute.ROOT,
    element: <Layout />,
    errorElement: <ErrorPages />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: AppRoute.CATALOG,
        element: <Catalog />,
      },
      {
        path: AppRoute.PROFILE,
        element: <Profile />,
      },
      {
        path: AppRoute.DELIVERY,
        element: <Delivery />,
      },
      {
        path: AppRoute.BLOG,
        element: <Blog />,
      },
      {
        path: AppRoute.RETURN,
        element: <Return />,
      },
      {
        path: AppRoute.ABOUT,
        element: <About />,
      },
    ],
  },
  {
    path: AppRoute.BASKET,
    element: <Basket />,
    errorElement: <ErrorPages />,
  },
  {
    path: AppRoute.LOGIN,
    element: <LoginPage />,
    errorElement: <ErrorPages />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
