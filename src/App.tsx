import styled from 'styled-components';
import Header from './components/Header/Header';

const StyledHeader = styled.header`
  padding-top: 35px;
`;

const StyledBgEllipse = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 503px;
  height: 503px;

  z-index: -1;
`;

function App() {
  return (
    <div className="App">
      <StyledHeader id="header">
        <div className="container">
          <StyledBgEllipse>
            <img src={require('./img/bg-ellipse.png')} alt="copyright-icon" />
          </StyledBgEllipse>

          <Header />
        </div>
      </StyledHeader>
    </div>
  );
}

export default App;
