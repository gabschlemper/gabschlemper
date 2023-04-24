import React from 'react';
import Images from './Images';
import Button from './Button';
import { works } from '../data';

const Projects = () => {
  const worksData = Object.values(works);

  return (
    <section id="projects" className="px-4 lg:px-14 py-14">
      <div>
        <h1 className="text-2xl lg:text-3xl text-grey-100 uppercase text-center">
          Projects
        </h1>
        <div className="w-14 bg-grey-200 h-1 mt-2 mb-5 lg:mb-10 m-auto" />

        {worksData.map((item) => {
          return (
            <div
              key={item}
              className="text-center lg:text-left flex flex-col lg:flex-row items-center gap-6 lg:gap-24"
            >
              <img
                alt="project overview"
                src={Images.alanHarder}
                className="shrink md:max-w-xl"
              />
              <div className="grow">
                <h2 className="mb-3">{item.title}</h2>
                <h3 className="text-grey-100 mb-8">{item.overview}</h3>
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
