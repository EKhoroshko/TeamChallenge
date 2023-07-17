import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
    <>
      <aside>тут будет менюшка</aside>
      <button className={css.button} onClick={handlelogOut}>
        logOut
      </button>
    </>
  );
};

export default Profile;
