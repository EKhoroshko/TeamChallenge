import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <main className={css.main}>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
