import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getIsLoadingProduct,
  getAllProducts,
} from '../../../../redux/product/selector';
import {
  getSortetedCategory,
  getAll,
} from '../../../../redux/product/operation';
import FilterCategory from '../FilterCategory/FilterCategory';
import Spinner from '../../../../Components/Spinner/Spinner';
import CatalogCard from '../CatalogCard/CatalogCard';
import Paginate from './Paginate';
import css from './Pagination.module.css';

// eslint-disable-next-line react/prop-types
const Pagination = ({ products = [] }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingProduct);
  const { totalPages, currentPage } = useSelector(getAllProducts);
  const [current, setCurrent] = useState(currentPage || 1);

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

  const load = isLoading ? (
    <div className={css.load}>
      <Spinner />
    </div>
  ) : (
    <>
      {products &&
        products.map(
          ({
            itemId,
            description,
            name,
            price,
            category,
            image,
            subcategory,
          }) => {
            return (
              <CatalogCard
                key={itemId}
                description={description}
                name={name}
                price={price}
                category={category}
                itemId={itemId}
                subcategory={subcategory}
                image={image}
                margin={css.margin}
              />
            );
          },
        )}
    </>
  );

  return (
    <div className={css.container}>
      <div className={css.buttonFilter}>
        <FilterCategory />
      </div>
      <ul className={css.list}>
        {products.length === 0 ? <div>The products is out of stock</div> : load}
      </ul>
      <Paginate
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};

CatalogCard.propTypes = {
  products: propTypes.array,
};

export default Pagination;
