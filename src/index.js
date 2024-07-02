import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import About from './landing_page/about/AboutPage';
import Products from './landing_page/products/ProductPage';
import Pricing from './landing_page/pricing/PricingPage';
import Support from './landing_page/support/SupportPage';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import PageNotFound from './landing_page/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/support' element={<Support/>}/>
      <Route path='*' element={<PageNotFound/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
 
  </React.StrictMode>
);

