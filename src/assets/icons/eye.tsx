import React from 'react';


interface EyeIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Eye: React.FC<EyeIconProps> = ({ className = '', width = 20, height = 20, fill = 'none', ...props }) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill={fill}
        d="M10 3.75C5.835 3.75 2.277 6.342.835 10c1.442 3.658 5 6.25 9.167 6.25 4.166 0 7.725-2.592 9.166-6.25-1.441-3.658-5-6.25-9.166-6.25Zm0 10.417A4.168 4.168 0 0 1 5.835 10c0-2.3 1.867-4.167 4.167-4.167S14.167 7.7 14.167 10s-1.866 4.167-4.166 4.167ZM10 7.5A2.497 2.497 0 0 0 7.5 10c0 1.383 1.117 2.5 2.5 2.5 1.384 0 2.5-1.117 2.5-2.5S11.385 7.5 10 7.5Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Eye;

