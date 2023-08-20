import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getUserFavoriteList,
  getLoadingUser,
  getUserToken,
} from '../../../../redux/user/selectors';
import { useFavoriteProduct } from '../../../../helpers/favoritproduct';
import { addToCart } from '../../../../helpers/addToCart';
import CatalogCard from '../../../Catalog/Components/CatalogCard/CatalogCard';
import Spinner from '../../../../Components/Spinner/Spinner';
import css from './Favorite.module.css';

const Favorite = () => {
  const favoritProducts = useSelector(getUserFavoriteList);
  const isLoading = useSelector(getLoadingUser);
  const token = useSelector(getUserToken);
  const [favoritList, setFavoritList] = useState(favoritProducts || []);
  const { handleDeletProduct } = useFavoriteProduct();

  useEffect(() => {
    setFavoritList(favoritProducts || []);
  }, [favoritProducts]);

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
                  token={token}
                  isLoading={isLoading}
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
