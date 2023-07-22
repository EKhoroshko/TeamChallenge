import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { logOutUser } from '../../redux/user/operation';
import { getUser } from '../../redux/user/selectors';
import { AppRoute } from '../../enum/app-route';
import css from './Profile.module.css';

const Profile = () => {
  const dispatch = useDispatch();
  const { token, loading } = useSelector(getUser);
  const navigate = useNavigate();

  const handlelogOut = () => {
    dispatch(logOutUser(token));
    localStorage.removeItem('token');
    if (!loading) {
      navigate(AppRoute.ROOT);
    }
  };

  return (
    <section className={css.profile}>
      <div className={css.container}>
        <aside className={css.menu}>
          <ul>
            <NavLink>
              <li>Info profile</li>
            </NavLink>
            <NavLink to={AppRoute.FAVORITE}>
              <li>Favorite</li>
            </NavLink>
            <NavLink>
              <li>History</li>
            </NavLink>
          </ul>
        </aside>
        <div>
          <button className={css.button} onClick={handlelogOut}>
            logOut
          </button>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Profile;
