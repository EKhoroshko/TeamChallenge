import { useParams, Link } from 'react-router-dom';
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
                pathname: `/${title}`,
                search: `?page=1`,
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
