import React from "react";

interface Props {
  svg: string;
  title: string;
  description: string;
}

const Do: React.FC<Props> = ({ svg, title, description }) => (
  <div className="block">
    <img src={svg} alt="" className="w-[40px] h-[40px]" draggable={false} />
    <h1 className="mt-5 font-medium text-2xl">{title}</h1>
    <h2 className="mt-3 text-xl sm:w-[23rem] w-[22rem] font-light">
      {description}
    </h2>
  </div>
);

export default Do;
