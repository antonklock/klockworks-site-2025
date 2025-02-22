interface CircleProps {
  isHovered: boolean;
  color: string;
  onClick: () => void;
}

interface ThreeCirclesProps {
  isHovered: boolean;
  onRed: () => void;
  onYellow: () => void;
  onGreen: () => void;
}

const Circle = ({ isHovered, color, onClick }: CircleProps) => (
  <span
    className={`w-3 h-3 bg-[#444444] rounded-full border ${
      isHovered ? "border-black" : "border-[#aaaaaa]"
    } group-hover:border-black hover:bg-${color}-700 transition duration-300 ease-in-out hover:bg-${color}-700`}
    onClick={onClick}
  ></span>
);

const ThreeCircles = ({
  isHovered,
  onRed,
  onYellow,
  onGreen,
}: ThreeCirclesProps) => (
  <>
    <Circle isHovered={isHovered} color="red" onClick={onRed} />
    <Circle isHovered={isHovered} color="yellow" onClick={onYellow} />
    <Circle isHovered={isHovered} color="green" onClick={onGreen} />
  </>
);

export default ThreeCircles;
