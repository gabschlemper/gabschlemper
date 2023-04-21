import React from 'react';
import Button from './Button';
import SocialMediaIcons from './SocialMediaIcons';

const Home = () => {
  return (
    <section class="px-4 lg:px-14 py-6 lg:py-14 flex justify-center items-center h-[34rem] lg:h-[42rem]">
      <SocialMediaIcons />
      <div class="flex flex-col items-center">
        <h1 class="pb-5 lg:pb-10 text-center text-2xl lg:text-3xl uppercase">
          Hello, My Name is <strong> Gabriela Schlemper!</strong>
        </h1>
        <h3 class="pb-6 lg:pb-8 text-center text-grey-100 max-w-xl leading-8 lg:leading-10 lg:text-lg">
          I'm a front-end dev focused on HTML, CSS, and React. I build
          beautiful, responsive websites with dynamic and interactive
          interfaces.
        </h3>
        <Button uppercase href="#projects">
          Projects
        </Button>
      </div>
    </section>
  );
};

export default Home;
