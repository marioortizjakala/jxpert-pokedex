// components/Layout.tsx
import React, { ReactNode } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header title={'Pokédex'} />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
