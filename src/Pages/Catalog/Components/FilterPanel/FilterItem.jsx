import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const FilterItem = ({ item, params }) => {
  const { url, label } = item;
  return (
    <Link to={{ pathname: `/${params}/${url}`, search: '?page=1' }}>
      <li>{label}</li>
    </Link>
  );
};

FilterItem.propTypes = {
  item: propTypes.object,
  params: propTypes.string,
};

export default FilterItem;
