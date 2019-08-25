import React from 'react';
import './App.css';
import Map from './components/map';
import styled from 'styled-components';

const Header = styled.div`
  background: #19a0fb;
  width: 100%;
`;
const HeaderText = styled.div`
  color: white;
  font-family: Roboto;
  padding: 24px;
  font-size: 24px;
  text-align: center;
`;

const App: React.FC = () => {
  return (
    <div>
    <Header>
      <HeaderText> BedDown</HeaderText>
    </Header>
      <Map />
    </div>
  );
};

export default App;
