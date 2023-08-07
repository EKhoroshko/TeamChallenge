import propTypes from 'prop-types';
import FilterItem from './FilterItem';
import { subcategoryList } from '../../../../enum/category';
import DropDawn from '../../../../Components/DropDawn/DropDawn';
import InputRange from '../../../../Components/InputRange/InputRange';
import css from './FilterPanel.module.css';

const FilterPanel = ({ params, maxPrice, availableTypes, availableBrands }) => {
  const filter = params.subcategory ? (
    <ul>
      <li className={css.item}>
        {availableBrands !== undefined ? (
          <DropDawn
            sub={params.subcategory}
            title="Brand"
            available={availableBrands}
          />
        ) : null}
      </li>
      <li className={css.itemRange}>
        <InputRange maxPrice={maxPrice} />
      </li>
      <li className={css.item}>
        {availableTypes !== undefined ? (
          <DropDawn
            sub={params.subcategory}
            title="Type"
            available={availableTypes}
          />
        ) : null}
      </li>
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
      <ul>{filter}</ul>
    </aside>
  );
};

FilterPanel.propTypes = {
  params: propTypes.object,
  maxPrice: propTypes.number,
  availableTypes: propTypes.array,
  availableBrands: propTypes.array,
};

export default FilterPanel;
