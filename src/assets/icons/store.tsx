import React from 'react';

interface StoreIconProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}

const StoreIcon: React.FC<StoreIconProps> = ({ className = '', width = 22, height = 22, fill = 'none' }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 22 22" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_6403_4300)">
      <path d="M4.16667 12.8334V12.3334H3.66667H3.25V11.0495L4.07657 6.91669H17.9234L18.75 11.0495V12.3334H18.3333H17.8333V12.8334V17.8334H17V12.8334V12.3334H16.5H12.8333H12.3333V12.8334V17.8334H4.16667V12.8334ZM11 17H11.5V16.5V12.8334V12.3334H11H5.5H5V12.8334V16.5V17H5.5H11ZM4.16667 4.16669H17.8333V5.00002H4.16667V4.16669Z" stroke="#C9C9C9" />
    </g>
    <defs>
      <clipPath id="clip0_6403_4300">
        <rect width={width} height={width} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default StoreIcon;
