import { useParams } from 'react-router-dom';
import Way from './Components/Way/Way';
import Box from './Components/Box/Box';

const Catalog = () => {
  const params = useParams();

  return (
    <>
      <Way params={params} />
      <Box />
    </>
  );
};

export default Catalog;
