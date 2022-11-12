import Header from './Header';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Wrap>
      <Header />
      <OutletWrap>
        <Outlet />
      </OutletWrap>
    </Wrap>
  );
};

export default Layout;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OutletWrap = styled.div`
  width: 1200px;

  display: flex;
  justify-content: center;

  @media all and (max-width: 1024px) {
    width: 768px;
  }

  @media all and (max-width: 768px) {
    width: 480px;
  } ;
`;
