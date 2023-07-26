import propTypes from 'prop-types';
import FilterItem from './FilterItem';
import { subcategoryList } from '../../../../enum/category';
import css from './FilterPanel.module.css';

const FilterPanel = ({ params }) => {
  console.log(params);

  const fill = params.subcategory ? (
    <div>Тут теперь фильтра</div>
  ) : (
    <>
      {subcategoryList[params.id].map((item, index) => {
        return <FilterItem key={index} item={item} params={params.id} />;
      })}
    </>
  );

  return (
    <aside className={css.aside}>
      <p>Product category</p>

      <ul>{fill}</ul>
    </aside>
  );
};

FilterPanel.propTypes = {
  params: propTypes.object,
};

export default FilterPanel;
