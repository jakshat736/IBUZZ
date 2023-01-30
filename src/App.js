import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Digitalmarketting from './Pages/ServicePages/Digitalmarketting';
import Webdevelopment from './Pages/ServicePages/Webdevelopment';
import Appdevelopment from './Pages/ServicePages/Appdevelopment';
import Customsoftwaredevelopment from './Pages/ServicePages/Customsoftwaredevelopment';
import Seopackages from './Pages/PackagePages/Seopackages';
import Smopackages from './Pages/PackagePages/Smopackages';
import Ppcpackages from './Pages/PackagePages/Ppcpackages';
import Localseopackages from './Pages/PackagePages/Localseopackages';
import Staticwebsitepackages from './Pages/PackagePages/Staticwebsite';
import Dynamicwebsitepackages from './Pages/PackagePages/Dynamicwebsitepackages';
import DemoPage from './Pages/DemoPage';
function App() {
  return (
  <div>
     <Router>
      <Routes>
              <Route element={<Home/>} path="/" />
              <Route element={<Home/>} path="/home" />
              <Route element={<Aboutus/>} path="/aboutus" />
              <Route element={<Contactus/>} path="/contactus" />
              <Route element={<Digitalmarketting/>} path="/digitalmarketting" />
              <Route element={<Webdevelopment/>} path="/webdevelopment" />
              <Route element={<Appdevelopment/>} path="/appdevelopment" />
              <Route element={<Customsoftwaredevelopment/>} path="/customsoftwaredevelopment" />
              <Route element={<Seopackages/>} path="/seopackages" />
              <Route element={<Smopackages/>} path="/smopackages" />
              <Route element={<Ppcpackages/>} path="/ppcpackages" />
              <Route element={<Localseopackages/>} path="/localseopackages" />
              <Route element={<Staticwebsitepackages/>} path="/staticwebsitepackages" />
              <Route element={<Dynamicwebsitepackages/>} path="/dynamicwebsitepackages" />
              <Route element={<DemoPage/>} path="/demopage" />
              </Routes>
              </Router>
  </div>
  );
}

export default App;
