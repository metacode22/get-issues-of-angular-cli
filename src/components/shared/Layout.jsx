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
`;

const OutletWrap = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center
`
