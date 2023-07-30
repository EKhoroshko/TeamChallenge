import propTypes from 'prop-types';
import FilterItem from './FilterItem';
import { subcategoryList } from '../../../../enum/category';
import DropDawn from '../../../../Components/DropDawn/DropDawn';
import InputRange from '../../../../Components/InputRange/InputRange';
import css from './FilterPanel.module.css';

const FilterPanel = ({ params }) => {
  console.log(params);

  const fill = params.subcategory ? (
    <ul>
      <DropDawn sub={params.subcategory} title="Brand" />
      <InputRange maxPrice="5000" />
      <DropDawn sub={params.subcategory} title="Type" />
    </ul>
  ) : (
    <>
      {subcategoryList[params.id].map((item, index) => {
        return <FilterItem key={index} item={item} params={params.id} />;
      })}
    </>
  );

  return (
    <aside className={css.aside}>
      <div className={css.boxReset}>
        <p className={css.title}>Select a category:</p>
        <button type="button" className={css.btnReset}>
          Reset
        </button>
      </div>
      <ul>{fill}</ul>
    </aside>
  );
};

FilterPanel.propTypes = {
  params: propTypes.object,
};

export default FilterPanel;
