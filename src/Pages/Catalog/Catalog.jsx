import { useState, useEffect } from 'react';
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
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import Box from './Components/Box/Box';
import PreviosProduct from './Components/PreviosProduct/PreviosProduct';

const Catalog = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const pageParam = searchParams.get('page');

  console.log(pageParam);

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

  const previousPage = () => {
    if (Number(pageParam) !== 1) {
      setCurrent(Number(pageParam) - 1);
      navigate(`/${params.id}?page=${Number(pageParam) - 1}`);
    }
  };

  const nextPage = () => {
    if (Number(pageParam) !== totalPages) {
      setCurrent(Number(pageParam) + 1);
      navigate(`/${params.id}?page=${Number(pageParam) + 1}`);
    }
  };

  const paginate = pageNumber => {
    setCurrent(pageNumber);
    navigate(`/${params.id}?page=${pageNumber}`);
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
        currentPage={pageParam}
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
