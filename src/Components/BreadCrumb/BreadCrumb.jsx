import propTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Slash } from '../../assets/slash.svg';
import { AppRoute } from '../../enum/app-route';
import css from './BreadCrumb.module.css';

const BreadCrumb = ({ way, handleResetFilter }) => {
  let location = useLocation();
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '')
    .filter(segment => segment !== way);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
    return {
      label: segment,
      url: url === '' ? '/' : url,
    };
  });

  return (
    <section className={css.section}>
      <div className={css.container}>
        <nav className={css.nav}>
          <NavLink to={AppRoute.ROOT} className={css.link}>
            <p className={css.label}>home</p>
          </NavLink>
          {breadcrumbs.map((breadcrumb, index) => (
            <NavLink
              onClick={handleResetFilter}
              key={index}
              to={{ pathname: breadcrumb.url, search: '?page=1' }}
              className={css.link}
            >
              <Slash className={css.svg} />
              <p className={css.label}>{breadcrumb.label}</p>
            </NavLink>
          ))}
        </nav>
      </div>
    </section>
  );
};

BreadCrumb.propTypes = {
  way: propTypes.string,
  handleResetFilter: propTypes.func,
};

export default BreadCrumb;
