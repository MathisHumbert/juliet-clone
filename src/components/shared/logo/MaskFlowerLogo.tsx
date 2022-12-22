import * as React from 'react';

export default function MaskFlowerLogo() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='-528 708 82 84.9'
      style={{
        enableBackground: 'new -528 708 82 84.9',
      }}
      xmlSpace='preserve'
    >
      <defs>
        <path id='a' d='M-528 708h82v84.9h-82z' />
      </defs>
      <clipPath id='b'>
        <use
          xlinkHref='#a'
          style={{
            overflow: 'visible',
          }}
        />
      </clipPath>
      <g
        style={{
          clipPath: 'url(#b)',
        }}
      >
        <path
          d='M-527.9 708.1c21.2-.6 40.1 17.6 41 39.6.8-10.8 4.8-20.2 12.6-27.9 7.7-7.7 17.2-11.6 28.3-11.8v1.1c0 13.8.3 27.7-.1 41.5-.4 17.9-8.5 31.3-24.9 38.8-17.8 8.2-38.7 1.6-49.7-15.1-4.6-6.9-7.1-15-7.2-23.3-.1-14.1 0-28.2 0-42.3-.1-.1 0-.3 0-.6z'
          style={{
            fill: '#282829',
          }}
        />
      </g>
    </svg>
  );
}
