import { useCallback } from 'react';
import {
  addToFavoriteProduct,
  refreshToken,
  deleteFavoriteProduct,
} from '../redux/user/operation';
import { useDispatch } from 'react-redux';

export const useFavoriteProduct = () => {
  const dispatch = useDispatch();

  const handleAddFavorite = useCallback(
    async id => {
      await dispatch(addToFavoriteProduct(id));
      await dispatch(refreshToken());
    },
    [dispatch],
  );

  const handleDeletProduct = useCallback(
    async id => {
      await dispatch(deleteFavoriteProduct(id));
      await dispatch(refreshToken());
    },
    [dispatch],
  );

  return {
    handleAddFavorite,
    handleDeletProduct,
  };
};
