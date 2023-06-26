import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../enum/app-route.js';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <img src="#" alt="logo" />
      <nav className={css.nav}>
        <div>
          <NavLink to={AppRoute.CATALOG}> Каталог</NavLink>
          <input type="text" />
        </div>
        <div className={css.box}>
          <NavLink to={AppRoute.LOGIN}>Войти</NavLink>
          <NavLink to={AppRoute.BASKET}>Корзина</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
