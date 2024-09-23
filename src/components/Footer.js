import React from 'react';
import LogoWhite from '../assets/img/logo-white.svg';

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className="container mx-auto text-white flex justify-between" >

        <a href="/">
          <img src={LogoWhite} alt="" />
        </a>
        Copyyright &copy;2024. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
