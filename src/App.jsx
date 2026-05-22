import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";

const PartnershipPage = lazy(() => import("./pages/PartnershipPage"));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/partnership" element={<PartnershipPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
