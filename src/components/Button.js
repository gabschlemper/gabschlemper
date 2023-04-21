import React from 'react';

const Button = ({ children, href, contained, uppercase }) => {
  return (
    <a
      href={href}
      class={`${
        contained
          ? `bg-white text-grey-100 hover:opacity-50`
          : `bg-black border border-white border-solid hover:bg-white hover:text-grey-100`
      }
      ${uppercase ? `uppercase` : `normal-case`}
        rounded-full  transition-all py-4 px-10 hover:cursor-pointer 
      `}
    >
      {children}
    </a>
  );
};

export default Button;
