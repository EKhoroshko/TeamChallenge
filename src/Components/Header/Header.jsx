import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRoute } from '../../enum/app-route.js';
import { toastAction } from '../../enum/toastAction.js';
import { getUser } from '../../redux/user/selectors.js';
import { toast } from 'react-toastify';
import Logo from '../../assets/newDesign/size1440/header/logo.png';
import css from './Header.module.css';

const Header = () => {
  const { username, token } = useSelector(getUser);

  useEffect(() => {
    if (token) {
      toast.success(`Welcome ${username}`, toastAction);
    }
  }, [token, username]);

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <div className={css.navBox}>
          <div className={css.container}>
            <ul className={css.boxList}>
              <li className={css.logo}>
              <NavLink to={AppRoute.ROOT}>
                <img src={Logo} alt="logo" />
              </NavLink>
            </li>
              <li className={css.listItem}>
                <NavLink className={css.link} to={AppRoute.PRODUCT}>
                  Catalog
                </NavLink>
              </li>
              <li className={css.listItem}>
                <NavLink className={css.link} to={AppRoute.BLOG}>
                  Blog
                </NavLink>
              </li>
              <li className={css.listItem}>
                <NavLink className={css.link} to={AppRoute.BLOG}>
                  Special offers
                </NavLink>
              </li>
              <li className={css.listItem}>
                <NavLink className={css.link} to={AppRoute.RETURN}>
                  Contacts
                </NavLink>
              </li>
            </ul>
            <a className={css.link} href="tel:+380500000000">
              <Call className={css.call} />
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
              <NavLink className={css.link + ' ' + css.catalog}>
                Catalog
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
                  <>
                    <NavLink to={AppRoute.PROFILE}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path stroke="#111" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                      </svg>
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink to={AppRoute.LOGIN}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path stroke="#111" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                      </svg>
                    </NavLink>
                  </>
                )}
              </li>
              <li>
                <NavLink to={AppRoute.FAVORITE}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                    <path stroke="#111" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16.544 3.75c-3.043 0-4.543 3-4.543 3s-1.5-3-4.544-3C4.984 3.75 3.026 5.82 3 8.288c-.051 5.125 4.066 8.77 8.579 11.832a.75.75 0 0 0 .843 0c4.512-3.063 8.63-6.707 8.578-11.832-.025-2.469-1.983-4.538-4.456-4.538Z" />
                  </svg>
                </NavLink>
              </li>
              <li>
                <NavLink to={AppRoute.BASKET}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                    <path stroke="#111" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
