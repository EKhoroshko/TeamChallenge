import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../enum/app-route';
import NotFound from '../../assets/NotFound.webp';
import css from './ErrorPages.module.css';

const ErrorPages = () => {
  return (
    <main className={css.main}>
      <header>
        <NavLink to={AppRoute.ROOT}> На главную</NavLink>
      </header>
      <img src={NotFound} alt="404" />
    </main>
  );
};

export default ErrorPages;
