import * as React from "react"

type SvgProps = React.SVGProps<SVGSVGElement>;

const FilterAlt: React.FC<SvgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#333"
        d="M3.542 5.175c1.683 2.158 4.791 6.158 4.791 6.158v5c0 .459.375.834.834.834h1.666a.836.836 0 0 0 .834-.834v-5s3.1-4 4.783-6.158a.831.831 0 0 0-.658-1.342H4.2a.831.831 0 0 0-.658 1.342Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default FilterAlt;
