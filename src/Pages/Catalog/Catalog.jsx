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

  const [select, setSelect] = useState(searchParams.get('sort') || '');
  const [range, setRange] = useState(searchParams.get('range') || 0);
  const [brand, setBrand] = useState(searchParams.get('brand') || []);
  const [type, setType] = useState([]);

  console.log('brand', brand);
  console.log('type', type);

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
    if (params.id !== undefined) {
      const fetchData = async () => {
        return await dispatch(
          getSortetedCategory({
            category: params.id,
            page: current,
            sort: select,
            subcategory: params.subcategory,
            range: range,
          }),
        );
      };

      fetchData();
    }
  }, [dispatch, params.id, current, select, params.subcategory, range]);

  const handleChangeBrand = e => {
    const value = e.target.value;
    if (brand.includes(value)) {
      setBrand(brand.filter(item => item !== value));
    } else {
      setBrand([...brand, value]);
    }
  };

  const handleChangeType = e => {
    const value = e.target.value;
    if (type.includes(value)) {
      setType(type.filter(item => item !== value));
    } else {
      setType([...type, value]);
    }
  };

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

  const handleChangeFilterSelectRange = (key, value) => {
    searchParams.set(key, value);
    searchParams.set('page', 1);
    const updatedSearch = searchParams.toString();
    navigateToPageSubcategory(updatedSearch);
    if (key === 'sort') {
      setSelect(value);
    } else if (key === 'range') {
      setRange(Number(value));
    }
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
        maxPrice={maxPrice}
        availableTypes={availableTypes}
        availableBrands={availableBrands}
        availableSorts={availableSorts}
        handleChangeBrand={handleChangeBrand}
        handleChangeType={handleChangeType}
        handleChangeFilterSelectRange={handleChangeFilterSelectRange}
        range={range}
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
