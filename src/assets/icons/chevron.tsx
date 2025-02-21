import * as React from "react";

type SvgProps = React.SVGProps<SVGSVGElement>;

interface ChevronProps extends SvgProps {
  direction: "up" | "down";
}

const Chevron: React.FC<ChevronProps> = ({ direction, ...props }) => {
  const upPath = "M13.825 13.342 10 9.525l-3.825 3.817L5 12.167l5-5 5 5-1.175 1.175Z";
  const downPath = "m6.484 7.516 4.016 4.008 4.016-4.008L15.75 8.75 10.5 14 5.25 8.75l1.234-1.234Z";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={21}
      fill="none"
      {...props}
    >
      <path
        fill="#C9C9C9"
        d={direction === "up" ? upPath : downPath}
      />
    </svg>
  );
};

export default Chevron;
