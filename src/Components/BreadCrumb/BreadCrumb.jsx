import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Right } from '../../assets/arrRight.svg';
import { AppRoute } from '../../enum/app-route';
import css from './BreadCrumb.module.css';

const BreadCrumb = () => {
  let location = useLocation();
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '');

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
            <NavLink key={index} to={breadcrumb.url} className={css.link}>
              <Right className={css.svg} />
              <p className={css.label}>{breadcrumb.label}</p>
            </NavLink>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default BreadCrumb;
