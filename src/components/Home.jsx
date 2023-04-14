import React from 'react';
import Button from './Button';
import Images from './Images';
import { socialMediaData } from '../data';
import SocialMediaIcons from './SocialMediaIcons';

function Home() {
  return (
    <div class="px-4 lg:px-14 py-6 lg:py-14 flex justify-center items-center h-[34rem] lg:h-[42rem]">
      <SocialMediaIcons />
      <div class="flex flex-col items-center">
        <h1 class="pb-5 lg:pb-10 text-center text-2xl lg:text-3xl uppercase font-normal	">
          Hello, My Name is <strong> Gabriela Schlemper!</strong>
        </h1>
        <p class="pb-8 lg:pb-16 text-center text-grey-100 max-w-xl leading-8 lg:leading-10 lg:text-lg">
          I'm a front-end dev focused on HTML, CSS, and React. I build
          beautiful, responsive websites with dynamic and interactive
          interfaces.
        </p>
        <Button>Contact me!</Button>
      </div>
    </div>
  );
}

export default Home;
