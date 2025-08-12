import Rive from "@rive-app/react-canvas";

export const SayHelloButton = () => (
  <div className="absolute w-[512px] h-[512px] -ml-[170px] -mt-56">
    <Rive
      src="/rive/sayHelloButton.riv"
      stateMachines="State Machine 1"
      artboard="Button"
    />
  </div>
);
