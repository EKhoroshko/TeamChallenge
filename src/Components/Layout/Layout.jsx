import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { refreshToken } from '../../redux/user/operation';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import css from './Layout.module.css';

const Layout = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      dispatch(refreshToken(token));
    }
  }, [dispatch, token]);

  return (
    <main className={css.main}>
      <Header />
      <Outlet />
      <ToastContainer />
      <Footer />
    </main>
  );
};

export default Layout;
