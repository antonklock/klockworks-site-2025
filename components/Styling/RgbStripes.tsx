type RgbStripesProps = {
  rotation?: number;
};

export default function RgbStripes(props: RgbStripesProps) {
  const rotation = props.rotation ?? 2;
  return (
    <div
      className={`w-[200%] h-16 flex flex-col gap-0.5 rotate-[${rotation}deg]`}
    >
      <div className="w-full h-full bg-kwRed"></div>
      <div className="w-full h-full bg-kwBlue"></div>
      <div className="w-full h-full bg-kwGreen"></div>
    </div>
  );
}
