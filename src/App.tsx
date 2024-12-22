import './App.css';
import styled from 'styled-components';

import TransactionsList from './page/TransactionsList';

function App() {
  return (
    <Wrapper>
      <TransactionsList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #eee;
`;

export default App;
