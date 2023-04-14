import React from 'react';
import Images from './Images';
import SocialMediaIcons from './SocialMediaIcons';

function Footer() {
  return (
    <div class="px-4 lg:px-14 py-16 bg-grey-300 flex flex-col lg:flex-row items-center text-center lg:text-left justify-between">
      <div>
        <h1 class="pb-5 lg:pb-10 text-2xl lg:text-3xl uppercase font-normal">
          Gabriela Schlemper!
        </h1>
        <p class="text-grey-100">
          🔥 A front-end developer focused on HTML, CSS, JavaScript and ReactJS.
        </p>
      </div>
      <SocialMediaIcons horizontal showMobile />
      {/* <div class="flex gap-2 mt-6">
        <img src={Images.github} />
        <img src={Images.linkedin} />
        <img src={Images.twitter} />
      </div> */}
    </div>
  );
}

export default Footer;
