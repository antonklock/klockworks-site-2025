import React from "react";
import Image from "next/image";

interface SectionTitleProps {
  icon: string;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center mt-24 mb-8 md:mb-16 gap-2">
      <Image src={icon} alt={`${title} icon`} width={40} height={40} />
      <h2 className="text-4xl md:text-[5rem] font-bold text-kwRed">{title}</h2>
    </div>
  );
};

export default SectionTitle;
