import React from 'react';

const Contact = () => {
  return (
    <>
      <div class="w-[300px] lg:w-[900px] bg-grey-200 h-1 mt-2 mb-8 lg:mb-14 m-auto" />
      <section id="contact" class="text-center pb-20 scroll-smooth">
        <h1 class="text-2xl lg:text-3xl text-grey-100 uppercase ">
          Get in Touch!
        </h1>
        <div class="w-14 bg-grey-200 h-1 mt-2 mb-4 lg:mb-8 m-auto" />
        <p class="mb-6 lg:mb-10">Have a question or want to work together?</p>
        <span class="text-grey-100 hover:underline hover:cursor-pointer hover:opacity-50 transition-all	">
          gabschlemper@gmail.com
        </span>
      </section>
    </>
  );
};

export default Contact;
