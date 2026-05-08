import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import App from './App.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ImpressumPage from './pages/ImpressumPage.jsx';
import DisclaimerPage from './pages/DisclaimerPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import OnlineCourse from './pages/OnlineCourse.jsx';

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
      <Route exact path="/contact" element={<ContactPage />} />
      <Route exact path="/impressum" element={<ImpressumPage />} />
      <Route exact path="/disclaimer" element={<DisclaimerPage />} />
      <Route exact path="/privacy" element={<PrivacyPage />} />
      <Route exact path="/online-Kurse" element={<OnlineCourse />} />

      <Route path="*" element={<App />} />
    </Routes>
    <Footer />
  </>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <RootComponent />
    </Router>
  </StrictMode>,
);
