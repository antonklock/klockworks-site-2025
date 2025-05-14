import React, { useState, useEffect, useRef } from "react";

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
const preString = "I'm Anton, ";
const postString =
  "with a love for dynamic & playful experiences. Let's cook up some video content, motion graphics, web or game magic!";

interface RotatingHeadlineProps {
  textColor: string;
  highlightColor: string;
  rotationSpeedMs: number;
  typingSpeedMs: number;
}

type AnimationPhase = "TYPING_IN" | "WAITING" | "TYPING_OUT";

export function RotatingHeadline(props: Readonly<RotatingHeadlineProps>) {
  const { textColor, highlightColor, rotationSpeedMs, typingSpeedMs } = props;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [phase, setPhase] = useState<AnimationPhase>("TYPING_IN");

  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const phaseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
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
            typingTimeoutRef.current = null;
            setPhase("WAITING");
          }
        };
        typingTimeoutRef.current = setTimeout(typeLetter, typingSpeedMs);
        break;
      }

      case "WAITING": {
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
            typingTimeoutRef.current = setTimeout(deleteLetter, typingSpeedMs);
          } else {
            typingTimeoutRef.current = null;
            setCurrentWordIndex(
              (prevIndex) => (prevIndex + 1) % wordsToRotate.length
            );
            setPhase("TYPING_IN");
          }
        };
        typingTimeoutRef.current = setTimeout(deleteLetter, typingSpeedMs);
        break;
      }
    }

    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      if (phaseTimeoutRef.current) clearTimeout(phaseTimeoutRef.current);
    };
  }, [phase, currentWordIndex, rotationSpeedMs, typingSpeedMs]);

  // --- Blinking Cursor Logic ---
  const [cursorVisible, setCursorVisible] = useState(true);
  const isAnimating = phase === "TYPING_IN" || phase === "TYPING_OUT";

  useEffect(() => {
    if (!isAnimating) {
      setCursorVisible(false);
      return () => {};
    }

    // Blink when animating
    const blinkRate = 250;
    const blinkInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, blinkRate);
    setCursorVisible(true);

    return () => clearInterval(blinkInterval);
  }, [isAnimating]);

  return (
    <div className={`color-[${textColor}] font-mono text-lg md:text-2xl`}>
      {preString}
      <span style={{ color: highlightColor, display: "inline" }}>
        {displayedWord}
        <span
          style={{
            opacity: cursorVisible ? 1 : 0,
            transition: "opacity 0.1s",
          }}
        >
          | {/* Using a pipe character as cursor */}
        </span>
      </span>
      <br />
      {postString}
    </div>
  );
}
