import { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { addToCart } from '../../helpers/addToCart';
import { useFavoriteProduct } from '../../helpers/favoritproduct.js';
import { getAllProducts } from '../../redux/product/selector';
import { getSortetedCategory } from '../../redux/product/operation';
import { getUserToken } from '../../redux/user/selectors';
import { initial } from '../../helpers/initialStateToURL';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import Box from './Components/Box/Box';
import PreviosProduct from './Components/PreviosProduct/PreviosProduct';

const Catalog = () => {
  const token = useSelector(getUserToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { handleAddFavorite, handleDeletProduct } = useFavoriteProduct();

  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get('page' || 1);

  const [current, setCurrent] = useState(pageParam || 1);
  const [select, setSelect] = useState(searchParams.get('sort') || '');
  const [range, setRange] = useState(searchParams.get('range') || 0);
  const [brand, setBrand] = useState(initial(searchParams, 'brand'));
  const [type, setType] = useState(initial(searchParams, 'type'));

  const {
    items,
    totalPages,
    maxPrice,
    availableTypes,
    availableBrands,
    availableSorts,
  } = useSelector(getAllProducts);
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
            brand: brand,
            type: type,
          }),
        );
      };

      fetchData();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [
    dispatch,
    params.id,
    current,
    select,
    params.subcategory,
    range,
    brand,
    type,
  ]);

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
    },
    [navigate, params.id],
  );

  const navigateToPageSubcategory = useCallback(
    updatedSearch => {
      navigate(`/${params.id}/${params.subcategory}?${updatedSearch}`);
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

  const handleChangeFilterSelectRange = useCallback(
    (key, value) => {
      searchParams.set(key, value);
      searchParams.set('page', 1);
      const updatedSearch = searchParams.toString();
      subcategoryParam
        ? navigateToPageSubcategory(updatedSearch)
        : navigateToPage(updatedSearch);
      if (key === 'sort') {
        setSelect(value);
      } else if (key === 'range') {
        setRange(Number(value));
      }
    },
    [searchParams, subcategoryParam, navigateToPageSubcategory, navigateToPage],
  );

  useEffect(() => {
    if (brand.length !== 0) {
      searchParams.set('brand', brand);
      searchParams.set('page', 1);
      setSearchParams(searchParams);
      navigateToPageSubcategory(searchParams);
    } else {
      searchParams.delete('brand');
      setSearchParams(searchParams);
    }
  }, [
    brand,
    navigateToPage,
    navigateToPageSubcategory,
    searchParams,
    setSearchParams,
    subcategoryParam,
  ]);

  useEffect(() => {
    if (type.length !== 0) {
      searchParams.set('type', type);
      searchParams.set('page', 1);
      setSearchParams(searchParams);
      navigateToPageSubcategory(searchParams);
    } else {
      searchParams.delete('type');
      setSearchParams(searchParams);
    }
  }, [
    type,
    navigateToPageSubcategory,
    searchParams,
    setSearchParams,
    subcategoryParam,
  ]);

  const handleResetFilter = () => {
    setBrand([]);
    setType([]);
    setRange(0);
    setSelect('');
    searchParams.delete('brand');
    searchParams.delete('type');
    searchParams.delete('range');
    searchParams.delete('sort');
    setSearchParams(searchParams);
  };

  const viewedProducts = useMemo(
    () => JSON.parse(localStorage.getItem('viewedProducts')) || [],
    [],
  );

  return (
    <>
      <BreadCrumb handleResetFilter={handleResetFilter} />
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
        select={select}
        maxPrice={maxPrice}
        availableTypes={availableTypes}
        availableBrands={availableBrands}
        availableSorts={availableSorts}
        handleChangeBrand={handleChangeBrand}
        handleChangeType={handleChangeType}
        handleChangeFilterSelectRange={handleChangeFilterSelectRange}
        range={range}
        handleResetFilter={handleResetFilter}
      />
      {viewedProducts.length !== 0 ? (
        <PreviosProduct
          viewedProducts={viewedProducts}
          addToCart={addToCart}
          handleAddFavorite={handleAddFavorite}
          handleDeletProduct={handleDeletProduct}
          token={token}
        />
      ) : null}
    </>
  );
};

export default Catalog;
