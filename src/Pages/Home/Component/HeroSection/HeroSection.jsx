import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../../../enum/app-route';
import css from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={css.heroSection}>
      <div className={css.container}>
        <div className={css.box}>
          <h2 className={css.title}>With care and love for animals</h2>
          <p className={css.description}>
            Online store for the sale of products for pets with delivery
            throughout Ukraine!
          </p>
          <NavLink className={css.link} to={AppRoute.CATALOG}>
            Shop now
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;