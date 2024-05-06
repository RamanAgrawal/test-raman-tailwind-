import Image from "next/image";
import React, { FC } from "react";
type Props = {
  className?: string;
};
const DropDown2: FC<Props> = ({ className }) => {
  return (
    <ul
      className={`absolute h-[40vh] w-[12vw] left-0 pt-10 transition-all duration-150 hidden group-hover:block ${className}`}
    >
      <div className="container bg-white h-full rounded-lg p-8">
        {Array.from({ length: 5 }).map(() => (
          <div className="text-gray-700 mb-5">Services</div>
        ))}
      </div>
    </ul>
  );
};

export default DropDown2;
