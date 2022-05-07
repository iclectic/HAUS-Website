import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer} from './Components';
import Home from './Pages/HomePage/Home';
import Services from './Pages/Services/Services';
import Products from './Pages/Products/Products';
import SignUp from './Pages/SignUp/SignUp';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  return (
  <Router>
    <GlobalStyle />
    <ScrollToTop />
    <Navbar />  
    <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/products" element={<Products/>}/>
  <Route path="/signup" element={<SignUp/>}/>
  </Routes>
  <Footer />
  </Router>
  
  );
}

export default App;
