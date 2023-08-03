import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProductByID } from '../../redux/product/operation';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState();

  console.log('product :>> ', product);

  useEffect(() => {
    if (params.itemId !== undefined) {
      const getData = async () => {
        const response = await dispatch(getProductByID(params.itemId));
        setProduct(response);
      };
      getData();
    }
  }, [dispatch, params.itemId]);

  return (
    <div>
      <BreadCrumb />
    </div>
  );
};

export default Product;
