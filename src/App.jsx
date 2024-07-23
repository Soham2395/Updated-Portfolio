import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA4
    ReactGA.initialize('G-P5V0RZMFD0'); // Replace with your GA4 Tracking ID
  }, []);

  useEffect(() => {
    // Log page views on route change
    ReactGA.send('pageview');
  }, [location]);

  return (
    <div className='bg-cover bg-no-repeat bg-center'>
      <div className="relative z-0">
        <div className=" bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <div className="relative z-0">
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </div>
  );
}

const WrappedApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default WrappedApp;
