import { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { addToCart } from '../../helpers/addToCart';
import { getAllProducts } from '../../redux/product/selector';
import { getSortetedCategory } from '../../redux/product/operation';
import {
  addToFavoriteProduct,
  refreshToken,
  deleteFavoriteProduct,
} from '../../redux/user/operation';
import { getUserToken, getLoadingUser } from '../../redux/user/selectors';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import Box from './Components/Box/Box';
import PreviosProduct from './Components/PreviosProduct/PreviosProduct';

const Catalog = () => {
  const token = useSelector(getUserToken);
  const isLoading = useSelector(getLoadingUser);

  const location = useLocation();
  const [searchParams] = useSearchParams();
  const pageParam = searchParams.get('page' || 1);

  const params = useParams();
  const dispatch = useDispatch();
  const { items, totalPages } = useSelector(getAllProducts);
  const [current, setCurrent] = useState(pageParam);
  const navigate = useNavigate();

  useEffect(() => {
    if (pageParam) {
      setCurrent(parseInt(pageParam));
    } else {
      setCurrent(1);
    }
  }, [location, pageParam]);

  useEffect(() => {
    if (params.id !== undefined) {
      const fetchData = async () => {
        return await dispatch(
          getSortetedCategory({ category: params.id, page: current }),
        );
      };

      fetchData();
    }
  }, [dispatch, params.id, current]);

  const navigateToPage = useCallback(
    pageNumber => {
      navigate(`/${params.id}?page=${pageNumber}`);
    },
    [navigate, params.id],
  );

  const previousPage = useCallback(() => {
    const prevPage = parseInt(pageParam);
    if (prevPage > 1) {
      setCurrent(prevPage - 1);
      navigateToPage(prevPage - 1);
    }
  }, [pageParam, setCurrent, navigateToPage]);

  const nextPage = useCallback(() => {
    const nextPageNum = parseInt(pageParam);
    if (nextPageNum < totalPages) {
      setCurrent(nextPageNum + 1);
      navigateToPage(nextPageNum + 1);
    }
  }, [pageParam, totalPages, setCurrent, navigateToPage]);

  const paginate = useCallback(
    pageNumber => {
      setCurrent(pageNumber);
      navigateToPage(pageNumber);
    },
    [setCurrent, navigateToPage],
  );

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

  const viewedProducts = useMemo(
    () => JSON.parse(localStorage.getItem('viewedProducts')) || [],
    [],
  );

  return (
    <>
      <BreadCrumb />
      <Box
        addToCart={addToCart}
        handleAddFavorite={handleAddFavorite}
        products={items}
        totalPages={totalPages}
        currentPage={parseInt(pageParam)}
        paginate={paginate}
        nextPage={nextPage}
        previousPage={previousPage}
        params={params}
        handleDeletProduct={handleDeletProduct}
        token={token}
        isLoading={isLoading}
      />
      <PreviosProduct
        viewedProducts={viewedProducts}
        addToCart={addToCart}
        handleAddFavorite={handleAddFavorite}
        handleDeletProduct={handleDeletProduct}
        token={token}
        isLoading={isLoading}
      />
    </>
  );
};

export default Catalog;
