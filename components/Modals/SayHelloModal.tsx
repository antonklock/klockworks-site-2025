"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

interface SayHelloModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonPosition?: { x: number; y: number };
}

export default function SayHelloModal({
  isOpen,
  onClose,
  buttonPosition,
}: SayHelloModalProps) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const backgroundRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // GSAP animations and modal behavior
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";

      // Animate in
      const tl = gsap.timeline();

      // Calculate positions - use button position if available, otherwise screen center
      const startPosition = buttonPosition || {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };

      tl.set(backgroundRef.current, {
        opacity: 0,
      })
        .set(modalRef.current, {
          opacity: 0,
          scale: 0.8,
          x: startPosition.x - window.innerWidth / 2,
          y: startPosition.y - window.innerHeight / 2,
        })
        .to(backgroundRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          modalRef.current,
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.1"
        );
    } else {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";

      // Animate out
      const tl = gsap.timeline({
        onComplete: () => {
          if (backgroundRef.current && modalRef.current) {
            gsap.set(backgroundRef.current, { display: "none" });
            gsap.set(modalRef.current, { display: "none" });
          }
        },
      });

      // Calculate end position - use button position if available, otherwise screen center
      const endPosition = buttonPosition || {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };

      tl.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        x: endPosition.x - window.innerWidth / 2,
        y: endPosition.y - window.innerHeight / 2,
        duration: 0.4,
        ease: "power2.in",
      }).to(
        backgroundRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        },
        "-=0.2"
      );
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, buttonPosition]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, subject, message });
    onClose();
  };

  // Handle background click to close modal
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Only render when explicitly open
  if (!isOpen) return null;

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleBackgroundClick}
    >
      <div
        ref={modalRef}
        className="bg-black rounded-lg p-8 w-full max-w-md mx-4 shadow-2xl"
      >
        {/* Header with close button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-2xl font-bold">Say Hello</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors duration-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-white text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kwRed focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-white text-sm font-medium mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kwRed focus:border-transparent"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-white text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kwRed focus:border-transparent resize-none"
              placeholder="Tell me more..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-kwRed hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-kwRed focus:ring-offset-2 focus:ring-offset-black"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
