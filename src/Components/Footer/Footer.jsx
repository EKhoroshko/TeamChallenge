import {NavLink} from "react-router-dom";
import {AppRoute} from "../../enum/app-route.js";
import FooterIconFacebook from "./FooterSvg/FooterIconFacebook.jsx";
import FooterIconInsta from "./FooterSvg/FooterIconInsta.jsx";
import FooterIconTelegram from "./FooterSvg/FooterIconTelegram.jsx";
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footer_nav_item}>
          <ul>
            <li>
              <b>About</b>
            </li>
            <NavLink to={AppRoute.PRIVACY_POLICY}>
              <li className={style.li_hover}>Privacy policy</li>
            </NavLink>
            <NavLink to={AppRoute.TERM_CONDITION}>
              <li className={style.li_hover}>Terms and condition</li>
            </NavLink>
          </ul>
          <ul>
            <li>
              <b>Support</b>
            </li>
            <li>Shipping info</li>
            <li>Track order</li>
            <NavLink to={AppRoute.FAQ}>
              <li className={style.li_hover}>Help/FAQ</li>
            </NavLink>
          </ul>
          <ul>
            <li>
              <b>Contact us</b>
            </li>
            <li id="contact">
              <a href="tel: +380500000000">Call us: +38 (050) 000 00 00</a>
            </li>
            <li>
              <a href="mailto: petsshop@gmail.com">
                Email us: petsshop@gmail.com
              </a>
            </li>
              <span className={style.footer_icons}>
                <NavLink to="https://www.facebook.com/">
                  <FooterIconFacebook/>
                </NavLink>
                <NavLink to="https://www.instagram.com/">
                  <FooterIconInsta/>
                </NavLink>
                <NavLink to="https://www.telegram.org/">
                  <FooterIconTelegram/>
                </NavLink>
              </span>
            </ul>
          </div>
        </div>
      </div>

      <div className={style.footer_underground}>
        <div className={style.container}>
          <div className={style.footer_overline}>
            <div>All rights reserved@shoponline</div>
            <div>Terms and condition</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
