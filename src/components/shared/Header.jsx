import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Wrap
      onClick={() => {
        navigate('/');
      }}
    >
      <h1>Angular / Angular-cli</h1>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  margin: 1rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
`;
