import { NavLink, useLocation, useMatches } from 'react-router-dom';
import { ReactComponent as Right } from '../../../../assets/arrRight.svg';
import { AppRoute } from '../../../../enum/app-route';
import css from './Way.module.css';

const Way = () => {
  const location = useLocation();
  const matches = useMatches();
  console.log(matches);
  console.log(location);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <nav className={css.nav}>
          <NavLink to={AppRoute.ROOT} className={css.link}>
            Home
          </NavLink>
          <Right className={css.svg} />
          <NavLink to={AppRoute.CATALOG} className={css.link}>
            Catalog
          </NavLink>
        </nav>
      </div>
    </section>
  );
};

export default Way;
