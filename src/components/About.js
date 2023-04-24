import React from 'react';
import Logo from '../images/logo.svg';
import Images from './Images';

const About = () => {
  return (
    <section id="about" class="bg-grey-300 px-4 lg:px-14 py-14">
      <div>
        <div>
          <h1 class="text-2xl lg:text-3xl text-grey-100 uppercase text-center">
            About Me
          </h1>
          <div class="w-14 bg-grey-200 h-1 mt-2 mb-5 lg:mb-10 m-auto" />
          <div class="flex gap-14 flex-col lg:flex-row text-center lg:text-left">
            <img src={Logo} alt="logo" class="m-auto" />
            <div>
              <div class="leading-8 lg:leading-10 lg:text-lg flex flex-col justify-center items-start max-w-5xl pb-10">
                <p>
                  Hi there!
                  <br />
                  I'm a front-end developer with a focus on HTML, CSS, and
                  ReactJS. I love building beautiful, responsive websites and
                  web applications that are easy to use and navigate.
                </p>
                <p>
                  ReactJS is one of my favorite tools to work with because of
                  its versatility and power. I enjoy using its components and
                  hooks to build dynamic and interactive interfaces that bring
                  websites to life.
                </p>
              </div>
              <div class="flex flex-col md:flex-row justify-between gap-8 lg:gap-32">
                <span class="shrink text-grey-100">my stack</span>
                <div class="flex grow justify-between">
                  <img src={Images.jsIcon} class="w-8" alt="JavaScript Icon" />
                  <img src={Images.htmlIcon} class="w-8" alt="Html Icon" />
                  <img src={Images.cssIcon} class="w-8" alt="Css Icon" />
                  <img src={Images.reactIcon} class="w-8" alt="React Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
