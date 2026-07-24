import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { QuoteModalProvider } from '@/components/QuoteModal';

export default function Layout() {
  return (
    <QuoteModalProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}