import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
  return (
    <footer className="px-4 lg:px-14 py-16 bg-black flex flex-col lg:flex-row items-center text-center lg:text-left justify-between">
      <div>
        <h1 className="pb-5 lg:pb-10 text-2xl lg:text-3xl uppercase">
          Gabriela Schlemper!
        </h1>
        <p className="text-grey-100">
          🔥 A front-end developer focused on HTML, CSS, JavaScript and ReactJS.
        </p>
      </div>
      <SocialMediaIcons horizontal showMobile />
    </footer>
  );
};

export default Footer;
