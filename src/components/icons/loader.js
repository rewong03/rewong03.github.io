import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
    <title>Loader Logo</title>
    <g transform="translate(2, 2)">
      <g id="R" transform="scale(7.5) translate(4.8, 4.06)">
        <path
          d="M 0.5 5 V 0.5 H 2 M 2 0.5 C 3.5 0.5 3.5 2.5 2 2.5 H 0.5"
          stroke="currentColor"
          fill="none"
          strokeWidth="1"
        ></path>
        <polygon points="1.32,2.9 2.12,2.9 2.42,2.9 4,5 2.8,5" fill="currentColor" />
      </g>

      <path
        d="M 50 0 100 50 50 100 0 50 Z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default IconLoader;
