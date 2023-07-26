import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const FilterItem = ({ item, params }) => {
  const { url, label } = item;
  return (
    <Link to={`/${params}/${url}`}>
      <li>{label}</li>
    </Link>
  );
};

FilterItem.propTypes = {
  item: propTypes.object,
  params: propTypes.string,
};

export default FilterItem;
