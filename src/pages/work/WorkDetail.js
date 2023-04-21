import React from 'react';
import { works } from '../../data';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

const WorkDetail = ({ id }) => {
  const item = works[id];
  if (!item) {
    return null;
  }

  return (
    <>
      <Header />
      <div class="font-['Roboto_Slab']">
        <div class="flex flex-col items-center justify-center h-96">
          <h1 class="text-2xl lg:text-3xl uppercase pb-5 ">{item.title}</h1>
          <h3 class="pb-6 text-grey-100 max-w-xl leading-8 lg:leading-10 lg:text-lg">
            {item.overview}
          </h3>
          <Button href={item.link}>Project Link</Button>
        </div>
        <div class="bg-white py-16 px-5">
          <div class="max-w-4xl m-auto">
            <img src={item.img} alt={item.title} />
            <h4 class="lg:text-3xl">Project Description</h4>
            <p class="text-grey-300 leading-8">{item.description}</p>
            <h4 class="lg:text-3xl ">Tools Used</h4>
            <div class="flex gap-3">
              {item.tools.map((item) => (
                <span
                  key={item}
                  class="text-grey-200 bg-grey-50 px-3 py-2 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
            <h4 class="lg:text-3xl ">Features</h4>
            <ul>
              {item.features.map((item) => (
                <li
                  key={item}
                  class="text-grey-200 py-2 rounded-md list-disc ml-4"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div class="flex gap-2 mt-4">
              <Button href={item.link}>Project Link</Button>
              <a
                href="/"
                class="text-black flex items-center gap-2 ml-4 hover:opacity-50"
              >
                Go Back
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkDetail;
