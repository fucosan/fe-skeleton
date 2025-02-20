import React from 'react';

interface SettingIconProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}

const SettingIcon: React.FC<SettingIconProps> = ({ className = '', width = 22, height = 22, fill = 'none', ...props }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 22 22" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)">
      <path
        stroke="#C9C9C9"
        d="m17.05 11.796-.038.282.224.177 1.8 1.414-1.71 2.958-2.133-.857-.267-.107-.226.176a5.786 5.786 0 0 1-1.367.794l-.267.108-.04.285-.322 2.274H9.288l-.323-2.274-.04-.285-.266-.108c-.493-.2-.941-.47-1.371-.797l-.226-.171-.263.105-2.133.857-1.71-2.957 1.816-1.414.235-.183-.05-.294A4.877 4.877 0 0 1 4.9 11c0-.245.032-.517.076-.78l.049-.293-.235-.183L2.974 8.33l1.701-2.957 2.133.857.262.105.226-.17a6.12 6.12 0 0 1 1.372-.798l.266-.108.04-.285.323-2.274h3.416l.322 2.274.04.285.267.108c.493.2.94.47 1.37.797l.226.171.264-.105 2.132-.857 1.71 2.957-1.815 1.414-.235.183.049.293c.04.241.057.506.057.78 0 .282-.017.544-.05.796ZM7.2 11a3.81 3.81 0 0 0 3.8 3.8 3.81 3.81 0 0 0 3.8-3.8A3.81 3.81 0 0 0 11 7.2 3.81 3.81 0 0 0 7.2 11Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SettingIcon;
