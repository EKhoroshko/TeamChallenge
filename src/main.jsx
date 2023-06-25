import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute } from './enum/app-route';
import { Provider } from 'react-redux';
import Home from './Pages/Home/Home';
import Registration from './Pages/Registration/Registration';
import LoginPage from './Pages/LoginPage/LoginPage';
import ErrorPages from './Pages/ErrorPage/ErrorPages';
import store from './redux/store';
import './index.css';

const router = createBrowserRouter([
  {
    path: AppRoute.ROOT,
    element: <Home />,
    errorElement: <ErrorPages />,
  },
  {
    path: AppRoute.LOGIN,
    element: <LoginPage />,
    errorElement: <ErrorPages />,
  },
  {
    path: AppRoute.REGISTRATION,
    element: <Registration />,
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
