import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/widgets/Header/Header';
import Footer from '@/widgets/Footer/Footer';

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;