import style from './Footer.module.css';
import svg from './../../assets/footer-icons.svg';


const Footer = () => {
  return (
      <div className={style.footer}>
        <div className={style.footer_nav}>
          <div className={style.footer_nav_item}>
            <ul>
              <li>About</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
              <li>Terms and condition</li>
            </ul>
              <ul>
                  <li>Support</li>
                  <li>Shipping info</li>
                  <li>Track order</li>
                  <li>Help/FAQ</li>
              </ul>
              <ul>
                  <li>Contact us</li>
                  <li>Call us: +38 (050) 000 00 00</li>
                  <li>Email us: petsshop@gmail.com</li>
                  <li><img src={svg} alt='footer-icons'/></li>
              </ul>
          </div>
        </div>
      </div>
  )
};


export default Footer;
