import { useState } from 'react';
import css from './FilterPanel.module.css';

const FilterPanel = () => {
  const [select, setSelect] = useState('Choose a category');
  console.log(select);

  const handleChangeSelect = e => {
    setSelect(e.target.value);
  };

  const handleResetForm = e => {
    e.preventDefault();
    setSelect('Choose a category');
  };

  return (
    <aside className={css.aside}>
      <form action="" className={css.form}>
        <label className={css.label}>
          Product category
          <select
            name="Product category"
            id="category"
            value={select}
            className={css.select}
            onChange={handleChangeSelect}
          >
            <option disabled>Choose a category</option>
            <option value="Toy">Toy</option>
            <option value="Feed">Feed</option>
            <option value="Accessories">Accessories</option>
          </select>
        </label>
        <button onClick={handleResetForm} className={css.btnReset}>
          Reset
        </button>
      </form>
    </aside>
  );
};

export default FilterPanel;
