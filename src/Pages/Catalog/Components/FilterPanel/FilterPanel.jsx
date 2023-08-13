import propTypes from 'prop-types';
import FilterItem from './FilterItem';
import { subcategoryList } from '../../../../enum/category';
import DropDawn from '../../../../Components/DropDawn/DropDawn';
import InputRange from '../../../../Components/InputRange/InputRange';
import css from './FilterPanel.module.css';

const FilterPanel = ({
  params,
  maxPrice,
  availableTypes,
  availableBrands,
  handleChangeBrand,
  handleChangeType,
  handleChangeFilterSelectRange,
  range,
  handleResetFilter,
}) => {
  const filter = params.subcategory ? (
    <ul>
      <li className={css.item}>
        {availableBrands !== undefined ? (
          <DropDawn
            title="Brand"
            available={availableBrands}
            handleChange={handleChangeBrand}
          />
        ) : null}
      </li>
      <li className={css.itemRange}>
        <InputRange
          maxPrice={maxPrice}
          handleChangeFilterSelectRange={handleChangeFilterSelectRange}
          range={range}
        />
      </li>
      <li className={css.item}>
        {availableTypes !== undefined ? (
          <DropDawn
            title="Type"
            available={availableTypes}
            handleChange={handleChangeType}
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
        {params.subcategory ? (
          <button
            type="button"
            onClick={handleResetFilter}
            className={css.btnReset}
          >
            Reset
          </button>
        ) : null}
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
  handleChangeBrand: propTypes.func,
  handleChangeType: propTypes.func,
  handleChangeFilterSelectRange: propTypes.func,
  range: propTypes.number,
  handleResetFilter: propTypes.func,
};

export default FilterPanel;
