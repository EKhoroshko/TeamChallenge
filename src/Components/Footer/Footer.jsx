
import {NavLink} from "react-router-dom";
import {AppRoute} from "../../enum/app-route.js";
import style from './Footer.module.css';

const Footer = () => {
  return (
      <div className={style.footer}>
        <div className={style.footer_nav}>
          <div className={style.footer_nav_item}>
            <ul>
              <li><b>About</b></li>
              <li><a href="Footer.jsx#contact">Contact us</a></li>
              <NavLink to={AppRoute.PRIVACY_POLICY}>
                <li className={style.li_hover}>Privacy policy</li>
              </NavLink>
              <NavLink to={AppRoute.TERM_CONDITION}>
                <li className={style.li_hover}>Terms and condition</li>
              </NavLink>
            </ul>
            <ul>
              <li><b>Support</b></li>
              <li>Shipping info</li>
              <li>Track order</li>
              <NavLink to={AppRoute.FAQ}>
                <li className={style.li_hover}>Help/FAQ</li>
              </NavLink>
            </ul>
            <ul>
              <li><b>Contact us</b></li>
              <li id="contact"><a href="tel: +380500000000">Call us: +38 (050) 000 00 00</a></li>
              <li><a href="mailto: petsshop@gmail.com">Email us: petsshop@gmail.com</a></li>

              <span className={style.footer_icons}>
              <a href="https://www.facebook.com/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 25 25"
              >
                <path d="M10.002.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7h-2.54v-2.9h2.54V7.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 25 25"
              >
                <path d="M5.801.001h8.4c3.2 0 5.8 2.6 5.8 5.8v8.4a5.8 5.8 0 0 1-5.8 5.8h-8.4c-3.2 0-5.8-2.6-5.8-5.8v-8.4a5.8 5.8 0 0 1 5.8-5.8Zm-.2 2a3.6 3.6 0 0 0-3.6 3.6v8.8c0 1.99 1.61 3.6 3.6 3.6h8.8a3.6 3.6 0 0 0 3.6-3.6v-8.8c0-1.99-1.61-3.6-3.6-3.6h-8.8Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm-5.25 1.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
                </svg>
              </a>
              <a href="https://web.telegram.org/a/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 25 25"
              >
                <path d="M10.002.001c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10Zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38Z"/>
                </svg>
              </a>
              </span>
            </ul>
          </div>
        </div>

        <div className={style.footer_underground}>
          <div className={style.footer_overline}>
            <div>All rights reserved@shoponline</div>
            <div>Terms and condition</div>
          </div>
        </div>

      </div>
  )
};


export default Footer;

