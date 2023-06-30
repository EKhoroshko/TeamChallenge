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
    ],
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
