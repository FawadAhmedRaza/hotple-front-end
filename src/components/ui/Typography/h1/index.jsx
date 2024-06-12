import React from "react";

const H1 = ({ children, className }) => {
  return (
    <h1
      className={`text-26fs md:text-32fs leading-9 sm:leading-10 md:leading-54lh font-semibold dark:text-dark_primary_label text-slate   ${className} `}
    >
      {children}
    </h1>
  );
};

export default H1;
