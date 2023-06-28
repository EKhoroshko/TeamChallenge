import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { AppRoute } from '../../enum/app-route.js';
import css from './Header.module.css';

const Header = () => {
  const [qwery, setQwery] = useState('');

  const handleChangeQwerty = e => {
    setQwery(e.target.value);
  };

  return (
    <header className={css.header}>
      <img src="#" alt="logo" />
      <nav className={css.nav}>
        <div>
          <NavLink className={css.link} to={AppRoute.CATALOG}>
            Каталог
          </NavLink>
          <input
            className={css.input}
            type="text"
            name="text"
            value={qwery}
            onChange={handleChangeQwerty}
          />
        </div>
        <div className={css.box}>
          <NavLink className={css.link} to={AppRoute.LOGIN}>
            Войти
          </NavLink>
          <NavLink className={css.link} to={AppRoute.BASKET}>
            Корзина
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
