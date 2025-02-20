import React from 'react';

interface WatchIconProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}

const WatchIcon: React.FC<WatchIconProps> = ({ className = '', width = 22, height = 22, fill = 'none', ...props }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 22 22" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)">
      <path
        stroke="#C9C9C9"
        d="m15.054 5.335.032.19.151.12A6.811 6.811 0 0 1 17.834 11a6.812 6.812 0 0 1-2.597 5.355l-.151.12-.032.19-.81 4.835H7.758l-.802-4.834-.032-.192-.152-.12A6.779 6.779 0 0 1 4.167 11a6.779 6.779 0 0 1 2.605-5.354l.152-.12.032-.192L7.758.5h6.486l.81 4.835ZM11 5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default WatchIcon;
