import styled from 'styled-components'
import DiscountSection from './components/Section/DiscountSection/DiscountSection'
import HeaderSection from './components/Section/HeaderSection/HeaderSection'
import NewCollectionSection from './components/Section/NewCollectionSection/NewCollectionSection'

const StyledBgEllipse = styled.img`
  position: absolute;
  width: 809px;
  height: 852px;

  z-index: -1;
`

const StyledHeaderSection = styled.header`
  padding-top: 35px;

  .bgElipse {
    top: -229px;
    left: -247px;
  }
`

const StyledNewCollectionSection = styled.section`
  margin-top: 218px;
  padding-bottom: 150px;
  overflow: hidden;

  .bgElipse {
    bottom: -314px;
    right: -348px;
  }
`
const StyledDiscountSection = styled.section`
  padding-top: 146px;
  padding-bottom: 140px;
  padding-left: 40px;

  background-image: url(${require('./img/bgDiscountSection.jpg')});
  background-position: center;
  background-repeat: no-repeat;
`

function App() {
  return (
    <div className='App'>
      <StyledHeaderSection id='header'>
        <div className='container'>
          <StyledBgEllipse
            className='bgElipse'
            src={require('../src/img/bg-ellipse.png')}
            alt='copyright-icon'
          />
          <HeaderSection />
        </div>
      </StyledHeaderSection>
      <main id='main'>
        <StyledNewCollectionSection id='newCollectionSection' className='newCollectionSection'>
          <div className='container'>
            <NewCollectionSection />
            <StyledBgEllipse
              className='bgElipse'
              src={require('../src/img/bg-ellipse.png')}
              alt='copyright-icon'
            />
          </div>
        </StyledNewCollectionSection>
        <StyledDiscountSection id='discountSection' className='discountSection'>
          <div className='container'>
            <DiscountSection />
          </div>
        </StyledDiscountSection>
      </main>
    </div>
  )
}

export default App
