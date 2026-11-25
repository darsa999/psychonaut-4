import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Releases from './pages/Releases';
import Release from './pages/Release';
import About from './pages/About';
import Tour from './pages/Tour';
import Discography from './pages/Discography';
import Merch from './pages/Merch';
import NotFound from './pages/NotFound';
import { usePrefs } from './i18n/PrefsContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { t } = usePrefs();
  return (
    <>
      <a href="#main" className="skip-link">{t('skip')}</a>
      <ScrollToTop />
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="releases" element={<Releases />} />
          <Route path="releases/:slug" element={<Release />} />
          <Route path="discography" element={<Discography />} />
          <Route path="tour" element={<Tour />} />
          <Route path="merch" element={<Merch />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
