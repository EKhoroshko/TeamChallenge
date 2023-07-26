import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../../../enum/app-route';

const UserMenu = () => {
  return (
    <ul>
      <NavLink to={AppRoute.PROFILE}>
        <li>Information</li>
      </NavLink>
      <NavLink to={AppRoute.FAVORITE}>
        <li>Favorite</li>
      </NavLink>
      <NavLink to={AppRoute.HISTORY}>
        <li>History</li>
      </NavLink>
    </ul>
  );
};

export default UserMenu;
