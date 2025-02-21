import * as React from "react"


type SvgProps = React.SVGProps<SVGSVGElement>

const MoveTopRight: React.FC<SvgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={21}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#8D8D8D"
        d="M4.75 5.5v1.667h6.8l-7.592 7.992 1.117 1.175 7.592-7.992V15.5h1.583v-10h-9.5Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h19v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default MoveTopRight
