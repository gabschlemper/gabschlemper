import React from 'react';
import Logo from '../images/logo.svg';
import Images from './Images';
import Button from './Button';
import { projectsData } from '../data';

function Projects() {
  return (
    <div class="px-4 lg:px-14 py-14 ">
      <div>
        <h1 class="text-2xl lg:text-3xl text-grey-100 uppercase text-center">
          Projects
        </h1>
        <div class="w-14 bg-grey-200 h-1 mt-2 mb-5 lg:mb-10 m-auto" />
        {projectsData.map((item) => {
          return (
            <div class="text-center lg:text-left flex flex-col lg:flex-row items-center gap-6 lg:gap-24 mb-16">
              <img src={item.img} class="shrink md:max-w-xl" />
              <div class="grow">
                <h2 class="mb-3">{item.title}</h2>
                <p class="text-grey-100 mb-8">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  class="bg-black rounded-full border-solid hover:bg-white transition-all border-white border py-4 px-10 text-grey-100"
                >
                  View Project
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
