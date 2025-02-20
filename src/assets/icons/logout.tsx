import React from 'react';

interface LogoutIconProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}

const LogoutIcon: React.FC<LogoutIconProps> = ({ className = '', width = 22, height = 22, fill = 'none', ...props }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 22 22" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#C9C9C9"
        d="M15.583 6.417 14.29 7.709l2.366 2.374H7.332v1.834h9.322l-2.365 2.365 1.293 1.301L20.166 11l-4.583-4.583ZM3.666 4.583H11V2.75H3.666a1.839 1.839 0 0 0-1.833 1.833v12.834c0 1.008.825 1.833 1.833 1.833H11v-1.833H3.666V4.583Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default LogoutIcon;
