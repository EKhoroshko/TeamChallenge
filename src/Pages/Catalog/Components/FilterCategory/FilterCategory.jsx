import propTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { Categorys } from '../../../../enum/category';
import SelectFilter from '../SelectFilter/SelectFilter';
import css from './FilterCategory.module.css';

const FilterCategory = ({
  select,
  handleChangeFilterSelectRange,
  availableSorts,
  handleResetFilter,
}) => {
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
                onClick={handleResetFilter}
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
      {params.subcategory ? (
        <SelectFilter
          select={select}
          handleChangeFilterSelectRange={handleChangeFilterSelectRange}
          availableSorts={availableSorts}
        />
      ) : null}
    </>
  );
};

FilterCategory.propTypes = {
  select: propTypes.string,
  handleChangeFilterSelectRange: propTypes.func,
  availableSorts: propTypes.array,
  handleResetFilter: propTypes.func,
};

export default FilterCategory;
