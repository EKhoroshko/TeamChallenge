import { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { refreshToken } from '../../redux/user/operation';
import { getAll } from '../../redux/product/operation';
import Spinner from '../Spinner/Spinner';
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
        await dispatch(getAll({ page: 1 }));
      };

      fetchData();
    }
  }, [dispatch, params.id]);

  return (
    <div className={css.main}>
      <Header />
      <Suspense fallback={<Spinner />}>
        <main className={css.outlet}>
          <Outlet />
        </main>
      </Suspense>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default Layout;
