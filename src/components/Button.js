import React from 'react';

const Button = ({ children, href, contained, uppercase }) => {
  return (
    <a
      href={href}
      class={`${
        contained
          ? `bg-white text-grey-100`
          : `bg-black border border-white border-solid`
      }
      ${uppercase ? `uppercase` : `normal-case`}
        rounded-full  transition-all py-4 px-10 hover:cursor-pointer hover:opacity-50
      `}
    >
      {children}
    </a>
  );
};

export default Button;
