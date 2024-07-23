import ReactGA from 'react-ga4';

// Initialize GA4
export const initGA = () => {
  ReactGA.initialize('G-P5V0RZMFD0'); 
};

export const logPageView = () => {
  ReactGA.send('pageview');
};

export const logEvent = (category, action, label) => {
  ReactGA.event({ category, action, label });
};
