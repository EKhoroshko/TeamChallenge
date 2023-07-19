import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { refreshToken } from '../../redux/user/operation';
import { getAll } from '../../redux/product/operation';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import css from './Layout.module.css';

const Layout = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  useEffect(() => {
    if (params.id === undefined) {
      const fetchData = async () => {
        await dispatch(getAll(1));
      };

      fetchData();
    }
  }, [dispatch, params.id]);

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
