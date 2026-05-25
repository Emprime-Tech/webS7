import React, { lazy, Suspense, useCallback, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import Home from './pages/Home';
import InitialLoader from './components/InitialLoader';

const PartnershipPage = lazy(() => import('./pages/PartnershipPage'));

const LOADER_KEY = 's7-loader-done';

function hasSeenLoader() {
  try {
    return sessionStorage.getItem(LOADER_KEY) === '1';
  } catch {
    return false;
  }
}

function markLoaderSeen() {
  try {
    sessionStorage.setItem(LOADER_KEY, '1');
  } catch {
    /* ignore */
  }
}

export default function App() {
  const [showLoader, setShowLoader] = useState(() => !hasSeenLoader());

  const handleLoaderComplete = useCallback(() => {
    markLoaderSeen();
    setShowLoader(false);
  }, []);

  return (
    <>
      {showLoader && <InitialLoader onComplete={handleLoaderComplete} />}

      <Suspense fallback={null}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/partnership" element={<PartnershipPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
