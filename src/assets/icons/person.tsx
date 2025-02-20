import React from 'react';

interface PersonIconProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}

const PersonIcon: React.FC<PersonIconProps> = ({ className = '', width = 22, height = 22, fill = 'none', ...props }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 22 22" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)">
      <path
        stroke="#C7CEE0"
        strokeWidth={1.25}
        d="M14.042 7.333A3.04 3.04 0 0 1 11 10.375 3.04 3.04 0 0 1 7.96 7.333 3.04 3.04 0 0 1 11 4.292a3.04 3.04 0 0 1 3.042 3.041ZM4.292 16.5c0-.38.185-.76.6-1.142.42-.387 1.03-.735 1.756-1.026 1.452-.581 3.207-.874 4.352-.874 1.146 0 2.9.293 4.352.874.726.291 1.337.639 1.756 1.026.415.383.6.762.6 1.142v1.208H4.293V16.5Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default PersonIcon;
