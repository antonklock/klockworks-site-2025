import { useRive } from "@rive-app/react-canvas";
import { EventType, RiveEventType } from "@rive-app/canvas";
import { useEffect } from "react";

function SayHelloButton() {
  const handleClick = () => {
    window.location.href = "mailto:anton@klockworks.se";
  };

  const { rive, RiveComponent } = useRive({
    src: "/rive/sayHelloButton.riv",
    artboard: "Button",
    autoplay: true,
    stateMachines: "State Machine 1",
  });

  // @ts-expect-error missing riveEvent type
  const onRiveEventReceived = (riveEvent) => {
    const eventData = riveEvent.data;
    if (eventData.type === RiveEventType.General) {
      if (eventData.name === "clicked") handleClick();
    }
  };

  useEffect(() => {
    if (rive) {
      rive.on(EventType.RiveEvent, onRiveEventReceived);
    }
  }, [rive]);

  return (
    <div className="absolute w-[512px] h-[512px] -ml-[170px] -mt-56">
      <RiveComponent />
    </div>
  );
}

export default SayHelloButton;
