import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import '../Components/SearchBar.css'; 
import '../Components/Header.css'; 

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
