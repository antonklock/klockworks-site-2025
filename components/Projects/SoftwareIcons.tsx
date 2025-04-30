import SoftwareIcon from "./SoftwareIcon";

interface SoftwareIconsProps {
  icons: string[];
}

const SoftwareIcons = ({ icons }: SoftwareIconsProps) => {
  return (
    <div className="flex gap-2 mb-2">
      {icons.map((icon, index) => (
        <SoftwareIcon key={index} name={icon} />
      ))}
    </div>
  );
};

export default SoftwareIcons;
