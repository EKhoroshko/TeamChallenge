import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';
import css from './Layout.module.css';

const Layout = () => {
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
