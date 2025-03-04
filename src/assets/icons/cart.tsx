import React from 'react';

interface CartIconProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}

const CartIcon: React.FC<CartIconProps> = ({ className = '', width = 22, height = 22, fill = 'none', ...props }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 22 22" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      stroke="#C9C9C9"
      d="M15.624 13.9c.1 0 .154.028.199.075a.296.296 0 0 1 .081.225c0 .1-.028.16-.083.215l-.001.002a.275.275 0 0 1-.216.083H6.801c-.418 0-.709-.166-.928-.542-.222-.381-.226-.719-.033-1.079l1.08-1.958.123-.224-.11-.231-2.88-6.08-.136-.286H2.78c-.1 0-.153-.028-.198-.076H2.58A.293.293 0 0 1 2.5 3.8c0-.1.029-.161.084-.217A.276.276 0 0 1 2.8 3.5h1.3c.051 0 .103.012.164.049.043.026.075.06.102.118l.003.007.54 1.14.136.286H17.164a.46.46 0 0 1 .218.04.173.173 0 0 1 .075.084c.055.108.065.22-.015.384l-2.835 5.11-.001.001a1.129 1.129 0 0 1-.403.434 1.043 1.043 0 0 1-.56.147H7.386l-.142.259-.88 1.6-.408.741H15.624Zm-8.823 4.6c-.306 0-.556-.103-.776-.323-.22-.22-.324-.47-.324-.777 0-.306.103-.556.324-.777.22-.22.47-.323.776-.323.307 0 .557.103.777.323.22.22.324.47.324.777 0 .306-.103.556-.324.777-.22.22-.47.323-.777.323Zm8.003 0c-.307 0-.557-.103-.777-.323-.22-.22-.324-.47-.324-.777 0-.306.104-.556.324-.777.22-.22.47-.323.777-.323.306 0 .556.103.777.323.22.22.323.47.323.777 0 .306-.103.556-.323.777-.22.22-.47.323-.777.323Z"
    />
  </svg>
);

export default CartIcon;
