import React from 'react';

interface NotificationIconProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}

const NotificationIcon: React.FC<NotificationIconProps> = ({ className = '', width = 24, height = 24, fill = 'none', ...props }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#333"
        d="M11.877 21.7c1.083 0 1.97-.886 1.97-1.97h-3.94c0 1.084.877 1.97 1.97 1.97Zm5.908-5.908V10.87c0-3.023-1.615-5.553-4.431-6.223v-.67c0-.816-.66-1.476-1.477-1.476-.817 0-1.477.66-1.477 1.477v.67c-2.826.669-4.43 3.19-4.43 6.222v4.923L4 17.762v.984h15.754v-.984l-1.97-1.97Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default NotificationIcon;
