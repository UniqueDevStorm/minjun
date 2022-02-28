import React from "react";

interface Props {
  icon: string;
  name: string;
  mobile?: boolean;
}

const Utility: React.FC<Props> = ({ icon, name, mobile }) => {
  if (!mobile) {
    return (
      <div className="flex items-center sm:gap-5">
        <img
          src={icon}
          alt=""
          className="w-[50px] h-[50px]"
          draggable={false}
        />
        <h1 className="font-light text-2xl sm:w-[114px] w-[100px]">{name}</h1>
      </div>
    );
  } else {
    return <img src={icon} alt="" className="w-[50px] h-[50px]" />;
  }
};

export default Utility;
