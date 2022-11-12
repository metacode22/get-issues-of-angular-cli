import styled from 'styled-components';

const THINGSFLOW_HOME_URL = 'https://thingsflow.com/ko/home';

const Advertisement = () => {
  return (
    <Wrap href={THINGSFLOW_HOME_URL} target="_blank" rel="noopener noreferrer">
      <h1>광고</h1>
    </Wrap>
  );
};

export default Advertisement;

const Wrap = styled.a`
  text-decoration-line: none;
  width: 100%;
  height: 240px;
  background-color: black;
  color: white;
  margin: 1rem 0 1rem 0;
  border-radius: 16px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.75;
  }
`;
