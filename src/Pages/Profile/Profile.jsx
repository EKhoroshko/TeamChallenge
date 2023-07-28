import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { logOutUser, getFavoriteProduct } from '../../redux/user/operation';
import { getUser } from '../../redux/user/selectors';
import { AppRoute } from '../../enum/app-route';
import Spinner from '../../Components/Spinner/Spinner';
import UserMenu from './Components/UserMenu/UserMenu';
import css from './Profile.module.css';

const Profile = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(getUser);
  const navigate = useNavigate();

  const handlelogOut = async () => {
    await dispatch(logOutUser(token));
    localStorage.removeItem('token');
    navigate(AppRoute.ROOT);
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
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Profile;
