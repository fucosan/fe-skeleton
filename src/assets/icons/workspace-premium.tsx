import React from 'react';

interface WorkspacePremiumIconProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}

const WorkspacePremiumIcon: React.FC<WorkspacePremiumIconProps> = ({ className = '', width = 22, height = 22, fill = 'none', ...props }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 22 22" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)">
      <path
        stroke="#C9C9C9"
        d="m11.303 10.538-.302-.23-.303.23-.888.673.348-1.127.1-.326-.266-.212-.999-.796h1.537l.112-.346L11 7.297l.359 1.107.112.346h1.532L12 9.545l-.268.212.1.327.347 1.122-.877-.668ZM6 14.007v-.189l-.124-.141a6.797 6.797 0 0 1-1.709-4.51A6.831 6.831 0 0 1 11 2.333a6.831 6.831 0 0 1 6.834 6.834 6.797 6.797 0 0 1-1.71 4.51l-.124.141v6.572l-4.842-1.614-.158-.053-.158.053L6 20.39v-6.383Zm11-4.84c0-3.31-2.69-6-6-6s-6 2.69-6 6 2.69 6 6 6 6-2.69 6-6Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default WorkspacePremiumIcon;
