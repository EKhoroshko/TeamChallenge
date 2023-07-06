import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../../../enum/app-route';
import css from './Category.module.css';

// eslint-disable-next-line react/prop-types
const CategoryCard = ({ title, bg }) => {
  return (
    <li
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className={css.wrapper}
    >
      <NavLink className={css.navigate} to={AppRoute.CATALOG}>
        <h4 className={css.title}>{title}</h4>
        <svg viewBox="0 0 45 24" className={css.svg}>
          <path d="M44.0607 13.0607C44.6464 12.4749 44.6464 11.5251 44.0607 10.9393L34.5147 1.3934C33.9289 0.807611 32.9792 0.807611 32.3934 1.3934C31.8076 1.97919 31.8076 2.92893 32.3934 3.51472L40.8787 12L32.3934 20.4853C31.8076 21.0711 31.8076 22.0208 32.3934 22.6066C32.9792 23.1924 33.9289 23.1924 34.5147 22.6066L44.0607 13.0607ZM0 13.5H43V10.5H0V13.5Z" />
        </svg>
      </NavLink>
    </li>
  );
};

export default CategoryCard;
