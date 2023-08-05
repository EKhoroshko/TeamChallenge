import { useState } from 'react';
import propTypes from 'prop-types';
import { ReactComponent as Up } from '../../assets/dropdownArrow/up.svg';
import { ReactComponent as Down } from '../../assets/dropdownArrow/down.svg';
import CheckBox from '../CheckBox/CheckBox';
import css from './DropDown.module.css';

const DropDawn = ({ title, availableTypes }) => {
  const [openDropDown, setOpenDropDown] = useState(true);

  const toggleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <>
      <button type="button" onClick={toggleDropDown} className={css.btn}>
        <p className={css.title}>{title}</p>
        {openDropDown ? (
          <Up className={css.svg} />
        ) : (
          <Down className={css.svg} />
        )}
      </button>
      {openDropDown ? (
        <ul>
          {availableTypes &&
            availableTypes.map(item => <CheckBox key={item} type={item} />)}
        </ul>
      ) : null}
    </>
  );
};

DropDawn.propTypes = {
  title: propTypes.string,
  availableTypes: propTypes.array,
};

export default DropDawn;
