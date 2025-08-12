import Rive from "@rive-app/react-canvas";
import { Dispatch, SetStateAction } from "react";

interface SayHelloButtonProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

function SayHelloButton(props: SayHelloButtonProps) {
  const { setModalOpen } = props;

  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <div
      className="absolute w-[512px] h-[512px] -ml-[170px] -mt-56"
      data-say-hello-button
    >
      <Rive
        src="/rive/sayHelloButton.riv"
        stateMachines="State Machine 1"
        artboard="Button"
        onClick={handleClick}
      />
    </div>
  );
}

export default SayHelloButton;
