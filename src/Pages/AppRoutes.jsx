import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import TestimonialPage from './TestimonialPage';
import ServicePage from './ServicePage';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';
import CookiePolicy from './CookiePolicy';
import DMACPolicy from './DMACPolicy';
import BlogPage from './BlogPage';
import BlogDesc from './BlogDesc';
import PageNotFound from './PageNotFound'; // Import the 404 page
import MarketingPage from '../Components/Marketing/MarketingPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className='relative'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutPage />} />
          <Route path='/services' element={<ServicePage />} />
          <Route path='/testimonials' element={<TestimonialPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:id' element={<BlogDesc />} />
          <Route path='/terms-of-use' element={<TermsOfService />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/cookie-policy' element={<CookiePolicy />} />
          <Route path='/legal-notice-DMAC' element={<DMACPolicy />} />
          <Route path='/marketing' element={<MarketingPage />} />
          {/* Page Not Found Route */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
