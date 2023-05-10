import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button onClick={() => navigate('/group-channel')}>메세지</button>
        <button onClick={() => navigate('/sample')}>샘플</button>
      </div>
    </>
  );
};

export default HomePage;
