import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByID } from '../../redux/product/operation';
import { getIsLoadingProduct } from '../../redux/product/selector';
import { addToCart } from '../../helpers/addToCart';
import { useFavoriteProduct } from '../../helpers/favoritproduct';
import { getUserToken } from '../../redux/user/selectors';
import Spinner from '../../Components/Spinner/Spinner';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import HeroSection from './Components/HeroSection/HeroSection';
import DescriptionSection from './Components/DescriptionSection/DescriptionSection';
import SimilarProduct from './Components/SimilarProduct/SimilarProduct';

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingProduct);
  const token = useSelector(getUserToken);
  const { handleAddFavorite, handleDeletProduct } = useFavoriteProduct();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (params.itemId !== undefined) {
      const getData = async () => {
        const prod = await dispatch(getProductByID(params.itemId));
        setProduct(prod?.payload);
      };
      getData();
    }
  }, [dispatch, params.itemId]);

  return (
    <div>
      <BreadCrumb />
      <Suspense fallback={<Spinner />}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <HeroSection
              product={product}
              itemId={params.itemId}
              addToCart={addToCart}
            />
            <DescriptionSection product={product} />
            <SimilarProduct
              itemId={params.itemId}
              category={params.category}
              subcategory={params.subcategory}
              addToCart={addToCart}
              handleAddFavorite={handleAddFavorite}
              handleDeletProduct={handleDeletProduct}
              isLoading={isLoading}
              token={token}
            />
          </>
        )}
      </Suspense>
    </div>
  );
};

export default Product;
