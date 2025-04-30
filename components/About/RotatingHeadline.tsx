import React, { useState, useEffect, useRef } from "react";
// import { addPropertyControls, ControlType } from "framer";

// --- Configuration ---
const wordsToRotate = [
  "a filmmaker",
  "an animator",
  "a developer",
  "a game maker",
  "a tryer of things",
  "a creator",
  "a madman",
  "a joker",
  "a regular guy",
  "a nerd",
  "a dad",
  "a friend",
  "a pirate",
  "a dreamer",
];
const preString = "I'm ";
const postString =
  "with a zest for moving experiences! Lets make some video content, motion graphics, games or other fun stuff!";
// --- End Configuration ---

// Define the props the component accepts from the Framer UI
interface Props {
  textColor: string;
  highlightColor: string;
  textSize: number;
  rotationSpeedMs: number; // Time to *wait* after a word is fully typed
  typingSpeedMs: number; // Time per letter typed OR deleted
}

// Define Animation Phases
type AnimationPhase = "TYPING_IN" | "WAITING" | "TYPING_OUT";

export function RotatingHeadline(props: Props): React.ReactElement {
  // Destructure props
  const {
    textColor,
    highlightColor,
    textSize,
    rotationSpeedMs,
    typingSpeedMs,
  } = props;

  // State for the index of the word currently being animated or just finished
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  // State for the word *currently displayed* on screen (being typed/deleted)
  const [displayedWord, setDisplayedWord] = useState(""); // Start empty
  // State for the current animation phase
  const [phase, setPhase] = useState<AnimationPhase>("TYPING_IN"); // Start by typing in the first word

  // Refs to store timeout IDs for cleanup
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const phaseTimeoutRef = useRef<NodeJS.Timeout | null>(null); // For WAITING phase delay

  // Effect: Manages the entire animation lifecycle based on the current phase
  useEffect(() => {
    // Always clear previous timeouts when phase or index changes
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    if (phaseTimeoutRef.current) clearTimeout(phaseTimeoutRef.current);

    const word = wordsToRotate[currentWordIndex];

    switch (phase) {
      case "TYPING_IN": {
        let currentLetterIndex = 0;
        const typeLetter = () => {
          if (currentLetterIndex <= word.length) {
            setDisplayedWord(word.substring(0, currentLetterIndex));
            currentLetterIndex++;
            typingTimeoutRef.current = setTimeout(typeLetter, typingSpeedMs);
          } else {
            // Finished typing in, move to WAITING
            typingTimeoutRef.current = null;
            setPhase("WAITING");
          }
        };
        // Start the typing animation
        typingTimeoutRef.current = setTimeout(typeLetter, typingSpeedMs);
        break;
      }

      case "WAITING": {
        // Wait for rotationSpeedMs, then start typing out
        phaseTimeoutRef.current = setTimeout(() => {
          setPhase("TYPING_OUT");
        }, rotationSpeedMs);
        break;
      }

      case "TYPING_OUT": {
        let currentLength = displayedWord.length;
        const deleteLetter = () => {
          if (currentLength > 0) {
            setDisplayedWord(displayedWord.substring(0, currentLength - 1));
            currentLength--;
            typingTimeoutRef.current = setTimeout(
              deleteLetter,
              typingSpeedMs // Use same speed for deleting, adjust if needed
            );
          } else {
            // Finished typing out, pick next word and move to TYPING_IN
            typingTimeoutRef.current = null;
            setCurrentWordIndex(
              (prevIndex) => (prevIndex + 1) % wordsToRotate.length
            );
            setPhase("TYPING_IN");
          }
        };
        // Start the deleting animation
        typingTimeoutRef.current = setTimeout(deleteLetter, typingSpeedMs);
        break;
      }
    }

    // --- Cleanup Function ---
    // This runs when the component unmounts OR before the effect runs again
    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      if (phaseTimeoutRef.current) clearTimeout(phaseTimeoutRef.current);
    };
  }, [phase, currentWordIndex, rotationSpeedMs, typingSpeedMs]); // Dependencies that trigger the effect

  // --- Styles ---
  const componentStyle: React.CSSProperties = {
    color: textColor,
    fontSize: `${textSize}px`,
    fontFamily: "monospace",
    whiteSpace: "pre-wrap", // Important for multi-word phrases
    minHeight: `${textSize * 1.5}px`, // Prevent layout shift during empty state
    display: "inline-block", // Ensures minHeight works correctly
  };

  const dynamicWordStyle: React.CSSProperties = {
    color: highlightColor,
  };

  // --- Blinking Cursor Logic ---
  const [cursorVisible, setCursorVisible] = useState(true);
  // Cursor should blink during typing/deleting phases
  const isAnimating = phase === "TYPING_IN" || phase === "TYPING_OUT";

  useEffect(() => {
    if (!isAnimating) {
      // Keep cursor solid/visible when WAITING
      setCursorVisible(false);
      return () => {}; // No cleanup needed if not blinking
    }

    // Blink when animating
    const blinkInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 250); // Standard blink rate
    setCursorVisible(true); // Ensure cursor is visible when animation starts

    return () => clearInterval(blinkInterval); // Cleanup interval on phase change or unmount
  }, [isAnimating]);

  return (
    <div style={componentStyle}>
      {preString}
      <span style={dynamicWordStyle}>
        {displayedWord}
        {/* Cursor: always render the span, control visibility with opacity */}
        <span
          style={{
            opacity: cursorVisible ? 1 : 0,
            transition: "opacity 0.1s", // Optional: smooth blink
          }}
        >
          |{/* Using a pipe character as cursor */}
        </span>
      </span>
      {postString}
    </div>
  );
}

// // Default values for the props
// RotatingHeadline.defaultProps = {
//   textColor: "#333333",
//   highlightColor: "#0055FF",
//   textSize: 16,
//   rotationSpeedMs: 2000, // Adjusted default wait time
//   typingSpeedMs: 80, // Adjusted default typing speed
// };

// // Define ALL the controls that appear in the Framer properties panel
// addPropertyControls(RotatingHeadline, {
//   // --- Styling Controls ---
//   textSize: {
//     title: "Text Size",
//     type: ControlType.Number,
//     defaultValue: 16,
//     min: 8,
//     max: 120,
//     step: 1,
//     displayStepper: true,
//     unit: "px",
//   },
//   textColor: {
//     title: "Text Color",
//     type: ControlType.Color,
//     defaultValue: "#333333",
//   },
//   highlightColor: {
//     title: "Highlight Color",
//     type: ControlType.Color,
//     defaultValue: "#0055FF",
//   },
//   // --- Timing Controls ---
//   rotationSpeedMs: {
//     title: "Wait Delay", // Renamed for clarity
//     type: ControlType.Number,
//     defaultValue: 2000,
//     min: 100,
//     max: 20000,
//     step: 100,
//     unit: "ms",
//     tooltip: "Time to wait after a word is fully typed before deleting",
//   },
//   typingSpeedMs: {
//     title: "Typing/Deleting Speed", // Renamed for clarity
//     type: ControlType.Number,
//     defaultValue: 80,
//     min: 10,
//     max: 500,
//     step: 10,
//     unit: "ms",
//     tooltip:
//       "Time between each letter appearing/disappearing (lower is faster)",
//   },
// });
