import React from 'react';

export function CodeSandboxIcon({ width = '1.4rem', height = '1.4rem' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <path
        fill="currentColor"
        d="m2.667 8l13.938-8l13.943 8l.12 15.932L16.605 32L2.667 24zm2.786 3.307v6.344l4.458 2.479v4.688l5.297 3.063V16.85zm22.318 0l-9.755 5.542V27.88l5.292-3.063v-4.682l4.464-2.484zM6.844 8.802l9.74 5.526l9.76-5.573l-5.161-2.932l-4.547 2.594l-4.573-2.625z"
      />
    </svg>
  );
}
