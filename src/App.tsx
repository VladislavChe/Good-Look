import styled from 'styled-components'
import BestSalesSection from './components/Pages/HomePage/Section/BestSalesSection/BestSalesSection'
import DiscountSection from './components/Pages/HomePage/Section/DiscountSection/DiscountSection'
import FooterSection from './components/Pages/HomePage/Section/FooterSection/FooterSection'
import HeaderSection from './components/Pages/HomePage/Section/HeaderSection/HeaderSection'
import MoreInfoSection from './components/Pages/HomePage/Section/MoreInfoSection/MoreInfoSection'
import NewCollectionSection from './components/Pages/HomePage/Section/NewCollectionSection/NewCollectionSection'

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
  display: flex;
  align-items: center;
  max-width: 1360px;
  padding-left: 80px;
  padding-right: 40px;
  margin: 0 auto;
  min-height: 562px;

  background-image: url(${require('./img/bgDiscountSection.jpg')});
  background-position: center;
  background-repeat: no-repeat;
`

const StyledBestSalesSection = styled.section`
  margin-top: 150px;

  .bgElipse {
    top: -314px;
    left: -348px;
  }
`

const StyledMoreInfoSection = styled.section`
  margin-top: 150px;

  .bgElipse {
    bottom: -426px;
    right: -348px;
  }
`

const StyledFooterSection = styled.footer`
  margin-top: 150px;
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
          <div className='containerFluid'>
            <DiscountSection />
          </div>
        </StyledDiscountSection>
        <StyledBestSalesSection id='bestSalesSection' className='bestSalesSection'>
          <div className='container'>
            <StyledBgEllipse
              className='bgElipse'
              src={require('../src/img/bg-ellipse.png')}
              alt='copyright-icon'
            />
            <BestSalesSection />
          </div>
        </StyledBestSalesSection>
        <StyledMoreInfoSection id='moreInfoSection' className='moreInfoSection'>
          <div className='container'>
            <StyledBgEllipse
              className='bgElipse'
              src={require('../src/img/bg-ellipse.png')}
              alt='copyright-icon'
            />
            <MoreInfoSection />
          </div>
        </StyledMoreInfoSection>
      </main>
      <StyledFooterSection>
        <div className='container'>
          <FooterSection />
        </div>
      </StyledFooterSection>
    </div>
  )
}

export default App
