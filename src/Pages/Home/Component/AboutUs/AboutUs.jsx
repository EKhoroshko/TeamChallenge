import { useState } from 'react';
import { Link } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { subscribeUser } from '../../../../redux/user/operation';
import { getUserSubscribe } from '../../../../redux/user/selectors';
import Input from '../../../../Components/Input/Input';
import css from './AboutUs.module.css';

const AboutUs = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const subscribe = useSelector(getUserSubscribe);

  const handleChangeValue = e => {
    setValue(e.target.value);
  };

  const validateEmail = email => {
    const emailRegex =
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleSubmmit = () => {
    if (validateEmail(value)) {
      dispatch(subscribeUser(value));
    }
    setValue('');
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.box}>
          <div className={css.img}></div>
          <div className={css.textContainer}>
            <p className={css.text}>
              Everything for your pets and even more in the online store
              &quot;Pets&quot;.
            </p>
            <p className={css.description}>
              That&prime;s why we offer a range of modern and functional pet
              houses, ensuring that every furry companion has their private
              space to call their own.
            </p>
            <Link
              className={css.link}
              to="catalog"
              smooth={true}
              duration={500}
            >
              Shop now
            </Link>
          </div>
        </div>
        {!subscribe ? (
          <>
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
              <button
                type="submit"
                className={css.button}
                onClick={handleSubmmit}
              >
                Subscribe
              </button>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default AboutUs;
