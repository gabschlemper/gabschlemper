import React from 'react';

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      class="bg-black rounded-full border-solid hover:bg-white transition-all border-white border py-4 px-10 text-grey-100"
    >
      {children}
    </button>
  );
}

export default Button;
