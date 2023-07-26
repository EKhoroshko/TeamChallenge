import { Link } from 'react-router-dom';
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
      <Link
        className={css.navigate}
        to={{
          pathname: `/${title}`,
        }}
      >
        <h4 className={css.title}>{title}</h4>
      </Link>
    </li>
  );
};

export default CategoryCard;
