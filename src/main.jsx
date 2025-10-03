import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import App from './App.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ImpressumPage from './pages/ImpressumPage.jsx';
import DisclaimerPage from './pages/DisclaimerPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';

// Custom component to handle scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const RootComponent = () => (
  <>
    <Header />
    <ScrollToTop />
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/Contact" element={<ContactPage />} />
      <Route exact path="/Impressum" element={<ImpressumPage />} />
      <Route exact path="/Disclaimer" element={<DisclaimerPage />} />
      <Route exact path="/Privacy" element={<PrivacyPage />} />
    </Routes>
    <Footer />
  </>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <RootComponent />
    </Router>
  </StrictMode>
);
