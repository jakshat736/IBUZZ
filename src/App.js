import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Webdevelopmentservices from './Pages/ServicePages/Webdevelopmentservices';
import Appdevelopment from './Pages/ServicePages/Appdevelopment';
import Customsoftwaredevelopment from './Pages/ServicePages/Customsoftwaredevelopment';
import Ppcpackages from './Pages/PackagePages/Ppcpackages';
import Localseopackages from './Pages/PackagePages/Localseopackages';
import Staticwebsitepackages from './Pages/PackagePages/Staticwebsite';
import Dynamicwebsitepackages from './Pages/PackagePages/Dynamicwebsitepackages';
import Seoservices from './Pages/ServicePages/Seoservices';
import Smoservices from './Pages/ServicePages/Smoservices';
import DemoPage from './Pages/DemoPage';
import Branding from './Pages/ServicePages/Branding';
import { BrandingWatermark } from '@mui/icons-material';
import ContentMarketing from './Pages/ServicePages/ContentMarketing';
import GoogleAds from './Pages/ServicePages/GoogleAds';
import Portfolio from './Pages/Portfolio';
import ChandanJwellers from './Digital cards/ChandanJwellers/ChandanJwellers';
import VerticalCarousel from './Pages/Carasoul';
import Ratiram from './Digital cards/Ratiram/Ratiram';
import GehnaJwellers from './Digital cards/GehnaJwellers/GehnaJwellers';
function App() {
  return (
  <div>
     <Router>
      <Routes>
              <Route element={<Home/>} path="/" />
              <Route element={<Home/>} path="/home" />
              <Route element={<Aboutus/>} path="/aboutus" />
              <Route element={<Contactus/>} path="/contactus" />
              <Route element={<Webdevelopmentservices/>} path="/webdevelopmentservices" />
              <Route element={<Appdevelopment/>} path="/appdevelopment" />
              <Route element={<Customsoftwaredevelopment/>} path="/customsoftwaredevelopment" />
              <Route element={<Seoservices/>} path="/seoservices" />
              <Route element={<Smoservices/>} path="/smoservices" />
              <Route element={<Ppcpackages/>} path="/ppcpackages" />
              <Route element={<Localseopackages/>} path="/localseopackages" />
              <Route element={<Staticwebsitepackages/>} path="/staticwebsitepackages" />
              <Route element={<Dynamicwebsitepackages/>} path="/dynamicwebsitepackages" />
              <Route element={<DemoPage/>} path="/demopage" />
              <Route element={<ContentMarketing/>} path="/contentmarketing" />
              <Route element={<Branding/>} path="/branding" />
              <Route element={<GoogleAds/>} path="/googleads" />
              <Route element={<Portfolio/>} path="/portfolio" />
              <Route element={<ChandanJwellers/>} path="/chandanjwellers" />
              <Route element={<VerticalCarousel/>} path="/carasoul" />
              <Route element={<Ratiram/>} path="/ratiramgajakbhandar" />
              <Route element={<GehnaJwellers/>} path="/gehnajeweller" />
              </Routes>
              </Router>
  </div>
  );
}

export default App;
