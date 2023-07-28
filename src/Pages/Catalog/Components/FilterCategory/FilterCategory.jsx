import propTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { Categorys } from '../../../../enum/category';
import DropdownFilter from '../DropdownFilter/DropdownFilter';
import css from './FilterCategory.module.css';

const FilterCategory = ({ select, handleChangeSelect }) => {
  const params = useParams();

  return (
    <>
      <div className={css.box}>
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
      </div>
      <DropdownFilter select={select} handleChangeSelect={handleChangeSelect} />
    </>
  );
};

FilterCategory.propTypes = {
  select: propTypes.string,
  handleChangeSelect: propTypes.func,
};

export default FilterCategory;
