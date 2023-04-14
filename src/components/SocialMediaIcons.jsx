import React from 'react';
import { socialMediaData } from '../data';

function SocialMediaIcons({ horizontal, showMobile }) {
  return (
    <div
      class={`gap-2  ${
        showMobile ? 'flex mt-8 lg:mt-0' : 'hidden left-14 absolute lg:flex '
      } ${horizontal ? 'flex-row' : 'flex-col'}`}
    >
      {socialMediaData.map((item) => {
        return (
          <a href={item.link} class="hover:opacity-50 transition-opacity">
            <img src={item.img} alt={item.title} class="w-8" />
          </a>
        );
      })}
    </div>
  );
}

export default SocialMediaIcons;
