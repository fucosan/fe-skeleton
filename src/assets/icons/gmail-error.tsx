import * as React from "react";

type SvgProps = React.SVGProps<SVGSVGElement>;

const GmailError: React.FC<SvgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g fill="#333" clipPath="url(#a)">
      <path d="M13.108 2.5H6.892L2.5 6.892v6.216L6.892 17.5h6.216l4.392-4.392V6.892L13.108 2.5Zm2.725 9.917-3.416 3.416H7.583l-3.416-3.416V7.583l3.416-3.416h4.834l3.416 3.416v4.834Z" />
      <path d="M10.833 5.833H9.166v5h1.667v-5ZM10.833 12.5H9.166v1.667h1.667V12.5Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default GmailError;
