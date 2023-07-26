import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { logOutUser, getFavoriteProduct } from '../../redux/user/operation';
import { getUser } from '../../redux/user/selectors';
import { AppRoute } from '../../enum/app-route';
import UserMenu from './Components/UserMenu/UserMenu';
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

  useEffect(() => {
    dispatch(getFavoriteProduct());
  }, [dispatch]);

  return (
    <section className={css.profile}>
      <div className={css.container}>
        <aside className={css.menu}>
          <UserMenu />
        </aside>
        <div className={css.favoriteList}>
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
