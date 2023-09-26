import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByID } from '../../redux/product/operation';
import {
  getIsLoadingProduct,
  getProductById,
} from '../../redux/product/selector';
import { getLoadingUser } from '../../redux/user/selectors';
import { addToCartProductPage, addToCart } from '../../helpers/addToCart';
import { useFavoriteProduct } from '../../helpers/favoritproduct';
import { loadCart } from '../../helpers/loadCart';
import { getUserToken } from '../../redux/user/selectors';
import Spinner from '../../Components/Spinner/Spinner';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import HeroSection from './Components/HeroSection/HeroSection';
import DescriptionSection from './Components/DescriptionSection/DescriptionSection';
import SimilarProduct from './Components/SimilarProduct/SimilarProduct';
import css from './Product.module.css';

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingProduct);
  const isLoadingFavorite = useSelector(getLoadingUser);
  const token = useSelector(getUserToken);
  const data = useSelector(getProductById);
  const { handleAddFavorite, handleDeletProduct } = useFavoriteProduct();
  const [addList, setAddList] = useState([]);
  const [product, setProduct] = useState(data);
  const [counter, setCounter] = useState(1);
  const [fail, setFail] = useState(false);

  useEffect(() => {
    const updateData = loadCart();
    setAddList(updateData);
  }, []);

  useEffect(() => {
    if (addList !== null) {
      const prod = addList.find(item => item.itemId === params.itemId);
      if (prod !== undefined) {
        setCounter(prod.counter);
      }
    }
  }, [addList, params.itemId]);

  useEffect(() => {
    if (addList !== null) {
      const prod = addList.find(item => item.itemId === params.itemId);
      if (prod !== undefined) {
        if (prod.counter >= prod.quantity) {
          setFail(true);
        }
      }
    }
    return () => {
      setFail(false);
    };
  }, [addList, params.itemId]);

  useEffect(() => {
    if (params.itemId !== undefined) {
      const getData = async () => {
        const prod = await dispatch(getProductByID(params.itemId));
        setProduct(prod?.payload);
      };
      getData();
    }
  }, [dispatch, params.itemId]);

  const handleCart = ({ name, price, itemId, image, quantity }, counter) => {
    addToCartProductPage({ name, price, itemId, image, quantity }, counter);
    setAddList(loadCart());
  };

  return (
    <div>
      <BreadCrumb way={params.itemId} />
      <Suspense fallback={<Spinner />}>
        {isLoading || product === null ? (
          <div className={css.container}>
            <Spinner />
          </div>
        ) : (
          <>
            <HeroSection
              product={product.item}
              itemId={params.itemId}
              addToCart={handleCart}
              counter={counter}
              setCounter={setCounter}
              fail={fail}
            />
            <DescriptionSection product={product.item} />
            <SimilarProduct
              addToCart={addToCart}
              handleAddFavorite={handleAddFavorite}
              handleDeletProduct={handleDeletProduct}
              isLoading={isLoadingFavorite}
              token={token}
              product={product.similarItems}
            />
          </>
        )}
      </Suspense>
    </div>
  );
};

export default Product;
