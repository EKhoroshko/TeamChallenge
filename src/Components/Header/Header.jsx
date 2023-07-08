import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRoute } from '../../enum/app-route.js';
import { toastAction } from '../../enum/toastAction.js';
import { getUser } from '../../redux/user/selectors.js';
import { toast } from 'react-toastify';
import Input from '../Input/Input.jsx';
import Call from '../../assets/call.svg';
import Basket from '../../assets/basket.svg';
import Favorite from '../../assets/favorite.svg';
import Person from '../../assets/person.svg';
import Logo from '../../assets/logo.png';
import css from './Header.module.css';

const Header = () => {
  const [qwery, setQwery] = useState('');
  const { username, token } = useSelector(getUser);

  useEffect(() => {
    if (username) {
      toast.success(`Welcome ${username}`, toastAction);
    }
  }, [username]);

  const handleChangeQwerty = e => {
    setQwery(e.target.value);
  };

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <div className={css.navBox}>
          <div className={css.container}>
            <ul className={css.boxList}>
              <li className={css.listItem}>
                <NavLink className={css.link} to={AppRoute.DELIVERY}>
                  Delivery and payment
                </NavLink>
              </li>
              <li className={css.listItem}>
                <a className={css.link} href="#">
                  About us
                </a>
              </li>
              <li className={css.listItem}>
                <NavLink className={css.link} to={AppRoute.BLOG}>
                  Blog
                </NavLink>
              </li>
              <li className={css.listItem}>
                <NavLink className={css.link} to={AppRoute.RETURN}>
                  Exchange and return
                </NavLink>
              </li>
            </ul>
            <a className={css.link} href="tel:+380500000000">
              <img className={css.img} src={Call} alt="phone" />
              +38 (050) 000 00 00
            </a>
          </div>
        </div>

        <ul className={css.navBox2}>
          <div className={css.container}>
            <li>
              <NavLink to={AppRoute.ROOT}>
                <img src={Logo} alt="logo" />
              </NavLink>
            </li>
            <li className={css.boxSearch}>
              <NavLink
                className={css.link + ' ' + css.catalog}
                to={AppRoute.CATALOG}
              >
                Каталог
              </NavLink>
              <Input
                className={css.input}
                type="search"
                name="search"
                value={qwery}
                onChange={handleChangeQwerty}
              />
              <span className={css.textField}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
            </li>
            <li className={css.boxCall}>
              <div className={css.boxCall}>
                {token ? (
                  <NavLink to={AppRoute.PROFILE} className={css.link}>
                    <img src={Person} alt="profile" />
                    {username}
                  </NavLink>
                ) : (
                  <NavLink className={css.link} to={AppRoute.LOGIN}>
                    <img src={Person} alt="profile" />
                    Sign In
                  </NavLink>
                )}
              </div>
              <button className={css.button}>
                <img src={Favorite} alt="heart" />
              </button>
              <NavLink className={css.link} to={AppRoute.BASKET}>
                <img src={Basket} alt="basket" />
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
