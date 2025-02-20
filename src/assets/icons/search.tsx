import { cn } from "@/lib/utils";
import * as React from "react";

type SvgProps = React.SVGProps<SVGSVGElement> & {
  color?: string;
};

const Search: React.FC<SvgProps> = ({ color = '#C9C9C9', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        className={cn(color)}
        strokeWidth={1.25}
        d="M14.71 15.125h.53l4.367 4.375-.607.607-4.375-4.366v-.616h.085Zm-1.047-.962-.34.293a5.846 5.846 0 0 1-3.823 1.42A5.875 5.875 0 1 1 15.375 10a5.846 5.846 0 0 1-1.419 3.823l-.293.34ZM4.375 10A5.119 5.119 0 0 0 9.5 15.125 5.119 5.119 0 0 0 14.625 10 5.119 5.119 0 0 0 9.5 4.875 5.119 5.119 0 0 0 4.375 10Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Search;
