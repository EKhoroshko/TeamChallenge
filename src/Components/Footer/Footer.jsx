import style from './Footer.module.css';
import svg from './../../assets/footer-icons.svg';
import {NavLink} from "react-router-dom";
import {AppRoute} from "../../enum/app-route.js";

const Footer = () => {
  return (
      <div className={style.footer}>

        <div className={style.footer_nav}>
          <div className={style.footer_nav_item}>
            <ul>
                <NavLink to={AppRoute.DELIVERY}>
                    <li><b>About</b></li>
                </NavLink>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                    <li>Terms and condition</li>
            </ul>
              <ul>
                  <li><b>Support</b></li>
                  <li>Shipping info</li>
                  <li>Track order</li>
                  <li>Help/FAQ</li>
              </ul>
              <ul>
                  <li><b>Contact us</b></li>
                  <li>Call us: +38 (050) 000 00 00</li>
                  <li>Email us: petsshop@gmail.com</li>
                  <li className={style.footer_icons}><img src={svg} alt='footer-icons'/></li>
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
