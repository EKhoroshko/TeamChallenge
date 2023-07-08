import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../../../enum/app-route';
import Input from '../../../../Components/Input/Input';
import css from './AboutUs.module.css';

const AboutUs = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChangeValue = e => {
    setValue(e.target.value);
  };

  const handleSubmmit = () => {
    console.log(`отправляем на бек мейл ${value}`);
    //dispatch();
    setValue('');
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.box}>
          <div className={css.img}></div>
          <div>
            <h3 className={css.title}>About us</h3>
            <p className={css.text}>
              That&prime;s why we offer a range of modern and functional pet
              houses.
            </p>
            <p className={css.description}>
              That&prime;s why we offer a range of modern and functional pet
              houses, ensuring that every furry companion has their private
              space to call their own.
            </p>
            <NavLink className={css.link} to={AppRoute.CATALOG}>
              Shop now
            </NavLink>
          </div>
        </div>
        <div className={css.promo}>
          <p className={css.promoText}>
            Subscribe and be aware of all promotions and offers
          </p>
          <Input
            className={css.input}
            placeholder={'Enter your email'}
            type={'email'}
            name={'subscribe'}
            value={value}
            onChange={handleChangeValue}
            required
          />
          <button type="submit" className={css.button} onClick={handleSubmmit}>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
