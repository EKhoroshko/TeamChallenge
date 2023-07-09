import Way from './Components/Way/Way';
import Box from './Components/Box/Box';
import { useParams } from 'react-router-dom';

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
