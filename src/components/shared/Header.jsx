import styled from 'styled-components';

const Header = () => {
	return (
		<Wrap>
			<h1>Angular / Angular-cli</h1>
		</Wrap>
	);
};

export default Header;

const Wrap = styled.div`
	cursor: pointer;
  
  display: flex;
  justify-content: center
`;
