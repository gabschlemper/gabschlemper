import React from 'react';
import Logo from '../images/logo.svg';
import Images from './Images';
import Button from './Button';
import { works } from '../data';

const Projects = () => {
  const worksData = Object.values(works);
  const key = Object.keys(worksData);

  return (
    <section id="projects" class="px-4 lg:px-14 py-14">
      <div>
        <h1 class="text-2xl lg:text-3xl text-grey-100 uppercase text-center">
          Projects
        </h1>
        <div class="w-14 bg-grey-200 h-1 mt-2 mb-5 lg:mb-10 m-auto" />

        {worksData.map((item) => {
          return (
            <div class="text-center lg:text-left flex flex-col lg:flex-row items-center gap-6 lg:gap-24">
              <img src={Images.alanHarder} class="shrink md:max-w-xl" />
              <div class="grow">
                <h2 class="mb-3">{item.title}</h2>
                <h3 class="text-grey-100 mb-8">{item.overview}</h3>
                <Button href={item.url}>View Project</Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
