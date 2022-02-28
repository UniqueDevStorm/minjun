import React from "react";

interface Props {
  title: string;
  period: string;
  description: string;
}

const Experience: React.FC<Props> = ({ title, period, description }) => {
  return (
    <>
      <div className="sm:mt-10 mt-8">
        <h1 className="text-3xl sm:block hidden">
          {title} {period}
        </h1>
        <h1 className="text-xl sm:hidden block">
          {title}
          <br />
          {period}
        </h1>
        <h2 className="text-xl font-light sm:w-[50vw] break-words mt-5">
          {description}
        </h2>
      </div>
    </>
  );
};

export default Experience;
