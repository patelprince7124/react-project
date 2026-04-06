
import Header from './layout/Header'
import AboutSection from './pages/AboutSection'
import Home from './pages/Home'
import LogoRow from './pages/LogoRow'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Slider from './pages/Slider'
import WarCard from './pages/WarCard'
import War from './pages/War'
import AllFighter from './pages/AllFighter'
import UpcomingFighter from './pages/UpcomingFighter'
import Pricing from './pages/Pricing'
import Footer from './layout/Footer'




function App() {


  return (
    <>
      <Header />
      <Home />
      <LogoRow/>
      <AboutSection/>
      <Slider/>
      <WarCard/>
      <War/>
      <AllFighter/>
      <UpcomingFighter/>
      <Pricing/>
      <Footer />

    </>
  )
}

export default App
