import { useParams, Link } from 'react-router-dom';
import { AppRoute } from '../../../../enum/app-route';
import { Categorys } from '../../../../enum/category';
import css from './FilterCategory.module.css';

const FilterCategory = () => {
  const params = useParams();

  return (
    <>
      {Object.keys(Categorys) !== undefined &&
        Categorys.map(({ id, title }) => {
          const active = params.id === title;
          const style = active ? css.link + ' ' + css.active : css.link;
          return (
            <Link
              className={style}
              to={{
                pathname: `${AppRoute.CATALOG}/${title}`,
              }}
              key={id}
            >
              {title}
            </Link>
          );
        })}
    </>
  );
};

export default FilterCategory;
