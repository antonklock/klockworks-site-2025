import Rive from "@rive-app/react-canvas";
import { Dispatch, SetStateAction, useRef, useEffect } from "react";

interface SayHelloButtonProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setButtonPosition: Dispatch<
    SetStateAction<{ x: number; y: number } | undefined>
  >;
}

function SayHelloButton(props: SayHelloButtonProps) {
  const { setModalOpen, setButtonPosition } = props;
  const riveRef = useRef<any>(null);

  useEffect(() => {
    // Calculate button position when component mounts
    const buttonElement = document.querySelector("[data-say-hello-button]");
    if (buttonElement) {
      const rect = buttonElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setButtonPosition({ x: centerX, y: centerY });
    }
  }, [setButtonPosition]);

  useEffect(() => {
    // Wait for Rive to be ready
    const timer = setTimeout(() => {
      if (riveRef.current) {
        const rive = riveRef.current;

        const handleStateChange = (event: any) => {
          console.log("Rive state change:", event);
          if (event.data && event.data.name === "isOpen") {
            const isOpen = event.data.values?.OPEN;
            if (typeof isOpen === "boolean") {
              setModalOpen(isOpen);
            }
          }
        };

        rive.addEventListener("statechange", handleStateChange);

        return () => {
          rive.removeEventListener("statechange", handleStateChange);
        };
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [setModalOpen]);

  return (
    <div
      className="absolute w-[512px] h-[512px] -ml-[170px] -mt-56"
      data-say-hello-button
    >
      <Rive
        ref={riveRef}
        src="/rive/sayHelloButton.riv"
        stateMachines="State Machine 1"
        artboard="Button"
      />
    </div>
  );
}

export default SayHelloButton;
