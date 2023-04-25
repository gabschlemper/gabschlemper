import React, { useState } from 'react';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <div className="bg-grey-300 px-4 lg:px-14 py-6 bg-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="logo" className="w-8" />
          <h2>Gabriela Schlemper</h2>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-6 ">
            <li className="hover:opacity-50 transition-opacity cursor-pointer">
              <a href="/#home">Home</a>
            </li>
            <li className="hover:opacity-50 transition-opacity cursor-pointer	">
              <a href="/#about">About</a>
            </li>
            <li className="hover:opacity-50 transition-opacity cursor-pointer	">
              <a href="/#projects">Projects</a>
            </li>
            <li className="hover:opacity-50 transition-opacity cursor-pointer	">
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>

        <button
          className="flex items-center hover:text-gray-70 lg:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img src="menu-icon.svg" alt="menu icon" />
        </button>
      </div>
      {openMenu ? (
        <div className="bg-black lg:hidden">
          <ul className="flex flex-col w-100% items-center py-4">
            <li className="hover:opacity-50 transition-opacity cursor-pointer py-2">
              <a href="/#home">Home</a>
            </li>
            <li className="hover:opacity-50 transition-opacity cursor-pointer py-2	">
              <a href="/#about">About</a>
            </li>
            <li className="hover:opacity-50 transition-opacity cursor-pointer py-2	">
              <a href="/#projects">Projects</a>
            </li>
            <li className="hover:opacity-50 transition-opacity cursor-pointer py-2	">
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
