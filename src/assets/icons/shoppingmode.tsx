import React from 'react';

interface ShoppingModeIconProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}

const ShoppingModeIcon: React.FC<ShoppingModeIconProps> = ({ className = '', width = 22, height = 22, fill = 'none', ...props }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 22 22" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      stroke="#C9C9C9"
      d="m2.714 10.826 8.066-8.09c.122-.12.267-.22.441-.295.164-.071.34-.108.535-.108h6.554c.37 0 .675.126.941.392.266.266.392.571.392.942v6.554c0 .194-.036.37-.107.534-.076.175-.175.32-.296.441l-8.067 8.067a1.286 1.286 0 0 1-.953.404c-.367 0-.676-.128-.952-.404L2.714 12.71a1.261 1.261 0 0 1-.381-.941c0-.384.126-.687.38-.942ZM14.69 4.631l.353.353-.353-.353a1.825 1.825 0 0 0-.548 1.327c0 .513.186.966.548 1.328.362.362.814.547 1.327.547.514 0 .966-.185 1.328-.547.362-.362.547-.815.547-1.328 0-.513-.185-.965-.547-1.327a1.825 1.825 0 0 0-1.328-.548c-.513 0-.965.186-1.327.548Z"
    />
  </svg>
);

export default ShoppingModeIcon;
