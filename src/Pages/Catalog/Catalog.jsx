import { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { addToCart } from '../../helpers/addToCart';
import { useFavoriteProduct } from '../../helpers/favoritproduct.js';
import { getAllProducts } from '../../redux/product/selector';
import { getSortetedCategory } from '../../redux/product/operation';
import { getUserToken, getLoadingUser } from '../../redux/user/selectors';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import Box from './Components/Box/Box';
import PreviosProduct from './Components/PreviosProduct/PreviosProduct';

const Catalog = () => {
  const token = useSelector(getUserToken);
  const isLoading = useSelector(getLoadingUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { handleAddFavorite, handleDeletProduct } = useFavoriteProduct();

  const [searchParams] = useSearchParams();
  const pageParam = searchParams.get('page' || 1);
  const sortParam = searchParams.get('sort');

  const [select, setSelect] = useState('newest');
  const {
    items,
    totalPages,
    maxPrice,
    availableTypes,
    availableBrands,
    availableSorts,
  } = useSelector(getAllProducts);
  const [current, setCurrent] = useState(pageParam || 1);
  const subcategoryParam = params.subcategory;

  useEffect(() => {
    if (pageParam) {
      setCurrent(parseInt(pageParam));
    } else {
      setCurrent(1);
    }
  }, [pageParam]);

  useEffect(() => {
    if (sortParam) {
      setSelect(sortParam);
    } else {
      setSelect('name');
    }
  }, [searchParams, select, sortParam]);

  useEffect(() => {
    if (params.id !== undefined) {
      const fetchData = async () => {
        return await dispatch(
          getSortetedCategory({
            category: params.id,
            page: current,
            sort: select,
            subcategory: params.subcategory,
          }),
        );
      };

      fetchData();
    }
  }, [dispatch, params.id, current, select, params.subcategory]);

  const navigateToPage = useCallback(
    updatedSearch => {
      navigate(`/${params.id}?${updatedSearch}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [navigate, params.id],
  );

  const navigateToPageSubcategory = useCallback(
    updatedSearch => {
      navigate(`/${params.id}/${params.subcategory}?${updatedSearch}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [navigate, params.id, params.subcategory],
  );

  const previousPage = useCallback(() => {
    const prevPage = parseInt(pageParam);
    if (prevPage > 1) {
      setCurrent(prevPage - 1);
      searchParams.set('page', prevPage - 1);
      const updatedSearch = searchParams.toString();
      subcategoryParam
        ? navigateToPageSubcategory(updatedSearch)
        : navigateToPage(updatedSearch);
    }
  }, [
    pageParam,
    searchParams,
    subcategoryParam,
    navigateToPageSubcategory,
    navigateToPage,
  ]);

  const nextPage = useCallback(() => {
    const nextPageNum = parseInt(pageParam);
    if (nextPageNum < totalPages) {
      setCurrent(nextPageNum + 1);
      searchParams.set('page', nextPageNum + 1);
      const updatedSearch = searchParams.toString();
      subcategoryParam
        ? navigateToPageSubcategory(updatedSearch)
        : navigateToPage(updatedSearch);
    }
  }, [
    pageParam,
    totalPages,
    searchParams,
    subcategoryParam,
    navigateToPageSubcategory,
    navigateToPage,
  ]);

  const paginate = useCallback(
    pageNumber => {
      setCurrent(pageNumber);
      searchParams.set('page', pageNumber);
      const updatedSearch = searchParams.toString();
      subcategoryParam
        ? navigateToPageSubcategory(updatedSearch)
        : navigateToPage(updatedSearch);
    },
    [searchParams, subcategoryParam, navigateToPageSubcategory, navigateToPage],
  );

  const handleChangeSelect = e => {
    const selectedSort = e.target.value;
    setSelect(selectedSort);
    searchParams.set('sort', selectedSort);
    searchParams.set('page', 1);
    const updatedSearch = searchParams.toString();
    subcategoryParam
      ? navigateToPageSubcategory(updatedSearch)
      : navigateToPage(updatedSearch);
  };

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
        select={select}
        handleChangeSelect={handleChangeSelect}
        maxPrice={maxPrice}
        availableTypes={availableTypes}
        availableBrands={availableBrands}
        availableSorts={availableSorts}
      />
      {viewedProducts.length !== 0 ? (
        <PreviosProduct
          viewedProducts={viewedProducts}
          addToCart={addToCart}
          handleAddFavorite={handleAddFavorite}
          handleDeletProduct={handleDeletProduct}
          token={token}
          isLoading={isLoading}
        />
      ) : null}
    </>
  );
};

export default Catalog;
