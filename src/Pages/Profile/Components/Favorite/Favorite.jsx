import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAddFavoriteProduct } from '../../../../redux/user/operation';

const Favorite = () => {
  const dispatch = useDispatch();
  const [favoritList, setFavoritList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const list = await dispatch(getAddFavoriteProduct());
      await setFavoritList(list);
    };

    fetchData();
  }, [dispatch]);

  console.log(favoritList);

  return <div>Favorite</div>;
};

export default Favorite;
