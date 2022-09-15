import styled from 'styled-components'
import FooterSection from './components/FooterSection/FooterSection'
import HeaderSection from './components/HeaderSection/HeaderSection'
import BestSalesSection from './components/Pages/HomePage/Section/BestSalesSection/BestSalesSection'
import DiscountSection from './components/Pages/HomePage/Section/DiscountSection/DiscountSection'
import MoreInfoSection from './components/Pages/HomePage/Section/MoreInfoSection/MoreInfoSection'
import NewCollectionSection from './components/Pages/HomePage/Section/NewCollectionSection/NewCollectionSection'
import OfferSection from './components/Pages/HomePage/Section/OfferSection/OfferSection'

const StyledApp = styled.div`
  overflow-x: hidden;
`

const StyledBgEllipse = styled.img`
  position: absolute;
  width: 809px;
  height: 852px;

  z-index: -1;
`

const StyledHeaderSection = styled.header`
  position: relative;
  padding-top: 35px;

  .bgElipse {
    top: -229px;
    left: -247px;
  }
`

const StyledOfferSection = styled.section``

const StyledNewCollectionSection = styled.section`
  display: none;
  margin-top: 218px;
  padding-bottom: 150px;
  overflow: hidden;

  .bgElipse {
    bottom: -314px;
    right: -348px;
  }
`
const StyledDiscountSection = styled.section`
  display: none;
  /* display: flex; */
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
  display: none;
  margin-top: 150px;

  .bgElipse {
    top: -314px;
    left: -348px;
  }
`

const StyledMoreInfoSection = styled.section`
  display: none;
  margin-top: 150px;
  padding-bottom: 150px;
  overflow: hidden;

  .bgElipse {
    bottom: -426px;
    right: -348px;
  }
`

const StyledFooterSection = styled.footer`
  display: none;
`

function App() {
  return (
    <StyledApp className='App'>
      <StyledHeaderSection id='header'>
        <StyledBgEllipse
          className='bgElipse'
          src={require('../src/img/bg-ellipse.png')}
          alt='copyright-icon'
        />
        <div className='container'>
          <HeaderSection />
        </div>
      </StyledHeaderSection>
      <main id='main'>
        <StyledOfferSection id='offerSection' className='offerSection'>
          <div className='container'>
            <OfferSection />
          </div>
        </StyledOfferSection>
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
    </StyledApp>
  )
}

export default App
