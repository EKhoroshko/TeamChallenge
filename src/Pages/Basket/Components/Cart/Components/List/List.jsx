import propTypes from 'prop-types';
import Card from '../Card/Card';
import css from './List.module.css';

const List = ({ data, deleteProductCart, setData }) => {
  return (
    <ul className={css.list}>
      <p className={css.title}>Your order</p>
      {data !== null ? (
        data.map(({ image, itemId, name, price, counter, quantity }) => {
          return (
            <Card
              key={itemId}
              image={image}
              name={name}
              price={price}
              quantity={quantity}
              itemId={itemId}
              counter={counter}
              deleteProductCart={deleteProductCart}
              setData={setData}
              allPrice={price * counter}
            />
          );
        })
      ) : (
        <p>You card empty</p>
      )}
    </ul>
  );
};

List.propTypes = {
  data: propTypes.array,
  deleteProductCart: propTypes.func,
  setData: propTypes.func,
};

export default List;
