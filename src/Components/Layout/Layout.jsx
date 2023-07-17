import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { refreshToken } from '../../redux/user/operation';
import { getAll, getSortetedCategory } from '../../redux/product/operation';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import css from './Layout.module.css';

const Layout = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const params = useParams();

  useEffect(() => {
    if (token) {
      dispatch(refreshToken(token));
    }
  }, [dispatch, token]);

  useEffect(() => {
    const fetchData = async () => {
      if (params.id !== undefined) {
        await dispatch(getSortetedCategory({ category: params.id, page: 1 }));
      } else {
        await dispatch(getAll());
      }
    };

    fetchData();
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
