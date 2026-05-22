import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToHash from '../components/ScrollToHash';
import PageTransition from '../components/PageTransition';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SiteLayout() {
  return (
    <div className="font-sans overflow-x-hidden">
      <ScrollToHash />
      <PageTransition />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
