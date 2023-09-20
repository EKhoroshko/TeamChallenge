import { useState } from 'react';
import propTypes from 'prop-types';
import Button from '../../../../Components/Button/Button';
import css from './DescriptionSection.module.css';

const DescriptionSection = ({ product }) => {
  const [value, setValue] = useState('description');

  const handleValue = e => setValue(e.target.value);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <Button
          active={css.btnActive}
          style={css.setting}
          onClick={handleValue}
          text="Description"
          value="description"
          name={value}
        />
        <Button
          active={css.btnActive}
          style={css.setting}
          onClick={handleValue}
          text="Reviews"
          value="reviews"
          name={value}
        />
      </div>
      <div className={css.container}>
        {value === 'description' ? (
          product.longDescription
        ) : (
          <>
            <p>br.Akkaki</p>
            <p>i would eat this food</p>
          </>
        )}
      </div>
    </section>
  );
};

DescriptionSection.propTypes = {
  product: propTypes.object,
};

export default DescriptionSection;
