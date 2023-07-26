import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../helpers/addToCart';
import { getAllProducts } from '../../redux/product/selector';
import { getSortetedCategory } from '../../redux/product/operation';
import {
  addToFavoriteProduct,
  refreshToken,
  deleteFavoriteProduct,
} from '../../redux/user/operation';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import Box from './Components/Box/Box';
import PreviosProduct from './Components/PreviosProduct/PreviosProduct';

const Catalog = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { items, totalPages, currentPage } = useSelector(getAllProducts);
  const [current, setCurrent] = useState(currentPage || 1);

  useEffect(() => {
    if (params.id !== undefined) {
      setCurrent(1);
    }
  }, [params.id]);

  useEffect(() => {
    if (params.id) {
      const fetchData = async () => {
        return await dispatch(
          getSortetedCategory({ category: params.id, page: current }),
        );
      };

      fetchData();
    }
  }, [dispatch, params.id, current]);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrent(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== totalPages) {
      setCurrent(currentPage + 1);
    }
  };

  const paginate = pageNumber => {
    setCurrent(pageNumber);
  };

  const handleAddFavorite = async id => {
    await dispatch(addToFavoriteProduct(id));
    await dispatch(refreshToken());
  };

  const handleDeletProduct = async id => {
    await dispatch(deleteFavoriteProduct(id));
    await dispatch(refreshToken());
  };

  const viewedProducts =
    JSON.parse(localStorage.getItem('viewedProducts')) || [];

  return (
    <>
      <BreadCrumb />
      <Box
        addToCart={addToCart}
        handleAddFavorite={handleAddFavorite}
        products={items}
        totalPages={totalPages}
        currentPage={currentPage}
        paginate={paginate}
        nextPage={nextPage}
        previousPage={previousPage}
        params={params}
        handleDeletProduct={handleDeletProduct}
      />
      <PreviosProduct
        viewedProducts={viewedProducts}
        addToCart={addToCart}
        handleAddFavorite={handleAddFavorite}
        handleDeletProduct={handleDeletProduct}
      />
    </>
  );
};

export default Catalog;
