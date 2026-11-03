import { StrictMode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { AuthProvider } from "./hooks/useAuth";
import App from './App.jsx';
import RequireAdmin from './components/RequireAdmin.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ImpressumPage from './pages/ImpressumPage.jsx';
import DisclaimerPage from './pages/DisclaimerPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import OnlineCourse from './pages/OnlineCourse.jsx';
import WorkshopPage from './pages/WorkshopPage.jsx';
import BookingPage from './pages/BookingPage.jsx';
import AccountPage from './pages/AccountPage.jsx';
import ParticipantsPage from './pages/ParticipantsPage.jsx';

// Custom component to handle scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient();

const RootComponent = () => (
  <QueryClientProvider client={queryClient}>
    <Header />
    <ScrollToTop />
    <AuthProvider>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/contact" element={<ContactPage />} />
      <Route exact path="/impressum" element={<ImpressumPage />} />
      <Route exact path="/disclaimer" element={<DisclaimerPage />} />
      <Route exact path="/privacy" element={<PrivacyPage />} />
      <Route exact path="/online-Kurse" element={<OnlineCourse />} />
      <Route exact path="/workshops" element={<WorkshopPage />} />
      <Route exact path="/kurse-buchen" element={<BookingPage />} />
      <Route exact path="/account" element={<AccountPage />} />
      <Route exact path="/course-participants" element={
            <RequireAdmin>
              <ParticipantsPage />
            </RequireAdmin>
          } />
      <Route path="*" element={<App />} />
    </Routes>
    </AuthProvider>
    <Footer />
  </QueryClientProvider>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <RootComponent />
    </Router>
  </StrictMode>,
);
