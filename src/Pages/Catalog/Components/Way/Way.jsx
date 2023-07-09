import { NavLink } from 'react-router-dom';
import { ReactComponent as Right } from '../../../../assets/arrRight.svg';
import { AppRoute } from '../../../../enum/app-route';
import css from './Way.module.css';

// eslint-disable-next-line react/prop-types
const Way = ({ params }) => {
  // eslint-disable-next-line react/prop-types
  const { id } = params;

  return (
    <section className={css.section}>
      <div className={css.container}>
        <nav className={css.nav}>
          <NavLink to={AppRoute.ROOT} className={css.link}>
            home
          </NavLink>
          <Right className={css.svg} />
          <NavLink to={AppRoute.CATALOG} className={css.link}>
            catalog
          </NavLink>
          {Object.keys(params).length !== 0 && (
            <>
              <Right className={css.svg} />
              <NavLink
                to={{ pathname: `${AppRoute.CATALOG}/${params}` }}
                className={css.link}
              >
                {id}
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </section>
  );
};

export default Way;
