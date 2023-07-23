import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../helpers/addToCart';
import { getAllProducts } from '../../redux/product/selector';
import { getAll, getSortetedCategory } from '../../redux/product/operation';
import { getUserFavoriteList } from '../../redux/user/selectors';
import { addToFavoriteProduct } from '../../redux/user/operation';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import Box from './Components/Box/Box';
import PreviosProduct from './Components/PreviosProduct/PreviosProduct';

const Catalog = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { items, totalPages, currentPage } = useSelector(getAllProducts);
  const favoritList = useSelector(getUserFavoriteList);
  const [current, setCurrent] = useState(currentPage || 1);

  console.log(favoritList);

  useEffect(() => {
    if (params.id !== undefined) {
      setCurrent(1);
    }
  }, [params.id]);

  useEffect(() => {
    if (params.id !== undefined) {
      const fetchData = async () => {
        await dispatch(
          getSortetedCategory({ category: params.id, page: current }),
        );
      };

      fetchData();
    }
  }, [dispatch, params.id, current]);

  useEffect(() => {
    if (params.id === undefined) {
      const fetchData = async () => {
        await dispatch(getAll(current));
      };

      fetchData();
    }
  }, [dispatch, current, params.id]);

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

  const handleAddFavorite = id => {
    dispatch(addToFavoriteProduct(id));
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
      />
      <PreviosProduct
        viewedProducts={viewedProducts}
        addToCart={addToCart}
        handleAddFavorite={handleAddFavorite}
      />
    </>
  );
};

export default Catalog;
