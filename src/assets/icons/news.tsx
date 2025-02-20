import React from 'react';

interface NewsIconProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}

const NewsIcon: React.FC<NewsIconProps> = ({ className = '', width = 22, height = 22, fill = 'none', ...props }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 22 22" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="#fff"
      stroke="#C9C9C9"
      d="M5.917 15.583v.5h10.166V13.25H5.917v2.333Zm0-3.666v.5h10.166V9.583H5.917v2.334ZM13.25 8.25v.5h5.374l-.854-.854-3.666-3.666-.854-.854V8.25Zm-7.333 0v.5H11.5V5.917H5.917V8.25Zm-1.334 10.5c-.37 0-.675-.126-.94-.392a1.266 1.266 0 0 1-.393-.941V4.583c0-.37.126-.675.392-.94.266-.267.57-.393.941-.393h9.877l4.29 4.29v9.877c0 .37-.126.675-.392.94-.266.267-.57.393-.941.393H4.583Z"
    />
  </svg>
);

export default NewsIcon;
