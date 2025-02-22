import Image from "next/image";

interface CaseProps {
  image: string;
  title: string;
  description: string;
}

const Project = (props: CaseProps) => {
  const { image, title, description } = props;
  return (
    <div className="relative border-0.5 border-kwWhite rounded-lg overflow-hidden group transition duration-300 ease-in-out transform hover:scale-101">
      <div className="flex items-center p-2 bg-transparent border-b border-white group-hover:bg-kwWhite transition duration-300 ease-in-out">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-[#444444] rounded-full border border-kwWhite hover:bg-red-700 transition duration-300 ease-in-out"></span>
          <span className="w-3 h-3 bg-[#444444] rounded-full border border-kwWhite hover:bg-yellow-700 transition duration-300 ease-in-out"></span>
          <span className="w-3 h-3 bg-[#444444] rounded-full border border-kwWhite hover:bg-green-700 transition duration-300 ease-in-out"></span>
        </div>
      </div>
      <Image
        src={image}
        alt={title}
        layout="responsive"
        width={500}
        height={500}
        className="object-cover rounded-lg transition duration-300 ease-in-out"
        objectFit="cover"
      />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black bg-opacity-75 flex flex-col p-4 transition duration-300 ease-in-out">
        <h2 className="text-lg font-bold text-kwWhite">{title}</h2>
        <p className="text-xs text-kwWhite">{description}</p>
      </div>
    </div>
  );
};

export default Project;
