import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserFavoriteList,
  getLoadingUser,
} from '../../../../redux/user/selectors';
import {
  deleteFavoriteProduct,
  refreshToken,
} from '../../../../redux/user/operation';
import { addToCart } from '../../../../helpers/addToCart';
import CatalogCard from '../../../Catalog/Components/CatalogCard/CatalogCard';
import Spinner from '../../../../Components/Spinner/Spinner';
import css from './Favorite.module.css';

const Favorite = () => {
  const dispatch = useDispatch();
  const favoritProducts = useSelector(getUserFavoriteList);
  const isLoading = useSelector(getLoadingUser);
  const [favoritList, setFavoritList] = useState(favoritProducts || []);

  useEffect(() => {
    setFavoritList(favoritProducts || []);
  }, [favoritProducts]);

  const handleDeletProduct = async id => {
    await dispatch(deleteFavoriteProduct(id));
    await dispatch(refreshToken());
  };

  const emptyList =
    favoritList.length !== 0 ? (
      <ul className={css.list}>
        {favoritList &&
          favoritList.map(
            ({
              name,
              price,
              description,
              id,
              category,
              subcategory,
              image,
            }) => {
              return (
                <CatalogCard
                  key={id}
                  description={description}
                  name={name}
                  price={price}
                  category={category}
                  itemId={id}
                  subcategory={subcategory}
                  image={image}
                  margin={css.margin}
                  addToCart={addToCart}
                  handleDeletProduct={handleDeletProduct}
                />
              );
            },
          )}
      </ul>
    ) : (
      <div>Your list is empty</div>
    );

  const load = isLoading ? (
    <div className={css.load}>
      <Spinner />
    </div>
  ) : (
    emptyList
  );

  return load;
};

export default Favorite;
