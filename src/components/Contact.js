import React, { useState } from 'react';
import Images from './Images';
const Contact = () => {
  const [buttonText, setButtonText] = useState('gabschlemper@gmail.com');

  function copyClipboard() {
    navigator.clipboard.writeText('gabschlemper@gmail.com');
  }

  function handleClick() {
    setButtonText('Copied to clipboard!');
  }

  return (
    <>
      <section id="contact" class="text-center py-20  bg-[#1B1B1B]">
        <h1 class="text-2xl lg:text-3xl text-grey-100 uppercase ">
          Get in Touch!
        </h1>
        <div class="w-14 bg-grey-200 h-1 mt-2 mb-3 lg:mb-6 m-auto" />
        <p class="mb-6 lg:mb-10">Have a question or want to work together?</p>
        <div class="flex gap-3 justify-center">
          <img src={Images.emailIcon} alt="" srcset="" />
          <button
            class="text-grey-100 hover:underline hover:cursor-pointer hover:opacity-50 transition-all	"
            onClick={(copyClipboard, handleClick)}
          >
            {buttonText}
          </button>
        </div>
        <div class="flex gap-3 justify-center mt-3">
          <img src={Images.phoneIcon} alt="" srcset="" />
          <div class="text-grey-100 hover:underline hover:cursor-pointer hover:opacity-50 transition-all	">
            +353 83 206 2152
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
