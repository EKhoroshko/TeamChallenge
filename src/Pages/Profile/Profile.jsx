import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../redux/user/operation';
import { getUserToken } from '../../redux/user/selectors';
import css from './Profile.module.css';

const Profile = () => {
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);

  const handlelogOut = () => {
    dispatch(logOutUser(token));
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
