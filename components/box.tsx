"use client";

import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

// Optional (?:) class name with Tailwind Merge allows use to create a reusable box component with global
// styles as well as new styles when reused. We can pass additional classes as props to className when
// rendering the box component in other areas of this application

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge("bg-neutral-900 rounded-lg h-fit w-full", className)}
    >
      {children}
    </div>
  );
};

export default Box;
